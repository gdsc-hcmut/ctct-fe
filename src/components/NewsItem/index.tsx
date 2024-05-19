import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from '../';
import { News } from '../../types';
import { cutContent, getDifferenceWithCurrentTime } from '../../utils/helper';

interface NewsItemProps {
  news?: News;
  loading: boolean;
}

const NewsItem = ({ news, loading }: NewsItemProps) => {
  if (news === undefined || loading) {
    return (
      <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[1.5rem]'>
        <div className='block max-w-full sm:hidden'>
          <div className='text-start font-semibold text-[10x] text-[#000000] transition hover:text-[#4285F4] lg:text-[14px] xl:text-[20px]'>
            <Skeleton />
          </div>
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
              <div className='text-start font-semibold text-[10x] text-[#000000] transition hover:text-[#4285F4] lg:text-[14px] xl:text-[20px]'>
                <Skeleton />
              </div>
            </div>
            <div className='max-w-full sm:mt-[0.375rem] xl:mt-[0.5rem] 3xl:mt-[0.75rem]'>
              <p className='text-start text-[12px] leading-6 text-[#696984] md:text-[14px] xl:text-[16px] xl:leading-7'>
                <Skeleton count={3} />
              </p>
            </div>
            <div className='mt-[0.375rem] hidden max-w-full xl:mt-[0.5rem] xl:block 3xl:mt-[0.75rem]'>
              <p className='text-start text-[12px] font-normal leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
                <Skeleton width={'30%'} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[1.5rem]'>
      <div className='block max-w-full sm:hidden'>
        <Link
          to={news._id}
          className='text-start font-semibold text-[10x] text-[#000000] transition hover:text-[#4285F4] lg:text-[14px] xl:text-[20px]'
        >
          {news ? news.title : <Skeleton />}
        </Link>
      </div>
      <div className='mt-[0.5rem] flex w-full flex-row items-start justify-start md:mt-0'>
        <div className='max-w-[45%] sm:max-w-[35%] md:mt-0 md:max-w-[25%] lg:max-w-[45%]'>
          <Link
            className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden'
            to={news._id}
          >
            <LazyLoadImage
              className='z-[1] block aspect-auto rounded-[0.5rem]'
              src={require('../../assets/images/News_1.png')}
              placeHolderSrc={require('../../assets/images/News_1.png')}
              alt='tstt_alt'
              objectFit='cover'
            />
          </Link>
        </div>
        <div className='ml-[1rem] flex w-full max-w-full flex-col xl:ml-[1.25rem]'>
          <div className='hidden max-w-full sm:block'>
            <Link
              className='text-start font-semibold text-[10x] text-[#000000] transition hover:text-[#4285F4] lg:text-[14px] xl:text-[20px]'
              to={news._id}
            >
              {news ? news.title : <Skeleton />}
            </Link>
          </div>
          <Link
            className='max-w-full sm:mt-[0.375rem] xl:mt-[0.5rem] 3xl:mt-[0.75rem]'
            to={news._id}
          >
            <p className='text-start text-[12px] leading-6 text-[#696984] md:text-[14px] xl:text-[16px] xl:leading-7'>
              {news ? cutContent(news.content, 30) : <Skeleton count={3} />}
            </p>
          </Link>
          <div className='mt-[0.375rem] hidden max-w-full xl:mt-[0.5rem] xl:block 3xl:mt-[0.75rem]'>
            <p className='text-start text-[12px] font-normal leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
              {news ? getDifferenceWithCurrentTime(news.createdAt) : <Skeleton width={'30%'} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
