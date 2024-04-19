import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Footer, LazyLoadImage } from '../../../components';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';

const EpochTimeInVietnamese = (epochTime: number) => {
  const date = new Date(epochTime);
  return `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()}, ${date.getDate() < 10 ? '0' : ''}${date.getDate()} tháng ${
    date.getMonth() < 10 ? '0' : ''
  }${date.getMonth() + 1}`;
};

const EventsPage = () => {
  const params = useParams();

  const { data: events } = useQuery({
    queryKey: ['events', params.eventId],
    queryFn: async () => {
      const { data } = await EventService.getById(params.eventId || '');
      return data.payload;
    },
  });

  return (
    <Page title='Đơn vị hợp tác - Fessior Community'>
      <main className='flex w-full flex-col px-6 py-5 lg:px-10 lg:py-7 xl:px-20 3xl:px-[100px] 3xl:py-9'>
        <section
          id='event-banner'
          className='relative -mx-6 -mt-5 flex h-[18rem] w-screen flex-row items-center justify-center md:m-0 md:w-full'
        >
          <LazyLoadImage
            src={'https://i.imgur.com/itibZ4i.jpeg'}
            placeHolderSrc={'https://i.imgur.com/itibZ4i.jpeg'}
            alt='Banner CTCT'
            objectFit='cover'
            containerClassName='absolute w-full overflow-hidden h-full md:rounded-lg'
            className='w-full'
          />
          <div className='relative z-[3] flex flex-col items-center justify-center px-[2.75rem] py-[3rem] font-semibold lg:px-[4rem] lg:py-[5rem] xl:px-[5rem] xl:py-[6rem] 3xl:px-[5rem] 3xl:py-[8rem]'></div>
        </section>

        <div className='mt-[1.75rem] flex flex-col justify-center gap-2 lg:mt-[2rem] lg:gap-4 xl:mt-[2.5rem] 2xl:gap-5 3xl:mt-[2.75rem]'>
          <h2 className='text-start text-[24px] font-semibold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
            {events?.name.toUpperCase()}
          </h2>
        </div>

        <div className='mt-[1.25rem] flex flex-col justify-center gap-2 lg:mt-[1.5rem] lg:gap-4 xl:mt-[2rem] 2xl:gap-5 3xl:mt-[2.25rem]'>
          <h2 className='text-start text-[14px] font-normal text-[#696984] lg:text-[18px] 2xl:text-[24px]'>
            {events?.description}
          </h2>
        </div>

        {events?.hasRegistrationTime && (
          <div className='mt-[1.25rem] flex flex-col justify-center gap-2 lg:mt-[1.5rem] lg:gap-4 xl:mt-[2rem] 2xl:gap-5 3xl:mt-[2.25rem]'>
            <h2 className='text-start text-[12px] font-normal text-[#696984] lg:text-[16px] 2xl:text-[20px]'>
              <span className='font-bold'>Thời hạn đăng ký: </span>{' '}
              {EpochTimeInVietnamese(events.registrationStartedAt || 0)} -{' '}
              {EpochTimeInVietnamese(events.registrationEndedAt || 0)}
            </h2>
          </div>
        )}
      </main>
      <Footer />
    </Page>
  );
};

export default EventsPage;
