// import { useWindowDimensions } from '../../hooks';
import TimetableCard from '../TimetableCard';

const TimetableBar = () => {
  // const { width } = useWindowDimensions();

  return (
    <div className='relative flex h-[12rem] w-full flex-row rounded-[1.25rem] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] lg:h-[16rem]'>
      <div className='flex h-full w-[13%] flex-col items-center justify-center rounded-l-[1.25rem] bg-[#5B72EE]'>
        <p className='text-[16px] font-semibold leading-[2rem] text-white lg:text-[20px] lg:font-bold '>
          Thứ Sáu
        </p>
        <p className='text-[64px] font-bold leading-[4rem] text-white lg:text-[80px] lg:leading-[5rem]'>
          02
        </p>
        <p className='text-[16px] font-semibold leading-[2rem] text-white lg:text-[20px] lg:font-bold'>
          Tháng 03
        </p>
      </div>
      <div className='bg-red flex w-full flex-row items-center justify-start space-x-[1.25rem] px-[1.25rem]'>
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
      </div>
    </div>
  );
};

export default TimetableBar;
