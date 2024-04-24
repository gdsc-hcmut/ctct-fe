import { LazyLoadImage } from '../';
import { News } from '../../types';
import { cutContent } from '../../utils/helper';

interface NewsItemProps {
  news: News;
}

const NewsItem = ({ news }: NewsItemProps) => {
  return (
    <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[1.5rem]'>
      <div className='block max-w-full sm:hidden'>
        <p className='text-start font-semibold text-[10x] text-[#000000] lg:text-[14px] xl:text-[20px]'>
          {news.title}
        </p>
      </div>
      <div className='mt-[0.5rem] flex w-full flex-row items-start justify-start md:mt-0'>
        <div className='max-w-[45%] sm:max-w-[35%] md:mt-0 md:max-w-[25%] lg:max-w-[45%]'>
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
        <div className='ml-[1rem] flex w-full max-w-full flex-col xl:ml-[1.25rem]'>
          <div className='hidden max-w-full sm:block'>
            <p className='text-start font-semibold text-[10x] text-[#000000] lg:text-[14px] xl:text-[20px]'>
              {news.title}
            </p>
          </div>
          <div className='max-w-full sm:mt-[0.375rem] xl:mt-[0.5rem] 3xl:mt-[0.75rem]'>
            <p className='text-start text-[12px] leading-6 text-[#696984] md:text-[14px] xl:text-[16px] xl:leading-7'>
              {cutContent(news.content, 30)}
            </p>
          </div>
          <div className='mt-[0.375rem] hidden max-w-full xl:mt-[0.5rem] xl:block 3xl:mt-[0.75rem]'>
            <p className='text-start text-[12px] font-normal leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
              50 phút trước
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
