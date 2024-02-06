import { LazyLoadImage } from '../../../../components';
import Achievement1 from '../../../../components/Achivement/Achievement1';
import HeroSection from '../../../../components/HeroSection';
import NewsCarousel from '../../../../components/NewsCarousel/NewsCarousel';
import SocialMediaCarousel from '../../../../components/SocialMediaCarousel/SocialMediaCarousel';
import { Page } from '../../../../layout';

const LHOTDKPage = () => {
  return (
    <Page title='Lớp học ôn tập'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <HeroSection />

        <div className='mb-16 flex w-full flex-col gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mb-7 flex w-full flex-col gap-y-[48px] md:mb-20 md:gap-y-[72px] lg:mb-24 lg:gap-y-[96px] xl:gap-y-[112px] 2xl:mb-28 2xl:gap-y-[128px]'>
              <div className='flex w-full flex-col items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
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
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[2/1] rounded-[20px] md:aspect-[5/2]'
                    src={require('../../../../assets/images/LHOTDK_1.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOTDK_1.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex w-full flex-col-reverse items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[3/1] rounded-[20px]'
                    src={require('../../../../assets/images/LHOTDK_2.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOTDK_2.jpg')}
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

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Các thành tựu
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Lớp Học Ôn Tập tự hào đạt được những kết quả cùng thành tựu xuất sắc sau hơn 10
                    năm hoạt động. Những con số cũng đồng thời là những cột mốc, những mục tiêu mà
                    Câu lạc bộ Chúng Ta Cùng Tiến muốn duy trì và phát triển hơn cả về số lượng và
                    chất lượng.
                  </p>
                </div>
                <Achievement1 />
              </div>

              <div className='flex w-full flex-col items-start justify-between gap-8'>
                <div className='flex w-full flex-col justify-start gap-2 md:items-center md:justify-center lg:gap-4 2xl:gap-5'>
                  <div className='text-justify text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Tin tức
                  </div>
                  <p className='mx-auto max-w-full text-justify leading-7 text-[#696984] md:text-center md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                    Lớp Học Ôn Tập cùng Chúng Ta Cùng Tiến đã vinh dự và tự hào được xuất hiện trên
                    các phương tiện truyền thông.
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
                    việc học tập và ôn luyện của sinh viên được diễn ra hiệu quả nhất.
                  </p>
                </div>
                <SocialMediaCarousel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default LHOTDKPage;
