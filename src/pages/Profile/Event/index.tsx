import QRCode from 'qrcode.react';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';

import { Footer, Loading, Pagination } from '../../../components';
import DeleteModal from '../../../components/Modal/DeleteModal';
import ProfileOption from '../../../components/ProfileOption';
import { useDebounce } from '../../../hooks';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import useBoundStore from '../../../store';
import { Event, EventType } from '../../../types/events';

const ITEMS_PER_PAGE = 10;

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
  return `${minutes} phút`;
};

const UserEvent = () => {
  const user = useBoundStore.use.user();
  const page = useBoundStore.use.page();
  const setPage = useBoundStore.use.setPage();
  const [totalCount, setTotalCount] = useState(1);

  const eventToDelete = useRef<string | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  const onDeleteEvent = () => {
    const eventId = eventToDelete.current;
    if (eventId !== null) {
      EventService.unregister(eventId)
        .then((_res) => {
          toast.success('Huỷ đăng ký sự kiện thành công');
          setDeleteModal(false);
          eventToDelete.current = null;
          fetchHistory();
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

  const fetchHistory = useDebounce(() => {
    setLoading(true);
    EventService.getUserEvents({
      pageNumber: page,
      pageSize: ITEMS_PER_PAGE,
    })
      .then((res) => {
        const { total, result: allEvents } = res.data.payload;
        setEvents(allEvents);
        setTotalCount(total);
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
    fetchHistory();
  }, [fetchHistory, page]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Page title='Thông tin người dùng - Xem và cập nhật thông tin'>
      <DeleteModal
        text='Bạn có chắc chắn muốn huỷ đăng ký sự kiện này?'
        onClose={() => setDeleteModal(false)}
        show={deleteModal}
        onDelete={() => onDeleteEvent()}
        positiveOption='Hủy'
        negativeOption='Huỷ đ.ký'
      />
      <main className='with-nav-height w-full overflow-y-auto'>
        <ProfileOption option={4} editAvatar={false} setAvatar={() => {}} updatedName='' />
        <div className='relative mt-[0.5rem] flex flex-col items-center gap-y-0 space-x-0 bg-white px-5 md:mt-[1rem] md:flex-row md:items-start md:rounded-[20px] md:px-12 lg:mb-24 lg:px-24 xl:mt-[1.5rem] xl:space-x-4 2xl:px-32 3xl:px-40'>
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
          <div className='flex w-full flex-col items-center justify-center py-[2rem] px-0 md:w-full md:rounded-[20px] md:px-5 md:py-8 md:shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] lg:px-8 xl:px-10'>
            <div className='w-full items-center justify-center'>
              <h1 className='max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis px-4 text-xl font-semibold 2xl:text-2xl 3xl:text-[28px]'>
                Lịch sử đăng ký
              </h1>
            </div>
            <ul className='mt-[0.75rem] flex w-full flex-col items-center justify-center space-y-[0.5rem] text-sm md:space-y-[0.75rem] lg:text-base xl:mt-[1rem]'>
              {events && events[0]
                ? events.map((event, index) => (
                    <li
                      key={index}
                      className='flex h-fit w-full flex-row items-center justify-between space-x-[0.5rem] rounded-[1rem] bg-white p-4 shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] xl:bg-slate-50 xl:hover:bg-slate-100'
                    >
                      <div className='hidden flex-col items-start space-y-[0.5rem] xl:block'>
                        <p className='font-semibold text-slate-600'>
                          {event.eventType === EventType.LHOT ? 'Lớp học ôn tập -' : ''}{' '}
                          {event.name}
                        </p>
                        <p className=''>
                          {epochToDateString(event.startedAt)} -{' '}
                          {calculateEpochDuration(event.startedAt, event.endedAt)} - {event.venue}
                        </p>
                      </div>

                      <div className='flex flex-col items-start space-y-[0.5rem] xl:hidden'>
                        <p className='font-semibold text-slate-600'>
                          {event.eventType === EventType.LHOT ? 'LHOT -' : ''} {event.name}
                        </p>
                        <p className=''>{epochToDateString(event.startedAt)}</p>
                        <p className=''>{event.venue}</p>
                      </div>

                      <div className='flex flex-col items-end space-y-[0.5rem]'>
                        {event.registeredUsers[0].checkedInAt ? (
                          <>
                            <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                          </>
                        ) : event.endedAt < Date.now() ? (
                          <>
                            <p className='font-semibold text-slate-600'>Đã kết thúc</p>
                          </>
                        ) : (
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
                        )}
                      </div>
                    </li>
                  ))
                : null}
            </ul>
            <Pagination
              pageSize={ITEMS_PER_PAGE}
              totalCount={totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default UserEvent;
