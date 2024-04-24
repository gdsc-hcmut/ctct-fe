import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

import {
  Footer,
  NewsFirstItem,
  NewsItem,
  NewsCard,
  NewsDescriptionCard,
  NewsTimetableCard,
  LoadMoreButton,
} from '../../../components';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import NewsService from '../../../service/news.service';
import { Event, News } from '../../../types';

const ONE_DAY_MILLISECOND = 24 * 60 * 60 * 1000;

export const groupEventByDay = (events: Event[]): Event[] => {
  const sortedEvents = events.sort((a, b) => a.startedAt - b.startedAt);
  const firstDate =
    events.length > 0 ? events[0].startedAt - (events[0].startedAt % ONE_DAY_MILLISECOND) : 0;
  const firstEventSet = sortedEvents.filter(
    (event) => event.startedAt - (event.startedAt % ONE_DAY_MILLISECOND) === firstDate
  );
  const remainingEvents = sortedEvents.filter(
    (event) => event.startedAt - (event.startedAt % ONE_DAY_MILLISECOND) !== firstDate
  );

  const secondDate =
    remainingEvents.length > 0
      ? remainingEvents[0].startedAt - (remainingEvents[0].startedAt % ONE_DAY_MILLISECOND)
      : 0;
  const secondEventSet = remainingEvents.filter(
    (event) => event.startedAt - (event.startedAt % ONE_DAY_MILLISECOND) === secondDate
  );

  const secondRemainingEvents = remainingEvents.filter(
    (event) => event.startedAt - (event.startedAt % ONE_DAY_MILLISECOND) !== secondDate
  );

  const thirdDate =
    secondRemainingEvents.length > 0
      ? secondRemainingEvents[0].startedAt -
        (secondRemainingEvents[0].startedAt % ONE_DAY_MILLISECOND)
      : 0;

  const thirdEventSet = secondRemainingEvents.filter(
    (event) => event.startedAt - (event.startedAt % ONE_DAY_MILLISECOND) === thirdDate
  );

  return [firstEventSet, secondEventSet, thirdEventSet].flat();
};

const NewsPage = () => {
  const [displayedEventSet, setDisplayedEventSet] = useState<Event[]>([]);
  const [displayedNewsSet, setDisplayedNewsSet] = useState<News[]>([]);

  const { data: events } = useQuery({
    queryKey: ['events', 'LOP_HOC_ON_TAP'],
    queryFn: async () => {
      const { data } = await EventService.getAllPaginated(
        {
          startedAtMin: Date.now() - (Date.now() % ONE_DAY_MILLISECOND),
          pageSize: 100,
          eventType: 'LOP_HOC_ON_TAP',
        },
        false
      );
      return data.payload.result;
    },
  });

  const { data: newsSet } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data } = await NewsService.getAllPaginated(
        {
          pageSize: 10,
        },
        false
      );
      return data.payload.result;
    },
  });

  useEffect(() => {
    if (events === undefined) return;
    const groupedEvent = groupEventByDay(events);
    setDisplayedEventSet(groupedEvent);
  }, [events]);

  useEffect(() => {
    if (newsSet === undefined) return;
    setDisplayedNewsSet(newsSet);
  }, [newsSet]);

  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col items-center gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='mb-16 flex w-full max-w-[120rem] flex-row gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mb-[0.5rem] flex w-full flex-col gap-y-[1rem] lg:mb-[1.5rem] lg:gap-y-[1.5rem] xl:gap-y-[2rem] 2xl:mb-[2.5rem] 2xl:gap-y-[2.5rem]'>
              <div className='flex flex-col'>
                <div className='relative flex w-full flex-col items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                  <NewsFirstItem news={displayedNewsSet[0]} />
                </div>
                <div className='mt-[1.5rem] h-[1px] w-full bg-[#696984] opacity-10 md:mt-[2.5rem]'></div>
              </div>

              <div className='flex w-full flex-col items-start justify-start lg:flex-row'>
                <div className='flex max-w-full flex-col space-y-[1rem] lg:max-w-[50%] lg:space-y-[2rem]'>
                  {displayedNewsSet &&
                    displayedNewsSet
                      .slice(1, 10)
                      .map((news, index) => <NewsItem key={index} news={news} />)}
                  <LoadMoreButton />
                </div>
                <div className='mt-[2rem] flex w-full max-w-full flex-col space-y-[2rem] lg:ml-[1.5rem] lg:mt-0 xl:ml-[1.75rem] 3xl:ml-[2rem]'>
                  {displayedNewsSet && (
                    <NewsCard
                      title={'LỚP HỌC ÔN TẬP'}
                      isImageLeft={true}
                      isSolidColor={true}
                      newsSets={displayedNewsSet}
                    />
                  )}
                  {displayedEventSet.length !== 0 && (
                    <NewsTimetableCard eventSets={displayedEventSet} />
                  )}
                  {displayedNewsSet && (
                    <NewsCard
                      title={'GIA SƯ ÁO XANH'}
                      isImageLeft={true}
                      isSolidColor={false}
                      newsSets={displayedNewsSet}
                    />
                  )}
                  {displayedNewsSet && (
                    <NewsDescriptionCard
                      title={'HỖ TRỢ TRUYỀN THÔNG'}
                      newsSets={displayedNewsSet}
                    />
                  )}
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
