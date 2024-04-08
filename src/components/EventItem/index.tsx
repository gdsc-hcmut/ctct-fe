import { Event } from '../../types/events';

interface EventItemProps {
  event: Event;
}

const EventItem = ({ event }: EventItemProps) => {
  console.log(event);
  return (
    <div className='mb-[2rem] flex flex-col'>
      <div className='flex flex-row'>
        <div className='flex flex-row items-start justify-center'>
          <div className='aspect-square h-auto w-[8.75rem] rounded-full bg-blue-500'></div>
        </div>
        <div className='ml-[1.5rem] flex flex-col lg:ml-[2rem] xl:ml-[2.5rem] 3xl:ml-[3rem]'>
          <div className='flex flex-row'>
            <h3 className='font-semibold text-[#696984]'>Ngày 27 tháng 05 năm 2024</h3>
            <h3 className='ml-[0.75rem] font-normal text-[#696984] lg:ml-[1rem] xl:ml-[1.25rem] 3xl:ml-[1.5rem] '>
              Nhà thi đấu TDTT - Trường Đại học Bách khoa - ĐHQG TP.HCM, cơ sở Dĩ An
            </h3>
          </div>
          <div className='mt-[0.25rem] flex flex-row'>
            <h2 className='text-start text-[20px] font-semibold text-[#000000] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
              NGÀY HỘI SÁCH CŨ TRI THỨC MỚI
            </h2>
          </div>
          <div className='mt-[0.25rem] flex flex-row xl:mt-[0.5rem]'>
            <p className='text-[#696984]'>
              Bạn vừa học xong kì 1, bạn vừa dọn KTX, bạn vừa dọn bàn học. NHƯNG tủ cá nhân chật
              rồi, bàn học và tủ sách cũng kín mít, không còn đủ chỗ cho tất cả những người bạn giáo
              trình đã đồng hành cùng bạn, không còn đủ khoảng trống cho cô cậu sách đã được bạn đọc
              một thời gian
            </p>
          </div>
          <div className='mt-[1rem] flex flex-row xl:mt-[1.5rem]'>
            <div className='flex aspect-[3/1] h-auto w-[10rem] flex-row items-center justify-center rounded-[0.5rem] bg-[#4285F4]'>
              <p className='text-white'>Xem chi tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[2rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
    </div>
  );
};

export default EventItem;
