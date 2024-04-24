import { Link } from 'react-router-dom';

import { LazyLoadImage } from '../';
import { News } from '../../types';
import { cutContent, getDifferenceWithCurrentTime } from '../../utils/helper';
interface NewsFirstItemProps {
  news: News;
}

const NewsFirstItem = ({ news }: NewsFirstItemProps) => {
  if (news === undefined) {
    return <></>;
  }

  return (
    <div className='flex w-full flex-col items-start justify-start pt-[1.5rem] md:flex-row md:pt-[2.5rem]'>
      <div className='min-w-full md:min-w-[50%]'>
        <Link className='relative block overflow-hidden md:h-max md:w-[100%]' to={news._id}>
          <LazyLoadImage
            className='z-[1] block rounded-[0.5rem] md:aspect-auto'
            src={require('../../assets/images/News_1.png')}
            placeHolderSrc={require('../../assets/images/News_1.png')}
            alt='tstt_alt'
            objectFit='cover'
          />
        </Link>
      </div>
      <div className='mt-[1rem] flex w-full max-w-full flex-col space-y-[0.25rem] md:mt-0 md:ml-[1rem] md:space-y-[0.75rem] lg:ml-[1.5rem] xl:ml-[1.75rem] 3xl:ml-[2rem]'>
        <Link className='max-w-full lg:max-w-[50%]' to={news._id}>
          <p className='text-start text-[20px] font-semibold text-[#000000] transition hover:text-[#4285F4] xl:text-[24px]'>
            {news.title}
          </p>
        </Link>
        <div className='max-w-full lg:max-w-[50%]'>
          <Link
            className='text-start text-[14px] leading-6 text-[#696984] xl:text-[16px] xl:leading-7'
            to={news._id}
          >
            {cutContent(news.content, 30)}
          </Link>
        </div>
        <div className='hidden max-w-full md:block lg:max-w-[50%]'>
          <p className='text-start text-[12px] font-semibold leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
            {getDifferenceWithCurrentTime(news.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsFirstItem;
