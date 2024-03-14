import { Footer } from '../../components';
import LoadMoreButton from '../../components/LoadMoreButton';
import { NewsCard1, NewsCard2, NewsTimetableCard } from '../../components/NewsCard';
import NewsFirstItem from '../../components/NewsFirstItem';
import NewsItem from '../../components/NewsItem';
import { Page } from '../../layout';

const NewsPage = () => {
  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='mb-16 flex w-full flex-col gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mb-[0.5rem] flex w-full flex-col gap-y-[1rem] lg:mb-[1.5rem] lg:gap-y-[1.5rem] xl:gap-y-[2rem] 2xl:mb-[2.5rem] 2xl:gap-y-[2.5rem]'>
              <div className='flex flex-col'>
                <div className='relative flex w-full flex-col items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                  <NewsFirstItem />
                </div>
                <div className='mt-[2.5rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
              </div>

              <div className='flex w-full flex-row items-start justify-start'>
                <div className='flex max-w-[50%] flex-col space-y-[2rem]'>
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                  <LoadMoreButton />
                </div>
                <div className='ml-[2rem] flex w-full max-w-full flex-col space-y-[2rem]'>
                  <NewsCard1 title={'LỚP HỌC ÔN TẬP'} isImageLeft={true} isSolidColor={true} />
                  <NewsCard1 title={'GIA SƯ ÁO XANH'} isImageLeft={true} isSolidColor={false} />
                  <NewsCard2 title={'HỖ TRỢ TRUYỀN THÔNG'} />
                  <NewsTimetableCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default NewsPage;
