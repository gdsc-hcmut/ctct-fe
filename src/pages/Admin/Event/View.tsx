import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Icon } from '../../../components';
import AdminCheckIn from '../../../components/AdminCheckIn';
import { Page, Wrapper } from '../../../layout';
import EventService from '../../../service/event.service';
import { EVENT_TYPE_OPTIONS, Event, EventType } from '../../../types/events';

const EventView = () => {
  const params = useParams();
  const id = params?.id ?? '';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    setLoading(true);
    EventService.getById(id, true)
      .then((res) => {
        const result = res.data.payload;
        console.log(result);
        setEvent(result);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const formattedDate = (date: number) => {
    const d = new Date(date);
    const dateString = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`;
    const monthString = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`;
    const hourString = d.getHours() < 10 ? `0${d.getHours()}` : `${d.getHours()}`;
    const minuteString = d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
    const secondString = d.getSeconds() < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`;
    return `${dateString}/${monthString}/${d.getFullYear()} ${hourString}:${minuteString}:${secondString}`;
  };

  return (
    <Page>
      <Wrapper className='flex flex-1 flex-col'>
        <div className='w-full bg-[#4285F4]/90 py-4'>
          <p className='text-center text-sm font-bold text-white md:text-2xl 3xl:text-4xl'>
            Xem thông tin sự kiện
          </p>
        </div>
        <div className='w-full p-4'>
          <Link className='mb-2 flex items-center hover:underline' to='/admin/event/manage'>
            <Icon.Chevron className='h-5 -rotate-90 fill-black' />
            <p className='text-sm text-[#5B5B5B]'>Quay lại</p>
          </Link>
          {loading ? (
            <>
              <p className='mb-5 w-full px-6 lg:px-8 3xl:px-10'>
                <Skeleton width={'100%'} baseColor='#9DCCFF' height={56} />
              </p>
              <p className='w-full px-6 lg:px-8 3xl:px-10'>
                {
                  <Skeleton
                    count={10}
                    className='my-2 box-content lg:my-4 3xl:my-6'
                    width={'100%'}
                    height={40}
                    baseColor='#9DCCFF'
                  />
                }
              </p>
            </>
          ) : (
            <>
              <div
                className='h-full w-full rounded-lg bg-white px-8
            py-2 lg:px-10 lg:py-4 3xl:px-12 3xl:py-6'
              >
                <form className='flex flex-col gap-y-6'>
                  <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>
                    ID sự kiện: {id}
                  </p>
                  <div className='flex w-full flex-col items-start justify-center'>
                    <label className='mb-2 w-full' htmlFor='event-name'>
                      <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                        Tên sự kiện
                      </p>
                    </label>
                    <div
                      id='event-name'
                      className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                    >
                      {event?.name}
                    </div>
                  </div>

                  <div className='flex w-full flex-1 flex-row items-end justify-start gap-x-4'>
                    <div className='flex w-full flex-1 flex-col'>
                      <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                        Danh mục
                      </p>
                      <div className='flex h-full w-full flex-1 rounded-lg border border-[#CCC] p-1 text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                        <span>
                          {EVENT_TYPE_OPTIONS.find((option) => option.value === event?.eventType)
                            ?.label || ''}
                        </span>
                      </div>
                    </div>

                    <div className='flex w-full flex-1 flex-col'>
                      <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                        Địa điểm
                      </p>
                      <div
                        id='event-venue'
                        className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      >
                        {event?.venue}
                      </div>
                    </div>

                    <div className='flex w-full flex-1 flex-col'>
                      <p className='hidden w-full text-sm font-semibold lg:block lg:text-base 3xl:text-xl'>
                        Thời gian bắt đầu
                      </p>
                      <p className='hidden w-full text-sm font-semibold md:block lg:hidden lg:text-base 3xl:text-xl'>
                        T.gian bắt đầu
                      </p>
                      <p className='block w-full text-sm font-semibold md:hidden lg:text-base 3xl:text-xl'>
                        Bắt đầu
                      </p>
                      <div className='flex w-full flex-1 items-center rounded-lg border border-[#CCC] bg-[#efefef4d]  p-1 text-xs font-medium text-[#252641] lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                        {formattedDate(event?.startedAt || 0) || 'Chưa có thời gian'}
                      </div>
                    </div>

                    <div className='flex w-full flex-1 flex-col'>
                      <p className='hidden w-full text-sm font-semibold lg:block lg:text-base 3xl:text-xl'>
                        Thời gian kết thúc
                      </p>
                      <p className='hidden w-full text-sm font-semibold md:block lg:hidden lg:text-base 3xl:text-xl'>
                        T.gian kết thúc
                      </p>
                      <p className='block w-full text-sm font-semibold md:hidden lg:text-base 3xl:text-xl'>
                        Kết thúc
                      </p>
                      <div className='flex w-full flex-1 items-center rounded-lg border border-[#CCC] bg-[#efefef4d]  p-1 text-xs font-medium text-[#252641] lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                        {formattedDate(event?.endedAt || 0) || 'Chưa có thời gian'}
                      </div>
                    </div>
                  </div>

                  {event?.eventType === EventType.LHOT && (
                    <div className='flex w-full flex-1 flex-row items-end justify-start gap-x-4'>
                      <div className='flex w-full flex-1 flex-col'>
                        <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>Môn</p>
                        <div className='flex h-full w-full flex-1 rounded-lg border border-[#CCC] p-1 text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                          <span>{event?.lhotMetadata?.subject?.name || 'Chưa có môn học'}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {event?.eventType !== EventType.LHOT && (
                    <div className='flex w-full flex-1 flex-row items-end justify-start gap-x-4'>
                      <div className='flex w-full flex-row items-center justify-start gap-x-4'>
                        <p className='flex text-sm font-medium lg:text-base 3xl:text-base'>
                          Giới hạn thời gian đăng ký:
                        </p>
                        <input
                          type='checkbox'
                          className='allow-checked h-4 w-4 cursor-pointer'
                          checked={event?.hasRegistrationTime}
                          disabled
                        />
                      </div>
                    </div>
                  )}

                  {event?.hasRegistrationTime === true && (
                    <div className='flex w-full flex-1 flex-row items-end justify-start gap-x-4'>
                      <div className='flex w-full flex-1 flex-col'>
                        <p className='hidden w-full text-sm font-semibold lg:block lg:text-base 3xl:text-xl'>
                          Thời gian bắt đầu đăng ký
                        </p>
                        <p className='hidden w-full text-sm font-semibold md:block lg:hidden lg:text-base 3xl:text-xl'>
                          T.gian bắt đầu đ.ký
                        </p>
                        <p className='block w-full text-sm font-semibold md:hidden lg:text-base 3xl:text-xl'>
                          Bắt đầu đăng ký
                        </p>
                        <div className='flex w-full flex-1 items-center rounded-lg border border-[#CCC] bg-[#efefef4d]  p-1 text-xs font-medium text-[#252641] lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                          {formattedDate(event?.registrationStartedAt || 0) || 'Chưa có thời gian'}
                        </div>
                      </div>

                      <div className='flex w-full flex-1 flex-col'>
                        <p className='hidden w-full text-sm font-semibold lg:block lg:text-base 3xl:text-xl'>
                          Thời gian kết thúc đăng ký
                        </p>
                        <p className='hidden w-full text-sm font-semibold md:block lg:hidden lg:text-base 3xl:text-xl'>
                          T.gian kết thúc đ.ký
                        </p>
                        <p className='block w-full text-sm font-semibold md:hidden lg:text-base 3xl:text-xl'>
                          Kết thúc đăng ký
                        </p>
                        <div className='flex w-full flex-1 items-center rounded-lg border border-[#CCC] bg-[#efefef4d]  p-1 text-xs font-medium text-[#252641] lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                          {formattedDate(event?.registrationEndedAt || 0) || 'Chưa có thời gian'}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className='flex w-full flex-col items-start justify-center'>
                    <label className='mb-2 w-full' htmlFor='event-description'>
                      <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                        Chú thích
                      </p>
                    </label>
                    <textarea
                      id='exam-description'
                      value={event?.description || ''}
                      placeholder='Không có chú thích'
                      rows={5}
                      className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs
                  font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      disabled
                    />
                  </div>
                </form>
                <div className='my-4 flex flex-row-reverse gap-x-8'>
                  <button
                    type='button'
                    onClick={() => navigate(`/admin/event/edit/${params.id}`)}
                    className='w-fit cursor-pointer rounded-lg bg-[#4285F4]/80 px-1 transition-all duration-200 hover:bg-[#4285F4] lg:px-3 3xl:px-5'
                  >
                    <p className='p-1 text-xs font-medium text-white lg:p-2 lg:text-sm 3xl:p-3 3xl:text-base'>
                      Chỉnh sửa
                    </p>
                  </button>
                </div>
              </div>
              <AdminCheckIn />
            </>
          )}
        </div>
        <ToastContainer position='bottom-right' />
      </Wrapper>
    </Page>
  );
};

export default EventView;
