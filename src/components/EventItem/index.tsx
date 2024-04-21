import { Link } from 'react-router-dom';

import { LazyLoadImage } from '../';
import { useWindowDimensions } from '../../hooks';
import { Event } from '../../types/events';
interface EventItemProps {
  event: Event;
}

const CUTOFF_DESCRIPTION_LENGTH = 100;
const CUTOFF_DESCRIPTION_LENGTH_MOBILE = 20;

const EpochTimeToDateStringVietnamese = (epochTime: number) => {
  const date = new Date(epochTime);
  return `Ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`;
};
const EventItem = ({ event }: EventItemProps) => {
  const { width } = useWindowDimensions();

  let displayedDescription = event.description.split('\n')[0];
  const cutoffDescriptionLength =
    width > 768 ? CUTOFF_DESCRIPTION_LENGTH : CUTOFF_DESCRIPTION_LENGTH_MOBILE;
  if (displayedDescription.length > cutoffDescriptionLength) {
    const displayedDescriptionArray = displayedDescription.split(' ');
    displayedDescription = displayedDescriptionArray.slice(0, cutoffDescriptionLength).join(' ');
  }
  displayedDescription += ' . . .';

  return (
    <div className='mb-[2rem] flex flex-col'>
      <div className='flex flex-col md:flex-row'>
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
        <div className='ml-0 flex flex-col items-center md:ml-[1.75rem] md:items-start lg:ml-[2rem] xl:ml-[2.5rem] 3xl:ml-[3rem]'>
          <div className='flex flex-col lg:flex-row'>
            <h3 className='mt-[0.5rem] text-center font-semibold text-[#696984] md:mt-0 md:text-start'>
              {EpochTimeToDateStringVietnamese(event.startedAt)}
            </h3>
            <h3 className='mt-[0.5rem] text-center font-normal text-[#696984] md:mt-[0.5rem] md:ml-0 md:text-start lg:mt-0 lg:ml-[1rem] xl:ml-[1.25rem] 3xl:ml-[1.5rem]'>
              {event.venue}
            </h3>
          </div>
          <div className='mt-[0.5rem] flex flex-row'>
            <h2 className='text-center text-[24px] font-semibold text-[#000000] md:text-start md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>
              {event.name.toUpperCase()}
            </h2>
          </div>
          <div className='mt-[0.75rem] flex flex-row xl:mt-[0.5rem]'>
            <p className='text-center text-[#696984] md:text-start'>{displayedDescription}</p>
          </div>
          <Link
            className='mt-[1rem] flex aspect-[3/1] h-auto w-[10rem] flex-row items-center justify-center rounded-[0.5rem] bg-[#4285F4] hover:opacity-90 xl:mt-[1.5rem]'
            to={`others/${event?._id}`}
          >
            <p className='text-white'>Xem chi tiết</p>
          </Link>
        </div>
      </div>
      <div className='mt-[2rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
    </div>
  );
};

export default EventItem;
