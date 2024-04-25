import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Footer,
  NewsCard,
  NewsDescriptionCard,
  NewsTimetableCard,
  LoadMoreButton,
  NewsItem,
  ShareOptions,
  Loading,
} from '../../../components';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import NewsService from '../../../service/news.service';
import { Event, News } from '../../../types';
import { formatDetailVietnameseDate } from '../../../utils/helper';
import { groupEventByDay } from '../NewsPage';

const ONE_DAY_MILLISECOND = 24 * 60 * 60 * 1000;

const NewsDetail = () => {
  const params = useParams();

  const { data: news } = useQuery({
    queryKey: ['news', params.newsId],
    queryFn: async () => {
      const { data } = await NewsService.getById(params.newsId || '');
      return data.payload;
    },
  });

  const [displayedEventSet, setDisplayedEventSet] = useState<Event[]>([]);
  const [displayedNewsSet, setDisplayedNewsSet] = useState<News[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const eventQuery = {
      startedAtMin: Date.now() - (Date.now() % ONE_DAY_MILLISECOND),
      pageSize: 100,
      eventType: 'LOP_HOC_ON_TAP',
    };

    EventService.getAllPaginated(eventQuery, false)
      .then((res) => {
        const result = res.data.payload.result;
        const groupedEvent = groupEventByDay(result);
        setDisplayedEventSet(groupedEvent);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const newsQuery = {
      pageSize: 10,
    };

    NewsService.getAllPaginated(newsQuery, false)
      .then((res) => {
        const result = res.data.payload.result;
        setDisplayedNewsSet(result);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col items-center gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='mb-16 flex w-full max-w-[120rem] flex-row gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mt-[3rem] mb-[0.5rem] flex w-full flex-col gap-y-[1rem] lg:mb-[1.5rem] lg:gap-y-[1.5rem] xl:gap-y-[2rem] 2xl:mb-[2.5rem] 2xl:gap-y-[2.5rem]'>
              <div className='flex max-w-full flex-col xl:ml-[6rem] xl:max-w-[65%] 2xl:max-w-[55%]'>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-start text-[14px] font-medium text-[#4285F4] md:text-[16px] xl:text-[18px]'>
                    Sự kiện
                  </p>
                  <p className='text-start text-[14px] font-normal text-[#696984] md:text-[16px] xl:text-[18px]'>
                    {formatDetailVietnameseDate(Date.now())}
                  </p>
                </div>
                <div className='mt-[0.75rem] flex w-full flex-row'>
                  <p className='text-start text-[28px] font-semibold text-[#000000] xl:text-[36px]'>
                    {news?.title}
                  </p>
                </div>
                <div className='mt-[2rem] flex flex-col space-y-[1rem] text-justify text-[14px] font-normal leading-[1.5rem] text-[#696984] md:text-[16px] md:leading-[1.75rem] xl:text-[18px] xl:leading-[2rem] 2xl:space-y-[2rem]'>
                  <p>{news?.content}</p>
                </div>
                <div className='mt-[1rem]'>
                  <p className='text-end text-[16px] font-semibold text-black md:text-[18px] xl:text-[20px]'>
                    {news?.author}
                  </p>
                </div>
                <div className='mt-[1rem] flex flex-row items-center justify-end'>
                  <ShareOptions link={window.location.href} />
                </div>
              </div>
              <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[1rem]'></div>
              <div className='flex w-full flex-col items-start justify-start lg:flex-row'>
                <div className='flex max-w-full flex-col space-y-[1rem] lg:max-w-[50%] lg:space-y-[2rem]'>
                  {displayedNewsSet.slice(1, 10).map((newsItem, index) => (
                    <NewsItem key={index} news={newsItem} />
                  ))}
                  <LoadMoreButton />
                </div>
                <div className='mt-[2rem] flex w-full max-w-full flex-col space-y-[2rem] lg:ml-[1.5rem] lg:mt-0 xl:ml-[1.75rem] 3xl:ml-[2rem]'>
                  <NewsCard
                    title={'LỚP HỌC ÔN TẬP'}
                    isImageLeft={true}
                    isSolidColor={true}
                    newsSets={displayedNewsSet}
                  />
                  {displayedEventSet.length !== 0 && (
                    <NewsTimetableCard eventSets={displayedEventSet} />
                  )}
                  <NewsCard
                    title={'GIA SƯ ÁO XANH'}
                    isImageLeft={true}
                    isSolidColor={false}
                    newsSets={displayedNewsSet}
                  />
                  <NewsDescriptionCard title={'HỖ TRỢ TRUYỀN THÔNG'} newsSets={displayedNewsSet} />
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

export default NewsDetail;
