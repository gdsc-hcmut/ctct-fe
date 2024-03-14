import { Event } from '../../types/events';
import Icon from '../Icon';

interface NewsTimetableCardProps {
  eventSets: Event[];
}

const DayOfWeekVietnamese = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

const translateDayOfWeekVietnamese = (dayOfWeek: number) => {
  return DayOfWeekVietnamese[dayOfWeek];
};

const NewsTimetableCard = ({ eventSets }: NewsTimetableCardProps) => {
  console.log(eventSets);
  return (
    <div className='flex w-full flex-col rounded-[0.5rem] border-0 border-[#696984] border-opacity-10 bg-white p-0 md:border-[1px] md:p-[1.25rem]'>
      <div className='flex w-full flex-col border-b-[1px] border-[#4285F4] pb-[0.5rem] md:border-[#696984] md:border-opacity-10'>
        <p className='text-start text-[18px] font-semibold text-[#4285F4] md:text-[#696984] md:text-[14x] xl:text-[20px]'>
          LỚP HỌC SẮP TỚI
        </p>
      </div>
      <div className='grid grid-cols-2 gap-[0.5rem] pt-[1.25rem] md:grid-cols-3 md:gap-[1rem]'>
        {eventSets.map((event, index) => (
          <div
            key={index}
            className='flex w-full flex-col rounded-[0.5rem] border-[1px] border-[#696984] border-opacity-10 bg-white p-[0.75rem]'
          >
            <div className='flex flex-row items-center justify-between'>
              <p className='text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
                {translateDayOfWeekVietnamese(new Date(event.startedAt).getDay())},{' '}
                {new Date(event.startedAt).getDate()}/{new Date(event.startedAt).getMonth() + 1}
              </p>
              <div className='flex max-h-full max-w-full flex-row items-center justify-end'>
                <Icon.Clock className='aspect-square w-2 fill-[#696984] p-0 lg:w-3 2xl:w-4' />
                <p className='ml-[0.25rem] text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
                  {new Date(event.startedAt).toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
            <div className='mt-[0.125rem] flex flex-row items-end justify-between'>
              <p className='text-start font-medium text-[12x] text-black md:text-[#696984] xl:text-[16px]'>
                {event.lhotMetadata.subject.name}
              </p>
            </div>
            {/* <div className='mt-[0.125rem] flex flex-row items-end justify-between'>
              <p className='text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
                {event.venue}
              </p>
            </div> */}
          </div>
        ))}
      </div>
      <div className='mt-[1rem] flex w-full flex-row items-center justify-end md:mt-0'>
        <a
          className='text-start font-normal text-[10x] text-[#696984] underline xl:text-[14px]'
          href='../events/lop-hoc-on-tap'
        >
          Đăng ký
        </a>
      </div>
    </div>
  );
};

export default NewsTimetableCard;
