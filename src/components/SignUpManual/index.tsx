import Icon from '../Icon';

const SignUpManual = () => {
  return (
    <div className='flex h-full w-full flex-col justify-center gap-2 md:flex-row lg:gap-4 2xl:gap-5'>
      <div className='hidden h-full w-[20%] flex-row items-center justify-center md:flex lg:w-[30%] 2xl:w-[25%]'>
        <div className='flex aspect-square w-full flex-row items-center justify-center rounded-full bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]'>
          <h1 className='p-[1rem] text-center text-[16px] font-bold text-black xl:text-[24px]'>
            Cách thức <br />
            tham gia
          </h1>
        </div>
      </div>
      <div className='flex h-full w-full flex-col space-y-[1rem] md:space-y-[1.5rem]'>
        {' '}
        <div className='relative flex h-[3.5rem] w-full flex-row-reverse items-center justify-end rounded-[0.5rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[2.5rem] lg:h-[4rem] lg:px-[2rem] xl:h-[4.5rem]'>
          <p className='mx-[1rem] text-[14px] font-normal text-[#696984] lg:text-[16px] xl:text-[20px] 3xl:text-[24px]'>
            Đăng ký lớp học{' '}
            <button
              className='cursor-pointer underline underline-offset-4'
              onClick={() => {
                const element = document.getElementById('timetable');
                if (element) {
                  element.scrollIntoView();
                }
              }}
            >
              tại đây
            </button>
          </p>
          <div className='static top-[0.75rem] -left-[1rem] z-[2] m-0 flex aspect-square h-[2rem] w-[2rem] flex-col items-center justify-center rounded-full bg-[#4285F4] md:absolute md:top-[0.75rem] md:-left-[1.25rem] md:m-auto md:h-[2.5rem] md:w-[2.5rem] xl:top-[0.75rem] xl:-left-[1.5rem] xl:h-[3rem] xl:w-[3rem]'>
            <Icon.CalendarIconWhite className='h-[55%]' />
          </div>
        </div>
        <div className='relative ml-0 flex h-[3.5rem] w-full flex-row-reverse items-center justify-end rounded-[0.5rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:ml-[2.5rem] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[2.5rem] lg:h-[4rem] lg:px-[2rem] xl:h-[4.5rem]'>
          <p className='mx-[1rem] text-[14px] font-normal text-[#696984] lg:text-[16px] xl:text-[20px] 3xl:text-[24px]'>
            Sử dụng mã QR để check-in trước khi vào lớp
          </p>{' '}
          <div className='static top-[0.75rem] -left-[1rem] z-[2] m-0 flex aspect-square h-[2rem] w-[2rem] flex-col items-center justify-center rounded-full bg-[#4285F4] md:absolute md:top-[0.75rem] md:-left-[1.25rem] md:m-auto md:h-[2.5rem] md:w-[2.5rem] xl:top-[0.75rem] xl:-left-[1.5rem] xl:h-[3rem] xl:w-[3rem]'>
            <Icon.IpodWhite className='h-[60%]' />
          </div>
        </div>
        <div className='relative flex h-[3.5rem] w-full flex-row-reverse items-center justify-end rounded-[0.5rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:h-[4rem] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[2rem] xl:h-[4.5rem]'>
          <p className='mx-[1rem] text-[14px] font-normal text-[#696984] lg:text-[16px] xl:text-[20px] 3xl:text-[24px]'>
            Nhận tài liệu và tham gia lớp học
          </p>{' '}
          <div className='static top-[0.75rem] -left-[1rem] z-[2] m-0 flex aspect-square h-[2rem] w-[2rem] flex-col items-center justify-center rounded-full bg-[#4285F4] md:absolute md:top-[0.75rem] md:-left-[1.25rem] md:m-auto md:h-[2.5rem] md:w-[2.5rem] xl:top-[0.75rem] xl:-left-[1.5rem] xl:h-[3rem] xl:w-[3rem]'>
            <Icon.FileInvoiceWhite className='h-[65%]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpManual;
