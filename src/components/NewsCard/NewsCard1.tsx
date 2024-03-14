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
      <div className='flex w-full flex-col border-b-[1px] border-[#4285F4] pb-[0.5rem] md:border-[#696984] md:border-opacity-10'>
        <p className='text-start text-[18px] font-semibold text-[#4285F4] md:text-[#696984] md:text-[14x] xl:text-[20px]'>
          {title}
        </p>
      </div>
      <div
        className={`mt-[1.25rem] flex flex-col ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        } `}
      >
        <div
          className={`flex ${
            isImageLeft ? 'max-w-full md:max-w-[45%]' : 'ml-0 w-full max-w-full md:ml-[1.5rem]'
          } flex-col space-y-[0.75rem] border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[1rem] md:border-0`}
        >
          <div className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden md:aspect-[2/1]'>
            <LazyLoadImage
              className='z-[1] block aspect-auto rounded-[0.5rem]'
              src={require('../../assets/images/News_1.png')}
              placeHolderSrc={require('../../assets/images/News_1.png')}
              alt='tstt_alt'
              objectFit='cover'
            />
          </div>
          <p className='hidden text-start font-semibold text-[12x] text-[#696984] md:block xl:text-[16px]'>
            Độc đáo lớp học cùng tiến, giúp bạn học tốt hơn
          </p>
          <div className='mt-[1rem] flex min-w-full flex-col md:mt-0 md:hidden md:min-w-[65%] lg:max-w-full xl:max-w-[65%]'>
            <p className='text-start text-[16px] font-semibold text-black md:text-[14px] md:text-[#696984] 3xl:text-[16px]'>
              Độc đáo lớp học cùng tiến, giúp bạn học tốt hơn
            </p>
            <p className='mt-[0.25rem] text-start text-[14px] leading-6 text-[#696984] xl:leading-7'>
              Nhiều trường ĐH tuyển chọn sinh viên khá, giỏi làm trợ lý giảng dạy cho giảng viên.
              Các “giảng viên sinh viên" này tham gia đứng lớp giảng dạy, phụ chấm bài và được nhà
              trường trả lương.
            </p>
          </div>
        </div>

        <div
          className={`flex ${
            isImageLeft
              ? 'ml-0 mt-[1.25rem] w-full max-w-full md:mt-0 md:ml-[1.5rem]'
              : 'min-w-[45%]'
          } flex-col space-y-[1.5rem]`}
        >
          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-medium text-[12x] text-black md:font-normal md:text-[#696984] xl:text-[16px] '>
              Thông tin lớp học tuần 14/2024
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-medium text-[12x] text-black md:font-normal md:text-[#696984] xl:text-[16px] '>
              Thông tin lớp học tuần 15/2024
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-medium text-[12x] text-black md:font-normal md:text-[#696984] xl:text-[16px] '>
              Mở đăng ký thi thử giữa kỳ HK232
            </p>
          </div>

          <div className='flex max-w-full flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[0.5rem]	'>
            <p className='text-start font-medium text-[12x] text-black md:font-normal md:text-[#696984] xl:text-[16px] '>
              Lịch thi thử cuối kỳ HK232
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard1;
