import QRCode from 'qrcode.react';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';

import { Footer, Loading } from '../../../components';
// import Icon from '../../../components/Icon';
import DeleteModal from '../../../components/Modal/DeleteModal';
import ProfileOption from '../../../components/ProfileOption';
import { useDebounce } from '../../../hooks';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import useBoundStore from '../../../store';
import { Event } from '../../../types/events';

const epochToDateString = (epochTime: number): string => {
  const date = new Date(epochTime);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hour}h${minutes}, ${day}/${month}/${year}`;
};

const calculateEpochDuration = (start: number, end: number): string => {
  const minutes = Math.floor((end - start) / 1000 / 60);
  // const hours = Math.floor(minutes / 60);
  // const remainingMinutes = minutes % 60;
  // return `${hours ? `${hours} giờ` : ''} ${remainingMinutes} phút`;
  return `${minutes} phút`;
};

const UserEvent = () => {
  const user = useBoundStore.use.user();

  const eventToDelete = useRef<string | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const onDeleteEvent = () => {
    const eventId = eventToDelete.current;
    if (eventId !== null) {
      EventService.unregister(eventId)
        .then((_res) => {
          toast.success('Huỷ đăng ký sự kiện thành công');
          setDeleteModal(false);
          eventToDelete.current = null;
          getHistory();
          // setPage(1);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
    eventToDelete.current = null;
  };

  const [userQRCode, setUserQRCode] = useState('');

  const getQRCode = useDebounce(() => {
    setLoading(true);
    EventService.getUserQR()
      .then((res) => {
        setUserQRCode(res.data.payload);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  });

  const getHistory = useDebounce(() => {
    setLoading(true);
    EventService.getUserEvents()
      .then((res) => {
        const { result: allEvents } = res.data.payload;
        setEvents(allEvents);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    getQRCode();
  }, [getQRCode]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  if (isLoading) {
    // bug
    return <Loading />;
  }

  return (
    <Page title='Thông tin người dùng - Xem và cập nhật thông tin'>
      <DeleteModal
        text='Bạn có chắc chắn muốn huỷ đăng ký sự kiện này?'
        onClose={() => setDeleteModal(false)}
        show={deleteModal}
        onDelete={() => onDeleteEvent()}
      />
      <main className='with-nav-height w-full overflow-y-auto'>
        <ProfileOption option={4} editAvatar={false} setAvatar={() => {}} updatedName='' />
        <div className='relative mt-[0.5rem] flex flex-col items-center gap-y-0 space-x-4 bg-white px-5 md:mt-[1rem] md:flex-row md:items-start md:rounded-[20px] md:px-12 lg:mb-24 lg:px-24 xl:mt-[1.5rem] 2xl:px-32 3xl:px-40'>
          <div className='flex w-max flex-col items-center justify-center px-[1rem] py-[2rem] shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] md:rounded-[20px] md:px-5 md:py-8 lg:px-8 xl:px-10'>
            <div className='w-full items-center justify-center'>
              <h1 className='mx-auto max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis text-center text-xl font-semibold 2xl:text-2xl 3xl:text-[28px]'>
                Mã QR check-in của bạn
              </h1>
            </div>
            <div className='w-max items-center justify-center bg-white px-[2rem] py-[1rem]'>
              <QRCode
                renderAs='svg'
                bgColor='#FFFFFF'
                fgColor='#000000'
                id='qrcode'
                value={userQRCode}
                size={300}
                style={{
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
            <div className='w-full items-center justify-center'>
              <h1 className='mx-auto max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis text-center text-lg font-medium 2xl:text-xl 3xl:text-[20px]'>
                {user?.email}
              </h1>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center py-[2rem] md:w-full md:rounded-[20px] md:px-5 md:py-8 md:shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] lg:px-8 xl:px-10'>
            <div className='w-full items-center justify-center'>
              <h1 className='max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis px-4 text-xl font-semibold 2xl:text-2xl 3xl:text-[28px]'>
                Lịch sử đăng ký
              </h1>
            </div>
            <ul className='3xl:text-x mx-auto mt-[0.75rem] flex w-full flex-col items-center justify-center space-y-[0.5rem] text-sm md:mt-[1rem] md:space-y-[0.75rem] lg:text-base'>
              {events && events[0]
                ? events.map((event, index) => (
                    <li
                      key={index}
                      className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'
                    >
                      <div className='flex flex-col items-start space-y-[0.5rem]'>
                        <p className='font-semibold text-slate-600'>
                          Lớp học ôn tập - {event.name}
                        </p>
                        <p className=''>
                          {epochToDateString(event.startedAt)} -{' '}
                          {calculateEpochDuration(event.startedAt, event.endedAt)} - {event.venue}
                        </p>
                      </div>
                      <div className='flex flex-col items-end space-y-[0.5rem]'>
                        {event.registeredUsers[0].checkedInAt ? (
                          <>
                            <p className='font-semibold text-[#F4B400]'>Đã đăng ký</p>
                            <button
                              className='cursor-pointer text-slate-600 underline'
                              onClick={(e) => {
                                e.stopPropagation();
                                eventToDelete.current = event._id;
                                setDeleteModal(true);
                              }}
                            >
                              Huỷ đăng ký
                            </button>
                          </>
                        ) : (
                          <>
                            <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                          </>
                        )}
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default UserEvent;
