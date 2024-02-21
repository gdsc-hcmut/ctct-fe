// @ts-ignore
import QrReader from 'modern-react-qr-reader';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCheckIn = () => {
  // const params = useParams();

  // const [canSave, setCanSave] = useState (false);
  // const [selected, setSelected] = useState('environment');
  // const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  // const [data, setData] = useState('');
  // const [checkinlist, setCheckinlist] = useState([]);
  const loading = useRef(false);
  const [isChange, setIsChange] = useState(false);
  const [email, setEmail] = useState('');
  const [toggleScanner, setToggleScanner] = useState(false);

  console.log(loadingScan, 'loadingScan');

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
      toast.success('Checkin Successfully');
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
    // if (!loading.current && scanData) {
    //   // setLoadingScan(true);
    //   loading.current = true;
    //   checkin(scanData.text);
    // }
  };

  const handleEmail = async (inputEmail: any) => {
    if (!loading.current && inputEmail) {
      loading.current = true;
      checkin(inputEmail);
      setEmail('');
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div
      className='mt-4 h-full w-full rounded-lg bg-white px-8 py-2
            lg:px-10 lg:py-4 3xl:px-12 3xl:py-6'
    >
      <form className='flex flex-col gap-y-6'>
        <div className='flex w-full flex-1 flex-col items-center justify-center space-y-4'>
          {toggleScanner && (
            <div>
              <QrReader
                // facingMode={selected}
                onError={handleError}
                onScan={handleScan}
                delay={1000}
                style={{ width: '400px', aspect: '1/1' }}
              />
            </div>
          )}
          <button
            type='button'
            className='m-2 flex flex-row rounded-lg bg-[#4285F4] px-4 py-2 font-medium text-white'
            onClick={() => {
              setToggleScanner(!toggleScanner);
            }}
          >
            {!toggleScanner ? 'Bật camera' : 'Tắt camera'}
          </button>
        </div>

        <div className='flex w-full flex-1 flex-row items-center justify-center gap-x-4'>
          <div className='flex w-full flex-col items-start justify-center'>
            <input
              id='event-name'
              className='flex w-full rounded-lg border border-[#CCC] p-1 text-xs font-medium
                  lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
              value={email}
              placeholder='Nhập email'
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className='flex h-max w-fit flex-col items-center justify-center'>
            <button
              className={
                'p-auto m-auto flex items-center rounded-lg border border-[#4285F4] bg-[#4285F4] font-medium transition-all duration-200'
              }
              onClick={(e) => {
                e.preventDefault();
                handleEmail(email);
              }}
            >
              <p className='whitespace-nowrap p-1 text-xs text-white lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'>
                Xác nhận
              </p>
            </button>
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
              <p className='hidden font-medium md:block'>a.nguyenvananguyenvana@hcmut.edu.vn</p>
            </div>
            <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
          </li>

          <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
            <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
              <p className='font-semibold'>Nguyễn Văn A</p>
              <p className='hidden font-medium md:block'>a.nguyenvananguyenvana@hcmut.edu.vn</p>
            </div>
            <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
          </li>

          <li className='flex w-full flex-row items-center justify-between rounded-xl bg-slate-100 p-2 md:p-4'>
            <div className='grid w-[50%] grid-cols-1 items-center gap-[0.25rem] md:grid-cols-2 lg:w-[70%] lg:gap-[0.5rem]'>
              <p className='font-semibold'>Nguyễn Phước Quý Nhật Anh</p>
              <p className='hidden font-medium md:block'>a.nguyenvananguyenvana@hcmut.edu.vn</p>
            </div>
            <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AdminCheckIn;
