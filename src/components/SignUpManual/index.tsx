import Icon from '../Icon';

const SignUpManual = () => {
  return (
    <div className='flex h-full w-full flex-col justify-center gap-2 md:flex-row lg:gap-4 2xl:gap-5'>
      <div className='hidden h-full w-[30%] flex-row items-center justify-center md:flex lg:w-[40%] xl:w-[30%] 4xl:w-[25%]'>
        <div className='flex aspect-square w-full flex-row items-center justify-center rounded-full bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]'>
          <h1 className='p-[1rem] text-center text-[20px] font-bold text-black lg:text-[24px] xl:text-[28px] 3xl:text-[36px]'>
            Cách thức <br />
            tham gia
          </h1>
        </div>
      </div>
      <div className='flex h-full w-full flex-col space-y-[1.5rem] md:space-y-[2.5rem]'>
        <div className='relative flex h-[7rem] w-full flex-row-reverse items-center justify-end rounded-[1.25rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[3rem] lg:h-[8rem] lg:px-[3.5rem] xl:h-[10rem]'>
          <p className='mx-[1rem] text-[20px] font-normal text-[#696984] lg:text-[24px] xl:text-[28px] 3xl:text-[32px]'>
            Đăng ký lớp học{' '}
            <span className='cursor-pointer underline underline-offset-4'>tại đây</span>
          </p>
          <div className='static top-[1.25rem] -left-[2.5rem] z-[2] m-0 flex aspect-square h-[3.5rem] w-[3.5rem] flex-col items-center justify-center rounded-full bg-[#00CBB8] md:absolute md:m-auto md:h-[4.5rem] md:w-[4.5rem] lg:top-[1.75rem] xl:top-[1.875rem] xl:-left-[3.125rem] xl:h-[6.25rem] xl:w-[6.25rem]'>
            <Icon.CalendarIconWhite className='h-[50%] md:h-full' />
          </div>
        </div>
        <div className='relative ml-0 flex h-[7rem] w-full flex-row-reverse items-center justify-end rounded-[1.25rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:ml-[5rem] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[3rem] lg:h-[8rem] lg:px-[3.5rem] xl:h-[10rem]'>
          <p className='mx-[1rem] text-[20px] font-normal text-[#696984] lg:text-[24px] xl:text-[28px] 3xl:text-[32px]'>
            Sử dụng mã QR để check-in trước khi vào lớp
          </p>
          <div className='static top-[1.25rem] -left-[2.5rem] z-[2] m-0 flex aspect-square h-[3.5rem] w-[3.5rem] flex-col items-center justify-center rounded-full bg-[#29B9E6] md:absolute md:m-auto md:h-[4.5rem] md:w-[4.5rem] lg:top-[1.75rem] xl:top-[1.875rem] xl:-left-[3.125rem] xl:h-[6.25rem] xl:w-[6.25rem]'>
            <Icon.IpodWhite className='h-[50%] md:h-full' />
          </div>
        </div>
        <div className='relative flex h-[7rem] w-full flex-row-reverse items-center justify-end rounded-[1.25rem] bg-white px-[1rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:w-[85%] md:flex-col md:items-start md:justify-center md:px-[3rem] lg:h-[8rem] lg:px-[3.5rem] xl:h-[10rem]'>
          <p className='mx-[1rem] text-[20px] font-normal text-[#696984] lg:text-[24px] xl:text-[28px] 3xl:text-[32px]'>
            Nhận tài liệu và tham gia lớp học
          </p>
          <div className='static top-[1.25rem] -left-[2.5rem] z-[2] m-0 flex aspect-square h-[3.5rem] w-[3.5rem] flex-col items-center justify-center rounded-full bg-[#5B72EE] md:absolute md:m-auto md:h-[4.5rem] md:w-[4.5rem] lg:top-[1.75rem] xl:top-[1.875rem] xl:-left-[3.125rem] xl:h-[6.25rem] xl:w-[6.25rem]'>
            <Icon.FileInvoiceWhite className='h-[50%] md:h-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpManual;
