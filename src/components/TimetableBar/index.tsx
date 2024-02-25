import { Event } from '../../types/events';
import TimetableCard from '../TimetableCard';

const DayOfWeekVietnamese = [
  'Chủ Nhật',
  'Thứ Hai',
  'Thứ Ba',
  'Thứ Tư',
  'Thứ Năm',
  'Thứ Sáu',
  'Thứ Bảy',
];

const translateDayOfWeekVietnamese = (dayOfWeek: number) => {
  return DayOfWeekVietnamese[dayOfWeek];
};

interface TimetableBarProps {
  date: Date;
  eventSets: Event[];
}

const TimetableBar = ({ date, eventSets }: TimetableBarProps) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const dayOfWeek = translateDayOfWeekVietnamese(date.getDay());

  return (
    <div className='relative flex h-fit w-full flex-col rounded-[1.25rem] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:h-[17rem] md:flex-row'>
      <div className='flex h-[25%] w-full flex-row items-center justify-center rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-bl-none bg-[#5B72EE] md:h-full md:w-[13%] md:flex-col md:space-x-0 md:rounded-tr-none md:rounded-bl-[1.25rem]'>
        <p className='hidden text-[16px] font-semibold leading-[2rem] text-white md:block lg:font-bold xl:text-[20px] '>
          {dayOfWeek}
        </p>
        <p className='hidden text-[48px] font-bold leading-[3rem] text-white md:block md:text-[56px] md:leading-[4rem] xl:text-[80px] xl:leading-[5rem]'>
          {day < 10 ? 0 : ''}
          {day}
        </p>
        <p className='hidden text-[16px] font-semibold leading-[2rem] text-white md:block lg:font-bold xl:text-[20px]'>
          Tháng {month}
        </p>
        <p className='block font-semibold leading-[2.5rem] text-white md:hidden'>
          {dayOfWeek}, ngày {day} tháng {month}
        </p>
      </div>
      <div className='grid w-full grid-cols-2 gap-[1.25rem] py-[1.25rem] px-[1.25rem] md:flex md:flex-row md:items-center md:justify-start md:gap-0 md:space-x-[1.25rem] md:py-0'>
        {eventSets.map((event, index) => (
          <TimetableCard
            key={index}
            subject={event.lhotMetadata?.subject}
            startDate={new Date(event.startedAt)}
            endDate={new Date(event.endedAt)}
            location={event.venue}
          />
        ))}
      </div>
    </div>
  );
};

export default TimetableBar;
