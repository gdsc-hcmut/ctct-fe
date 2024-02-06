// import { useWindowDimensions } from '../../hooks';

// interface TimetableCardProps {}

const TimetableCard = () => {
  // const { width } = useWindowDimensions();

  return (
    <div className='relative flex min-h-[85%] w-[33%] cursor-pointer flex-col items-start space-y-[0.25rem] rounded-[1.25rem] bg-white p-[1.25rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)]'>
      <p className='text-[28px] font-bold text-[#2F327D]'>Vật lý 1</p>
      <p className='font-semibold text-[#696984]'>Phòng 210H6</p>
      <p className='text-[#696984]'>8h00 - 11h00</p>
      <p className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] text-[#696984] underline'>
        Đăng ký
      </p>
    </div>
  );
};

export default TimetableCard;
