import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Icon, Select } from '../../../components';
// import DeleteModal from '../../../components/Modal/DeleteModal';
import { useDebounce } from '../../../hooks';
import { Page, Wrapper } from '../../../layout';
import MockTestService from '../../../service/mockTest.service';
import { EVENT_TYPE_OPTIONS } from '../../../types/events';
import { MockTest } from '../../../types/mockTest';

interface CustomTimeInputProps {
  date: Date | null;
  onChangeCustom: (date: Date | null, time: string, isStartDate: boolean) => void;
  isStartDate: boolean;
}

const CustomTimeInput: React.FC<CustomTimeInputProps> = ({ date, onChangeCustom, isStartDate }) => {
  const value =
    date instanceof Date
      ? // Getting time from Date because `value` comes here without seconds
        date.toLocaleTimeString('it-IT')
      : '';

  return (
    <input
      type='time'
      step='1'
      value={value}
      onChange={(event) => onChangeCustom(date, event.target.value, isStartDate)}
    />
  );
};

const EventEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params?.id ?? '';
  const [event, setMockTest] = useState<MockTest>();

  const [name, setName] = useState('');
  const [venue, setVenue] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [duration, setDuration] = useState<{ start: number; end: number }>({ start: 0, end: 0 });

  const [canSave, setCanSave] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [deleteModal, setDeleteModal] = useState(false);

  const handleChangeTime = (date: Date | null, time: string, isStartDate: boolean) => {
    const [hh, mm, ss] = time.split(':');
    const targetDate = date instanceof Date ? date : new Date();
    targetDate.setHours(Number(hh) || 0, Number(mm) || 0, Number(ss) || 0);
    if (isStartDate) {
      setDuration({ ...duration, start: new Date(targetDate || 0).getTime() });
    } else setDuration({ ...duration, end: new Date(targetDate || 0).getTime() });
  };

  // const onDeleteEvent = (slotNumber: number) => {
  //   if (mockTest?._id !== null) {
  //     MockTestService.deleteSlot(mockTest?._id || '', slotNumber)
  //       .then((_res) => {
  //         toast.success('Xóa ca thi thử thành công');
  //         setMockTest(_res.data.payload);
  //       })
  //       .catch((err) => {
  //         toast.error(err.response.data.message);
  //       });
  //   }
  // };

  const setSave = useDebounce(() => {
    if (event) {
      setCanSave(
        name === event.name &&
          type === event.type &&
          _.trim(description) === event.description &&
          isHidden === event.isHidden
      );
    }
  });

  const fetchData = useCallback(() => {
    setLoading(true);
    MockTestService.getById(id, true)
      .then((res) => {
        setMockTest(res.data.payload);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleOnSave = useDebounce((): void => {
    // const formData = {
    //   name,
    //   description,
    //   type,
    //   isHidden,
    // };
    // MockTestService.editGeneralInformation(id, formData, true)
    //   .then(() => {
    //     toast.success('Chỉnh sửa thành công');
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   })
    //   .finally(() => {
    //     fetchData();
    //   });
  });

  useEffect(() => {
    if (event) {
      setName(event.name);
      setDescription(event.description);
      setType(event.type);
      setIsHidden(event.isHidden);
    }
  }, [event]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setSave();
  }, [name, type, description, isHidden, setSave, duration]);

  return (
    <Page>
      {/* <DeleteModal
        text='Bạn có chắc chắn muốn xóa sự kiện này?'
        onClose={() => setDeleteModal(false)}
        show={deleteModal}
        onDelete={() => onDeleteSlot(slotToDelete ?? -1)}
      /> */}
      <Wrapper className='flex flex-1 flex-col'>
        <div className='w-full bg-[#4285F4]/90 py-4'>
          <p className='text-center text-sm font-bold text-white md:text-2xl 3xl:text-4xl'>
            Chỉnh sửa sự kiện
          </p>
        </div>
        <div className='w-full p-4'>
          <button
            type='button'
            onClick={() => navigate(-1)}
            className='mb-2 flex items-center hover:underline'
          >
            <Icon.Chevron className='h-5 -rotate-90 fill-black' />
            <p className='text-sm text-[#5B5B5B]'>Quay lại</p>
          </button>

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
            <div
              className='h-full w-full rounded-lg bg-white px-8 py-2
            lg:px-10 lg:py-4 3xl:px-12 3xl:py-6'
            >
              <form className='flex flex-col gap-y-6'>
                <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>ID sự kiện: {id}</p>
                <div className='flex w-full flex-col items-start justify-center'>
                  <label className='mb-2 w-full' htmlFor='event-name'>
                    <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                      Tên sự kiện
                    </p>
                  </label>
                  <input
                    id='event-name'
                    className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                    value={name}
                    placeholder='Nhập tên sự kiện'
                    onChange={({ target }) => setName(target.value)}
                  />
                </div>

                <div className='flex w-full flex-1 flex-row items-end justify-start gap-x-4'>
                  <div className='flex w-full flex-1 flex-col'>
                    <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                      Danh mục
                    </p>
                    <Select
                      options={EVENT_TYPE_OPTIONS}
                      value={EVENT_TYPE_OPTIONS.find((x) => x.value === type) ?? null}
                      onChange={(v) => {
                        if (v !== null) {
                          setType(v.value);
                        }
                      }}
                      placeholder='Chọn danh mục'
                    />
                  </div>

                  <div className='flex w-full flex-1 flex-col'>
                    <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                      Địa điểm
                    </p>
                    <input
                      id='event-venue'
                      className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      value={venue}
                      placeholder='Nhập địa điểm tổ chức'
                      onChange={({ target }) => setVenue(target.value)}
                    />
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
                    <DatePicker
                      selected={duration.start === 0 ? new Date() : new Date(duration.start)}
                      showTimeInput
                      timeInputLabel='Time:'
                      onChange={(date) =>
                        setDuration({ ...duration, start: new Date(date || 0).getTime() })
                      }
                      className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                    lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      dateFormat={'dd/MM/yyyy HH:mm:ss'}
                      customTimeInput={
                        <CustomTimeInput
                          date={duration.start === 0 ? new Date() : new Date(duration.start)}
                          onChangeCustom={handleChangeTime}
                          isStartDate={false}
                        />
                      }
                    />
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
                    <DatePicker
                      selected={duration.end === 0 ? new Date() : new Date(duration.end)}
                      showTimeInput
                      timeInputLabel='Time:'
                      onChange={(date) =>
                        setDuration({ ...duration, end: new Date(date || 0).getTime() })
                      }
                      className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                    lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      dateFormat={'dd/MM/yyyy HH:mm:ss'}
                      customTimeInput={
                        <CustomTimeInput
                          date={duration.end === 0 ? new Date() : new Date(duration.end)}
                          onChangeCustom={handleChangeTime}
                          isStartDate={false}
                        />
                      }
                    />
                  </div>
                </div>

                <div className='flex w-full flex-col items-start justify-center'>
                  <label className='mb-2 w-full' htmlFor='event-description'>
                    <p className='w-full text-sm font-semibold lg:text-base 3xl:text-xl'>
                      Chú thích
                    </p>
                  </label>
                  <textarea
                    id='event-description'
                    className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs
                  font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base '
                    value={description}
                    placeholder='Nhập chú thích sự kiện'
                    rows={5}
                    onChange={({ target }) => {
                      setDescription(target.value);
                    }}
                  />
                </div>

                <div className='my-5 flex w-full flex-row justify-between'>
                  <div className='flex w-full flex-row items-center justify-start gap-x-4'>
                    <p className='flex text-sm font-medium lg:text-base 3xl:text-base'>
                      Hiển thị với người dùng:
                    </p>
                    <input
                      type='checkbox'
                      className='allow-checked h-7 w-7 cursor-pointer'
                      checked={!isHidden}
                      onChange={() => setIsHidden(!isHidden)}
                    />
                  </div>
                  <div className='flex flex-row-reverse gap-x-8'>
                    <button
                      className={`flex items-center rounded-lg px-6 py-1
                      transition-all duration-200 lg:px-7 lg:py-2 3xl:px-8 3xl:py-3 ${
                        !canSave ? 'bg-[#4285F4]/80 hover:bg-[#4285F4]' : 'bg-gray-400/80'
                      }`}
                      disabled={canSave}
                      onClick={(e) => {
                        e.preventDefault();
                        handleOnSave();
                      }}
                    >
                      <p className='whitespace-nowrap text-white'>Lưu thay đổi</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        <ToastContainer position='bottom-right' />
      </Wrapper>
    </Page>
  );
};

export default EventEdit;
