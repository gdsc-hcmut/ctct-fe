import { LazyLoadImage } from '../';
import { Event } from '../../types/events';

interface NewsCardProps {
  eventSets?: Event[];
  title: string;
}

const NewsCard2 = ({ eventSets, title }: NewsCardProps) => {
  console.log(eventSets);
  return (
    <div className='flex w-full flex-col rounded-[0.5rem] border-[1px] border-[#696984] border-opacity-10 bg-white p-[1.25rem]'>
      <div className='flex w-full flex-col'>
        <p className='text-start font-semibold text-[14x] text-[#696984] xl:text-[20px]'>{title}</p>
        <div className='mt-[0.5rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
      </div>
      <div className='mt-[1.25rem] flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <div className='flex max-w-[65%] flex-col'>
              <p className='text-start font-semibold text-[12x] text-[#696984] xl:text-[16px]'>
                Thông báo thể lệ và mở đơn đăng ký cuộc thi GDSC Idea Contest 2023: THiNK
              </p>
              <p className='mt-[0.25rem] text-start text-[10px] leading-6 text-[#696984] xl:text-[14px] xl:leading-7'>
                CLB Google Developer Student Club - Trường Đại học Bách khoa - ĐHQG-HCM chính thức
                nhận đơn đăng ký của đội thi tham gia cuộc thi ý tưởng công nghệ GDSC Idea Contest
                2023: THiNK
              </p>
            </div>
            <div className='ml-[1.5rem] w-full max-w-full'>
              <div className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden'>
                <LazyLoadImage
                  className='z-[1] block aspect-auto rounded-[0.5rem]'
                  src={require('../../assets/images/News_1.png')}
                  placeHolderSrc={require('../../assets/images/News_1.png')}
                  alt='tstt_alt'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
          <div className='my-[1rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <div className='flex max-w-[65%] flex-col'>
              <p className='text-start font-semibold text-[12x] text-[#696984] xl:text-[16px]'>
                Thông báo thể lệ và mở đơn đăng ký cuộc thi GDSC Idea Contest 2023: THiNK
              </p>
              <p className='mt-[0.25rem] text-start text-[10px] leading-6 text-[#696984] xl:text-[14px] xl:leading-7'>
                CLB Google Developer Student Club - Trường Đại học Bách khoa - ĐHQG-HCM chính thức
                nhận đơn đăng ký của đội thi tham gia cuộc thi ý tưởng công nghệ GDSC Idea Contest
                2023: THiNK
              </p>
            </div>
            <div className='ml-[1.5rem] w-full max-w-full'>
              <div className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden'>
                <LazyLoadImage
                  className='z-[1] block aspect-auto rounded-[0.5rem]'
                  src={require('../../assets/images/News_1.png')}
                  placeHolderSrc={require('../../assets/images/News_1.png')}
                  alt='tstt_alt'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
          <div className='my-[1rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
