import { LazyLoadImage } from '../';
import { Event } from '../../types/events';

interface NewsCardProps {
  eventSets?: Event[];
  title: string;
}

const NewsCard2 = ({ eventSets, title }: NewsCardProps) => {
  console.log(eventSets);
  return (
    <div className='flex w-full flex-col rounded-[0.5rem] border-0 border-[#696984] border-opacity-10 bg-white p-0 md:border-[1px] md:p-[1.25rem]'>
      <div className='flex w-full flex-col border-b-[1px] border-[#4285F4] pb-[0.5rem] md:border-[#696984] md:border-opacity-10'>
        <p className='text-start text-[18px] font-semibold text-[#4285F4] md:text-[#696984] md:text-[14x] xl:text-[20px]'>
          {title}
        </p>
      </div>
      <div className='flex flex-col space-y-[1rem] lg:space-y-[1.25rem]'>
        <div className='mt-[1.25rem] flex flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[1rem]'>
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='mt-[1rem] flex min-w-full flex-col md:mt-0 md:min-w-[65%] lg:max-w-full xl:max-w-[65%]'>
              <p className='text-start text-[16px] font-semibold text-black md:text-[14px] md:text-[#696984] 3xl:text-[16px]'>
                Thông báo thể lệ và mở đơn đăng ký cuộc thi GDSC Idea Contest 2023: THiNK
              </p>
              <p className='mt-[0.25rem] text-start text-[14px] leading-6 text-[#696984] xl:leading-7'>
                CLB Google Developer Student Club - Trường Đại học Bách khoa - ĐHQG-HCM chính thức
                nhận đơn đăng ký của đội thi tham gia cuộc thi ý tưởng công nghệ GDSC Idea Contest
                2023: THiNK
              </p>
            </div>
            <div className='ml-0 block w-full max-w-full md:ml-[1.5rem] lg:hidden xl:ml-[1rem] xl:block 2xl:ml-[1.5rem]'>
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
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
