import QRCode from 'qrcode.react';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

import { Footer } from '../../../components';
// import Icon from '../../../components/Icon';
import ProfileOption from '../../../components/ProfileOption';
import { Page } from '../../../layout';
// import UserService from '../../../service/user.service';
import useBoundStore from '../../../store';
// import { User } from '../../../types';

const UserEvent = () => {
  const user = useBoundStore.use.user();

  const epochToDateString = (epochTime: number): string => {
    const date = new Date(epochTime);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hour}h${minutes}, ${day}/${month}/${year}`;
  };

  return (
    <Page title='Thông tin người dùng - Xem và cập nhật thông tin'>
      <main className='with-nav-height w-full overflow-y-auto'>
        <ProfileOption option={4} editAvatar={false} setAvatar={() => {}} updatedName='' />
        <div className='relative bg-white px-5 pt-4 pb-[64px] md:flex md:flex-col md:rounded-[20px] md:px-10 md:pt-10 lg:px-[120px] xl:px-[240px] 2xl:px-[360px] 3xl:px-[460px]'>
          <div className='flex flex-col items-center justify-center py-[2rem] shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] md:rounded-[20px] md:px-5 md:py-8 lg:px-8 xl:px-10'>
            <div className='w-full items-center justify-center'>
              <h1 className='mx-auto max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis text-center text-xl font-semibold 2xl:text-2xl 3xl:text-[28px]'>
                Mã QR check-in của bạn
              </h1>
            </div>
            <div className='w-full items-center justify-center bg-white px-[5%] py-[1rem]'>
              <QRCode
                renderAs='svg'
                bgColor='#FFFFFF'
                fgColor='#000000'
                id='qrcode'
                value={'https://www.google.com/'}
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
          <div className='mt-[1rem] flex flex-col items-center justify-center py-[2rem] md:mt-[2rem] md:rounded-[20px] md:px-5 md:py-8 md:shadow-[0px_19px_47px_0px_rgba(47,50,125,0.1)] lg:px-8 xl:px-10'>
            <div className='w-full items-center justify-center'>
              <h1 className='max-h-[32px] max-w-[80vw] overflow-hidden text-ellipsis px-4 text-xl font-semibold 2xl:text-2xl 3xl:text-[28px]'>
                Lịch sử đăng ký
              </h1>
            </div>
            <ul className='3xl:text-x mx-auto mt-[0.75rem] flex w-full flex-col items-center justify-center space-y-[0.5rem] text-sm md:mt-[1rem] md:space-y-[0.75rem] lg:text-base'>
              <li className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'>
                <div className='flex flex-col items-start space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-600'>Lớp học ôn tập - Vật lý 1</p>
                  <p className=''>{epochToDateString(1708399962)} - 120 phút</p>
                </div>
                <div className='flex flex-col items-end space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-400'>Không tham gia</p>
                  <p className='hidden cursor-pointer text-slate-600 underline'>Huỷ đăng ký</p>
                </div>
              </li>

              <li className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'>
                <div className='flex flex-col items-start space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-600'>Lớp học ôn tập - Vật lý 1</p>
                  <p className=''>{epochToDateString(1708399962)} - 120 phút</p>
                </div>
                <div className='flex flex-col items-end space-y-[0.5rem]'>
                  <p className='font-semibold text-[#3d8c40]'>Đã check-in</p>
                  <p className='hidden cursor-pointer text-slate-600 underline'>Huỷ đăng ký</p>
                </div>
              </li>

              <li className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'>
                <div className='flex flex-col items-start space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-600'>Lớp học ôn tập - Vật lý 1</p>
                  <p className=''>{epochToDateString(1708399962)} - 120 phút</p>
                </div>
                <div className='flex flex-col items-end space-y-[0.5rem]'>
                  <p className='font-semibold text-[#fee135]'>Đã đăng ký</p>
                  <p className='cursor-pointer text-slate-600 underline'>Huỷ đăng ký</p>
                </div>
              </li>

              <li className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'>
                <div className='flex flex-col items-start space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-600'>Lớp học ôn tập - Vật lý 1</p>
                  <p className=''>{epochToDateString(1708399962)} - 120 phút</p>
                </div>
                <div className='flex flex-col items-end space-y-[0.5rem]'>
                  <p className='font-semibold text-[#fee135]'>Đã đăng ký</p>
                  <p className='cursor-pointer text-slate-600 underline'>Huỷ đăng ký</p>
                </div>
              </li>

              <li className='flex h-fit w-full flex-row items-center justify-between space-x-[2rem] rounded-[1rem] bg-slate-50 p-4 hover:bg-slate-100'>
                <div className='flex flex-col items-start space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-600'>Lớp học ôn tập - Vật lý 1</p>
                  <p className=''>{epochToDateString(1708399962)} - 120 phút</p>
                </div>
                <div className='flex flex-col items-end space-y-[0.5rem]'>
                  <p className='font-semibold text-slate-400'>Đã huỷ đăng ký</p>
                  <p className='hidden cursor-pointer text-slate-600 underline'>Huỷ đăng ký</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default UserEvent;
