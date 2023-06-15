import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Introduction from '../../assets/images/IntroductionPic.jpg';
import Mission from '../../assets/images/Mission.png';
import Vision from '../../assets/images/Vision.jpg';
import { Footer, Container } from '../../components';

const AboutUs = () => {
  return (
    <>
      <main className='w-full'>
        {/* Banner */}
        <Container className='flex flex-col items-center justify-center space-y-16 lg:space-y-0'>
          <div className='z-[2] lg:absolute lg:text-white'>
            <h1 className='text-center text-[28px] font-bold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>
              CHÚNG TA CÙNG TIẾN
            </h1>
            <h3 className='text-center text-xl font-semibold italic opacity-50 lg:text-2xl xl:text-3xl 2xl:text-4xl'>
              We Learn - We Share
            </h3>
          </div>
          <div className='relative p-3 sm:p-4 md:p-0'>
            <div className='absolute top-0 left-0 z-0 aspect-square w-[52px] rounded-lg bg-[#4285F4] sm:w-[72px] md:-top-4 md:-left-4 md:w-24 md:rounded-xl lg:-top-5 lg:-left-5 lg:w-32 xl:-top-6 xl:-left-6 xl:w-40 xl:rounded-2xl 2xl:-top-8 2xl:-left-8 2xl:w-52 2xl:rounded-3xl' />
            <div className='absolute bottom-0 right-0 z-0 aspect-square w-[90px] rounded-lg bg-[#A0C3FF] sm:w-[72px] md:-bottom-4 md:-right-4 md:w-32 md:rounded-xl lg:-bottom-5 lg:-right-5 lg:w-40 xl:-bottom-6 xl:-right-6 xl:w-52 xl:rounded-2xl 2xl:-bottom-8 2xl:-right-8 2xl:w-64 2xl:rounded-3xl' />

            <div className='absolute -bottom-8 left-0 z-0 aspect-square w-[20px] rounded-full bg-[#A0C3FF]  md:-left-6 md:-bottom-16 md:w-8 lg:-bottom-20 lg:w-10 xl:-bottom-24 xl:w-12 2xl:-bottom-32 2xl:w-16' />
            <div className='relative overflow-hidden'>
              <img
                className='z-[1] block aspect-[360/200] rounded-lg object-cover md:rounded-xl lg:brightness-[50%] xl:rounded-2xl 2xl:rounded-3xl'
                src={Introduction}
                alt='introduction_pic'
              />
            </div>
          </div>
        </Container>
        {/* Section 1 */}
        <Container className='flex flex-col space-y-16 md:justify-between lg:flex-row  lg:space-y-0'>
          <div className='space-y-3 md:max-w-md md:space-y-4 xl:max-w-xl xl:space-y-5 2xl:max-w-2xl 3xl:max-w-3xl'>
            <h2 className='text-center text-[28px] font-bold md:text-start md:uppercase lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>
              Giới thiệu
            </h2>
            <p className='text-justify text-[12px] text-[#696984] lg:text-[16px] xl:text-[22px]'>
              Chúng Ta Cùng Tiến là Câu lạc bộ học thuật được thành lập dưới sự quản lý của Trung
              tâm Hỗ trợ Sinh viên và Việc làm. CLB là tập hợp của những cá nhân Vững mạnh kiến thức
              trong CHUYÊN MÔN; Tiên phong sáng tạo trong TRUYỀN THÔNG; Năng động thích ứng trong SỰ
              KIỆN; và Thân thiện, hài hòa trong NHÂN SỰ HẬU CẦN.
            </p>
          </div>
          <div className='space-y-3 md:max-w-md md:space-y-4 md:self-end lg:self-auto xl:max-w-xl xl:space-y-5 2xl:max-w-2xl 3xl:max-w-3xl'>
            <h2 className='text-center text-[28px] font-bold md:text-end md:uppercase lg:text-start lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>
              THÀNH LẬP
            </h2>
            <p className='text-justify text-[12px] text-[#696984] lg:text-[16px] xl:text-[22px]'>
              Tiền thân của Chúng Ta Cùng Tiến là Đội nhóm phát triển Matlab hỗ trợ học tập trong bộ
              môn Giải tích 1. Đến năm 2013, Chương trình Chúng Ta Cùng Tiến ra đời nhằm mục đích
              giúp đỡ sinh viên học tập với lực lượng nòng cốt là các sinh viên tài năng. Đến hiện
              nay trở thành một CLB lớn với đội ngũ nhân sự nòng cốt mạnh mẽ, chất lượng trong các
              ban.
            </p>
          </div>
        </Container>
        {/* Section 3 */}
        <Container className='flex flex-col-reverse md:flex-row md:justify-between'>
          <div className='flex flex-1 items-center'>
            <div className='w-full space-y-3 md:max-w-xs md:space-y-4 lg:max-w-md xl:max-w-xl xl:space-y-5 2xl:max-w-2xl 3xl:max-w-3xl'>
              <h2 className='text-center text-[28px] font-bold md:text-start md:uppercase lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>
                SỨ MỆNH
              </h2>
              <p className='text-center text-[12px] text-[#696984] md:text-justify lg:text-[16px] xl:text-[22px]'>
                Chúng Ta Cùng Tiến luôn giữ vững tinh thần thiện nguyện là một tổ chức phi lợi nhuận
                hoạt động vì lợi ích của sinh viên; luôn đồng hành, lắng nghe nhằm đưa đến những giá
                trị tốt nhất cho sinh viên và cộng đồng. 
              </p>
            </div>
          </div>
          <div className='mb-8 flex-1 md:mb-0'>
            <img
              className='z-[1] block aspect-[360/200] rounded-lg object-cover md:rounded-xl lg:brightness-[50%] xl:rounded-2xl 2xl:rounded-3xl'
              src={Mission}
              alt='introduction_pic'
            />
          </div>
        </Container>
        {/* Section 4 */}
        <Container className='flex flex-col-reverse md:flex-row md:justify-between'>
          <div className='flex flex-1 items-center'>
            <div className='w-full space-y-3 md:max-w-xs md:space-y-4 lg:max-w-md xl:max-w-xl xl:space-y-5 2xl:max-w-2xl 3xl:max-w-3xl'>
              <h2 className='text-center text-[28px] font-bold md:text-start md:uppercase lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>
                TẦM NHÌN
              </h2>
              <p className='text-center text-[12px] text-[#696984] md:text-justify lg:text-[16px] xl:text-[22px]'>
                <span className='font-bold'>
                  Giữ vững, sáng tạo và phát triển tạo nên những giá trị lớn cho sinh viên, xã hội.
                </span>{' '}
                <br className='md:hidden' />
                Là một Câu lạc bộ có độ uy tín cao và nhận được sự tin cậy trong cộng đồng sinh viên
                Bách Khoa nói riêng và sinh viên các trường đại học nói chung.
              </p>
            </div>
          </div>
          <div className='mb-8 flex-1 md:mb-0'>
            <img
              className='z-[1] block aspect-[360/200] rounded-lg object-cover md:rounded-xl lg:brightness-[50%] xl:rounded-2xl 2xl:rounded-3xl'
              src={Vision}
              alt='introduction_pic'
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
