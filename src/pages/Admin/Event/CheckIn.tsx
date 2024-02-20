import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Icon, Select } from '../../../components';
import { Page, Wrapper } from '../../../layout';
import { EVENT_TYPE_OPTIONS } from '../../../types/events';

const EventCheckIn: React.FC = () => {
  const navigate = useNavigate();
  // const params = useParams();

  const [type, setType] = useState('');
  // const [canSave, setCanSave] = useState (false);
  // const [selected, setSelected] = useState('environment');
  // const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  // const [data, setData] = useState('');
  // const [checkinlist, setCheckinlist] = useState([]);
  const loading = useRef(false);
  const [isChange, setIsChange] = useState(false);

  console.log(loadingScan);
  // setSelected('environment');
  // setCheckinlist([]);

  useEffect(() => {
    try {
      // axios.get(`${API_URL}gic/allcheckin`).then((response) => {
      //   console.log('>>> response: ', response.data.payload);
      //   if (response && response.data && response.data.payload) {
      //     setCheckinlist(response.data.payload);
      //   }
      // });
    } catch (error) {
      toast.error('Can not get Information');
    }
  }, [isChange]);

  const checkin = async (qrcode: any) => {
    console.log(qrcode, 'Checkin');
    try {
      // const response = await axios.post(`${API_URL}gic/checkin`, { qrcode });
      // {qrcode: 'abc'}
      // console.log(response);
      setIsChange(!isChange);
      toast.error('Checkin Successfully');
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error('Checkin Error');
    } finally {
      setLoadingScan(false);
      setTimeout(() => {
        loading.current = false;
      }, 3000);
    }
  };

  const handleScan = async (scanData: any) => {
    console.log(scanData);
    if (!loading.current && scanData) {
      // setLoadingScan(true);
      loading.current = true;
      checkin(scanData.text);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <Page>
      <Wrapper className='flex flex-1 flex-col'>
        <div className='w-full bg-[#4285F4]/90 py-4'>
          <p className='text-center text-sm font-bold text-white md:text-2xl 3xl:text-4xl'>
            Check-In sự kiện
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

          <div
            className='h-full w-full rounded-lg bg-white px-8 py-2
            lg:px-10 lg:py-4 3xl:px-12 3xl:py-6'
          >
            <form className='flex flex-col gap-y-6'>
              <div className='flex w-full flex-1 flex-row items-center justify-center'>
                <div>
                  <QrReader
                    // facingMode={selected}
                    onError={handleError}
                    onScan={handleScan}
                    delay={1000}
                    // chooseDeviceId={()=>selected}
                    style={{ width: '400px', aspect: '1/1' }}
                  />
                </div>
              </div>

              <div className='flex w-full flex-1 flex-row items-center justify-center'>
                <div className='flex w-full flex-col items-start justify-center'>
                  <input
                    id='event-name'
                    className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                    // value={name}
                    placeholder='Nhập email'
                    // onChange={({ target }) => setName(target.value)}
                  />
                </div>
              </div>

              <div className='flex w-full flex-1 flex-row items-center justify-start gap-x-4'>
                <div className='flex w-full flex-1 flex-col'>
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
                  <Select
                    options={EVENT_TYPE_OPTIONS}
                    value={EVENT_TYPE_OPTIONS.find((x) => x.value === type) ?? null}
                    onChange={(v) => {
                      if (v !== null) {
                        setType(v.value);
                      }
                    }}
                    placeholder='Chọn ngày'
                  />
                </div>
                <div className='flex w-full flex-1 flex-col'>
                  <Select
                    options={EVENT_TYPE_OPTIONS}
                    value={EVENT_TYPE_OPTIONS.find((x) => x.value === type) ?? null}
                    onChange={(v) => {
                      if (v !== null) {
                        setType(v.value);
                      }
                    }}
                    placeholder='Chọn môn học'
                  />
                </div>
              </div>

              <ul className='my-5 flex w-full flex-col justify-between gap-2 text-sm md:gap-4 lg:text-base 3xl:text-xl'>
                <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
                  <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
                    <p className='font-semibold'>Đoàn Viết Tiến Đạt</p>
                    <p className='hidden font-medium md:block'>dat.doanviettien@hcmut.edu.vn</p>
                  </div>
                  <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                </li>

                <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
                  <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
                    <p className='font-semibold'>Nguyễn Văn A</p>
                    <p className='hidden font-medium md:block'>
                      a.nguyenvananguyenvana@hcmut.edu.vn
                    </p>
                  </div>
                  <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                </li>

                <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
                  <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
                    <p className='font-semibold'>Nguyễn Văn A</p>
                    <p className='hidden font-medium md:block'>
                      a.nguyenvananguyenvana@hcmut.edu.vn
                    </p>
                  </div>
                  <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                </li>

                <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
                  <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
                    <p className='font-semibold'>Nguyễn Phước Quý Nhật Anh</p>
                    <p className='hidden font-medium md:block'>
                      a.nguyenvananguyenvana@hcmut.edu.vn
                    </p>
                  </div>
                  <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <ToastContainer position='bottom-right' />
      </Wrapper>
    </Page>
  );
};

export default EventCheckIn;
