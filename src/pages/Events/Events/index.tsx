import { useQuery } from '@tanstack/react-query';

import { Footer, LazyLoadImage, EventItem } from '../../../components';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import useBoundStore from '../../../store';

const ONE_DAY_MILLISECOND = 24 * 60 * 60 * 1000;

const EventsPage = () => {
  const { data: events } = useQuery({
    queryKey: ['events', 'OTHER'],
    queryFn: async () => {
      const { data } = await EventService.getAllPaginated(
        {
          startedAtMin: Date.now() - (Date.now() % ONE_DAY_MILLISECOND),
          pageSize: 100,
          eventType: 'OTHER',
        },
        false
      );

      return data.payload.result;
    },
  });

  const filterName = useBoundStore.use.filterName();
  const setFilterName = useBoundStore.use.setFilterName();
  const page = useBoundStore.use.page();
  const setPage = useBoundStore.use.setPage();

  console.log(page);
  console.log(events);
  return (
    <Page title='Đơn vị hợp tác - Fessior Community'>
      <main className='flex w-full flex-col px-6 py-5 lg:px-10 lg:py-7 xl:px-20 3xl:px-[100px] 3xl:py-9'>
        <section
          id='ctct-banner'
          className='relative -mx-6 -mt-5 flex h-[18rem] w-screen flex-row items-center justify-center md:m-0 md:w-full'
        >
          <LazyLoadImage
            src={require('../../../assets/images/SCTTM_6.jpg')}
            placeHolderSrc={require('../../../assets/images/SCTTM_6.jpg')}
            alt='Banner CTCT'
            objectFit='cover'
            containerClassName='absolute w-full overflow-hidden h-full md:rounded-lg'
            className='h-full object-[0%_40%] brightness-[0.4]'
          />
          <div className='relative z-[3] flex flex-col items-center justify-center px-[2.75rem] py-[3rem] font-semibold lg:px-[4rem] lg:py-[5rem] xl:px-[5rem] xl:py-[6rem] 3xl:px-[5rem] 3xl:py-[8rem]'>
            <h1 className='text-2xl text-white lg:text-4xl xl:text-5xl'>Sự kiện khác</h1>
          </div>
        </section>

        <div className='mt-[1.75rem] flex flex-col justify-center gap-2 lg:mt-[2rem] lg:gap-4 xl:mt-[2.5rem] 2xl:gap-5 3xl:mt-[2.75rem]'>
          <h2 className='text-start text-[24px] font-semibold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
            Sự kiện sắp tới
          </h2>
        </div>

        <div className='mt-[1.75rem] flex flex-col justify-center gap-2 lg:mt-[2rem] lg:gap-4 xl:mt-[2.5rem] 2xl:gap-5 3xl:mt-[2.75rem]'>
          <div className='relative flex w-full flex-[2] items-center'>
            <input
              className='flex w-full flex-1 rounded-lg border border-[#CCC] p-1 text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
              value={filterName}
              onChange={({ target }) => {
                setFilterName(target.value);
                setPage(1);
              }}
              placeholder='Tìm tên sự kiện'
            />
          </div>
        </div>

        <div className='mt-[1.75rem] flex flex-col justify-center gap-2 lg:mt-[2rem] lg:gap-4 xl:mt-[2.5rem] 2xl:gap-5 3xl:mt-[2.75rem]'>
          {events?.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default EventsPage;
