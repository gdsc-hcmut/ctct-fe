import { Link } from 'react-router-dom';

import { LazyLoadImage } from '..';
import { News } from '../../types/news';
import { cutContent } from '../../utils/helper';

interface NewsCardProps {
  newsSets: News[];
  title: string;
}

const NewsDescriptionCard = ({ newsSets, title }: NewsCardProps) => {
  if (newsSets === undefined) {
    return <></>;
  }

  return (
    <div className='flex w-full flex-col rounded-[0.5rem] border-0 border-[#696984] border-opacity-10 bg-white p-0 md:border-[1px] md:p-[1.25rem]'>
      <div className='flex w-full flex-col border-b-[1px] border-[#4285F4] pb-[0.5rem] md:border-[#696984] md:border-opacity-10'>
        <p className='text-start text-[18px] font-semibold text-[#4285F4] md:text-[#696984] md:text-[14x] xl:text-[20px]'>
          {title}
        </p>
      </div>
      <div className='flex flex-col space-y-[1rem] lg:space-y-[1.25rem]'>
        {newsSets.slice(0, 2).map((news, index) => (
          <div
            key={index}
            className='mt-[1.25rem] flex flex-col border-b-[1px] border-dashed border-[#696984] border-opacity-10 pb-[1rem]'
          >
            <div className='flex flex-col-reverse md:flex-row'>
              <Link
                className='mt-[1rem] flex min-w-full flex-col md:mt-0 md:min-w-[65%] lg:max-w-full xl:max-w-[65%]'
                to={news && news._id}
              >
                <p className='text-start text-[16px] font-semibold text-black transition  hover:text-[#4285F4] md:text-[16px] md:text-[#696984]'>
                  {news.title}
                </p>
                <p className='mt-[0.25rem] text-start text-[14px] leading-6 text-[#696984] xl:leading-7'>
                  {cutContent(news.content, 30)}
                </p>
              </Link>
              <div className='ml-0 block w-full max-w-full md:ml-[1.5rem] lg:hidden xl:ml-[1rem] xl:block 2xl:ml-[1.5rem]'>
                <Link
                  className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden'
                  to={news && news._id}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDescriptionCard;
