import { useWindowDimensions } from '../../hooks';
import { Subject } from '../../types';
import Icon from '../Icon';

interface TimetableCardProps {
  subject?: Subject;
  startDate: Date;
  endDate: Date;
  location: string;
}

const TimetableCard = ({ subject, startDate, endDate, location }: TimetableCardProps) => {
  const { width } = useWindowDimensions();

  const startTime = startDate.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const endTime = endDate.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='relative flex min-h-[15rem] w-full flex-col items-start space-y-[0.25rem] rounded-[1.25rem] bg-white p-[1.25rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] sm:min-h-[12rem] md:min-h-[85%] md:w-[33%] lg:min-h-[90%] xl:min-h-[85%]'>
      <p className='cursor-pointer text-[24px] font-bold text-[#2F327D] lg:text-[24px]'>
        {subject?.name}
      </p>
      <div className='flex flex-row items-center justify-start space-x-[0.5rem]'>
        {width > 300 && <Icon.LocationTransparent className='max-h-[1.5rem]' />}
        <p className='font-semibold text-[#696984]'>{location}</p>
      </div>
      <div className='flex flex-row items-center justify-start space-x-[0.5rem]'>
        {width > 300 && <Icon.AlarmClock className='max-h-[1.5rem]' />}
        <p className='text-[#696984]'>
          {startTime} - {endTime}
        </p>
      </div>
      <p className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] cursor-pointer text-[#696984] underline'>
        Đăng ký
      </p>
    </div>
  );
};

export default TimetableCard;
