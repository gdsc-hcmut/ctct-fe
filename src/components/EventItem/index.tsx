import { LazyLoadImage } from '../';
import { Event } from '../../types/events';
interface EventItemProps {
  event: Event;
}

const EpochTimeToDateStringVietnamese = (epochTime: number) => {
  const date = new Date(epochTime);
  return `Ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`;
};

const EventItem = ({ event }: EventItemProps) => {
  let displayedDescription = event.description.split('\n')[0];
  if (displayedDescription.length > 100) {
    const displayedDescriptionArray = displayedDescription.split(' ');
    displayedDescription = displayedDescriptionArray.slice(0, 100).join(' ');
  }
  displayedDescription += ' . . .';

  return (
    <div className='mb-[2rem] flex flex-col'>
      <div className='flex flex-row'>
        <div className='flex flex-row items-start justify-center'>
          <div className='aspect-square h-auto w-[8.75rem] rounded-full bg-blue-500'>
            <LazyLoadImage
              src={'https://i.imgur.com/2MJpQ7C.jpeg'}
              placeHolderSrc={'https://i.imgur.com/2MJpQ7C.jpeg'}
              alt='Thumbnail'
              objectFit='cover'
              className='aspect-square h-auto w-[8.75rem] overflow-hidden rounded-full object-cover'
            />
          </div>
        </div>
        <div className='ml-[1.5rem] flex flex-col lg:ml-[2rem] xl:ml-[2.5rem] 3xl:ml-[3rem]'>
          <div className='flex flex-row'>
            <h3 className='font-semibold text-[#696984]'>
              {EpochTimeToDateStringVietnamese(event.startedAt)}
            </h3>
            <h3 className='ml-[0.75rem] font-normal text-[#696984] lg:ml-[1rem] xl:ml-[1.25rem] 3xl:ml-[1.5rem] '>
              {event.venue}
            </h3>
          </div>
          <div className='mt-[0.25rem] flex flex-row'>
            <h2 className='text-start text-[20px] font-semibold text-[#000000] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
              {event.name.toUpperCase()}
            </h2>
          </div>
          <div className='mt-[0.25rem] flex flex-row xl:mt-[0.5rem]'>
            <p className='text-[#696984]'>{displayedDescription}</p>
          </div>
          <div className='mt-[1rem] flex aspect-[3/1] h-auto w-[10rem] flex-row items-center justify-center rounded-[0.5rem] bg-[#4285F4] hover:opacity-90 xl:mt-[1.5rem]'>
            <p className='text-white'>Xem chi tiết</p>
          </div>
        </div>
      </div>
      <div className='mt-[2rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
    </div>
  );
};

export default EventItem;
