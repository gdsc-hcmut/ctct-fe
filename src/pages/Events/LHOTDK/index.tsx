import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Footer, LazyLoadImage } from '../../../components';
import Achievement1 from '../../../components/Achivement/Achievement1';
import BenefitBoard from '../../../components/BenefitBoard';
import Comments from '../../../components/Comments';
import HeroSection from '../../../components/HeroSection';
import NewsCarousel from '../../../components/NewsCarousel/NewsCarousel';
import SignUpManual from '../../../components/SignUpManual';
import SocialMediaCarousel from '../../../components/SocialMediaCarousel/SocialMediaCarousel';
import Timetable from '../../../components/Timetable';
import { Page } from '../../../layout';
import EventService from '../../../service/event.service';
import { Event } from '../../../types/events';

const ONE_DAY_MILLISECOND = 24 * 60 * 60 * 1000;

const LHOTDKPage = () => {
  const queryClient = useQueryClient();

  const [displatedDate, setDisplayedDate] = useState<number[]>([]);
  const [displatedEventSet, setDisplatedEventSet] = useState<Event[][]>([[]]);

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

  const { mutateAsync: register } = useMutation({
    mutationFn: async (eventId: string) => {
      await EventService.register(eventId);
    },
    onSuccess: () => {
      toast.success('Đăng ký sự kiện thành công');
      queryClient.invalidateQueries(['events', 'LOP_HOC_ON_TAP']);
    },
    onError: () => {
      toast.error('Đã có lỗi trong lúc đăng ký sự kiện! Vui lòng thử lại sau.');
    },
  });

  useEffect(() => {
    if (events === undefined) return;

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

    setDisplayedDate([firstDate, secondDate, thirdDate]);
    setDisplatedEventSet([firstEventSet, secondEventSet, thirdEventSet]);
  }, [events]);

  return (
    <Page title='Lớp học ôn tập'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <HeroSection />

        <div className='mb-16 flex w-full flex-col gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mb-7 flex w-full flex-col gap-y-[48px] md:mb-20 md:gap-y-[72px] lg:mb-24 lg:gap-y-[96px] xl:gap-y-[112px] 2xl:mb-28 2xl:gap-y-[128px]'>
              <div className='relative flex w-full flex-col items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Giới thiệu
                  </h2>
                  <p className='text-justify leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Lớp học được đứng lớp bởi những thành viên{' '}
                    <span className='font-bold text-[#4285F4]'>Ban Chuyên môn</span> Chúng Ta Cùng
                    Tiến, những người thường được gọi vui với các cái tên như các{' '}
                    <span className='text-[#4285F4]'>giáo sư, nhà bác học, chiến thần,</span>... các
                    bạn không chỉ có kiến thức chuyên môn vững vàng mà còn được rèn luyện khả năng
                    truyền đạt tốt.
                  </p>
                </div>

                <div className='absolute bottom-0 right-0 z-0 hidden aspect-square w-[52px] rounded-lg bg-[#4285F4] md:-bottom-4 md:-right-4 md:block md:w-24 md:rounded-xl lg:-bottom-5 lg:-right-5 lg:w-32 xl:-bottom-6 xl:-right-6 xl:w-40 xl:rounded-2xl 2xl:-bottom-8 2xl:-right-8 2xl:w-52 2xl:rounded-3xl' />

                <div className='relative block h-full w-[100%] overflow-hidden md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[2/1] rounded-[20px] md:aspect-[5/2]'
                    src={require('../../../assets/images/LHOTDK_1.jpg')}
                    placeHolderSrc={require('../../../assets/images/LHOTDK_1.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>

              <div className='relative flex w-full flex-col-reverse items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='absolute top-0 left-0 z-0 hidden aspect-square h-[3rem] w-[3rem] rounded-full bg-[#4285F4] md:-top-4 md:-left-4 md:block md:h-[4rem] md:w-[4rem] lg:-top-5 lg:-left-5 lg:h-[6rem] lg:w-[6rem] xl:-top-6 xl:-left-6 xl:h-[7rem] xl:w-[7rem] 2xl:-top-8 2xl:-left-8 2xl:h-[8rem] 2xl:w-[8rem]' />
                <div className='relative block h-full w-[100%] overflow-hidden md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[3/1] rounded-[20px]'
                    src={require('../../../assets/images/LHOTDK_2.jpg')}
                    placeHolderSrc={require('../../../assets/images/LHOTDK_2.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Địa điểm tổ chức
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Lớp họp được tổ chức hàng tuần tại{' '}
                    <span className='text-[#4285F4]'>Phòng 210H6, 212H6, 213H6, 214H6</span> - Toà
                    nhà H6, Trường Đại học Bách khoa - ĐHQG-HCM, Cơ sở Dĩ An
                  </p>
                </div>
              </div>

              <div
                className='flex w-full flex-col items-start justify-between gap-8'
                id='timetable'
              >
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Các lớp học sắp tới
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Lịch học linh hoạt, được cập nhật hàng tuần phù hợp với nhu cầu của sinh viên.
                    <br className='hidden md:block' /> Số lượng các lớp học được tăng cường vào gần
                    mùa thi.*
                  </p>
                </div>
                <Timetable
                  dates={displatedDate}
                  eventSets={displatedEventSet}
                  register={register}
                />
                <div className='flex w-full flex-row items-end justify-end'>
                  <a className='text-end underline' href='/profile/event'>
                    Sự kiện của tôi
                  </a>
                </div>
              </div>

              <div className='relative flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-[1rem] lg:gap-[1.5rem] 2xl:gap-[2rem]'>
                <div className='flex w-full flex-col justify-start gap-2 md:hidden md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Cách thức tham gia
                  </div>
                </div>

                <SignUpManual />

                <div className='relative hidden h-full w-[70%] flex-row items-center justify-between lg:block'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[2/1] rounded-[20px] md:aspect-[5/2]'
                    src={require('../../../assets/images/LHOTDK_8.png')}
                    placeHolderSrc={require('../../../assets/images/LHOTDK_8.png')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                  <div className='absolute bottom-0 right-0 z-0 hidden aspect-square w-[52px] rounded-lg bg-[#4285F4] md:-bottom-4 md:-right-4 md:block md:w-24 md:rounded-xl lg:-bottom-5 lg:-right-5 lg:w-32 xl:-bottom-6 xl:-right-6 xl:w-40 xl:rounded-2xl 2xl:-bottom-8 2xl:-right-8 2xl:w-52 2xl:rounded-3xl' />
                </div>
              </div>

              <div className='relative flex flex-col items-start justify-between gap-3 md:gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 pt-[3rem] pb-[1.25rem] md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#ffffff] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Những lợi ích
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#ffffff] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Tham gia lớp học, sinh viên sẽ nhận được rất nhiều lợi ích đi kèm mà chỉ Lớp Học
                    Ôn Tập có thể mang lại được.*
                  </p>
                </div>
                <BenefitBoard />
                <div className='absolute left-[-1.25rem] z-[-1] h-full w-screen bg-[#4285F4] md:left-[-3rem] lg:left-[-6rem] 2xl:left-[-8rem] 3xl:left-[-10rem]'></div>
              </div>

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Các thành tựu
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Lớp Học Ôn Tập tự hào đạt được những kết quả cùng thành tựu xuất sắc sau hơn 10
                    năm hoạt động. Những con số cũng đồng thời là những cột mốc, những mục tiêu mà
                    Câu lạc bộ Chúng Ta Cùng Tiến muốn duy trì và phát triển hơn cả về số lượng và
                    chất lượng.*
                  </p>
                </div>
                <Achievement1 />
              </div>

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Đánh giá của sinh viên
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Trên hết, sinh viên tham gia lớp học chính là những người cảm nhận rõ nhất những
                    giá trị mà Lớp Học Ôn Tập mang lại.*
                  </p>
                </div>
                <Comments />
              </div>

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Tin tức
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Lớp Học Ôn Tập cùng Chúng Ta Cùng Tiến đã vinh dự và tự hào được xuất hiện trên
                    các phương tiện truyền thông.*
                  </p>
                </div>
                <NewsCarousel />
              </div>

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Các công cụ hỗ trợ học tập khác
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Câu lạc bộ Chúng Ta Cùng Tiến mang đến những công cụ hỗ trợ trên Internet để
                    việc học tập và ôn luyện của sinh viên được diễn ra hiệu quả nhất.*
                  </p>
                </div>
                <SocialMediaCarousel />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default LHOTDKPage;
