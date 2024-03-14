import { LazyLoadImage } from '..';
import { Event } from '../../types/events';

interface NewsCardProps {
  eventSets?: Event[];
  isSolidColor: boolean;
  isImageLeft: boolean;
  title: string;
}

const NewsCard1 = ({ eventSets, isSolidColor, isImageLeft, title }: NewsCardProps) => {
  console.log(eventSets, isImageLeft);
  return (
    <div
      className={`flex w-full flex-col rounded-[0.5rem] p-0 md:p-[1.25rem] ${
        isSolidColor
          ? 'bg-white md:bg-[#E3F2FD] md:bg-opacity-60'
          : 'border-0 border-[#696984] border-opacity-10 bg-white md:border-[1px]'
      }`}
    >
      <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[0.5rem]'>
        <p className='text-start text-[18px] font-semibold text-[#696984] md:text-[14x] xl:text-[20px]'>
          {title}
        </p>
      </div>
      <div className={`mt-[1.25rem] flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} `}>
        <div
          className={`flex ${
            isImageLeft ? 'max-w-[45%]' : 'ml-[1.5rem] w-full max-w-full'
          } flex-col space-y-[0.75rem]`}
        >
          <div className='relative block aspect-[2/1] h-auto w-[100%] overflow-hidden'>
            <LazyLoadImage
              className='z-[1] block aspect-auto rounded-[0.5rem]'
              src={require('../../assets/images/News_1.png')}
              placeHolderSrc={require('../../assets/images/News_1.png')}
              alt='tstt_alt'
              objectFit='cover'
            />
          </div>
          <p className='text-start font-semibold text-[12x] text-[#696984] xl:text-[16px]'>
            Độc đáo lớp học cùng tiến, giúp bạn học tốt hơn
          </p>
        </div>

        <div
          className={`flex ${
            isImageLeft ? 'ml-[1.5rem] w-full max-w-full' : 'min-w-[45%]'
          } flex-col space-y-[1.5rem]`}
        >
          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-normal text-[12x] text-[#696984] xl:text-[16px] '>
              Thông tin lớp học tuần 14/2024
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-normal text-[12x] text-[#696984] xl:text-[16px] '>
              Thông tin lớp học tuần 15/2024
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-normal text-[12x] text-[#696984] xl:text-[16px] '>
              Mở đăng ký thi thử giữa kỳ HK232
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-normal text-[12x] text-[#696984] xl:text-[16px] '>
              Lịch thi thử cuối kỳ HK232
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard1;
