import FrontImage from '../../assets/images/LHOTDK-Front.png';
import { LazyLoadImage } from '../../components';
import { useWindowDimensions } from '../../hooks';

const HeroSection = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 768 ? (
        <div className='relative mb-0 flex h-fit w-full flex-row items-center justify-start md:mb-[2rem] lg:mb-[3rem]'>
          <div className='absolute z-[5] text-white'>
            <div className='flex flex-col items-start justify-start space-y-[0.5rem] px-5 md:space-y-[1.5rem] md:px-12 lg:space-y-[2.5rem] lg:px-24 2xl:px-32 3xl:px-40'>
              <p className='mb-[1rem] text-center text-[28px] font-bold text-white md:text-4xl	lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                LỚP HỌC ÔN TẬP
              </p>

              <p className='max-w-[46%] text-justify leading-7 text-white md:leading-7 lg:leading-9 2xl:leading-10'>
                <span className='font-bold'>Lớp học ôn tập </span>của CLB Chúng Ta Cùng Tiến là một
                hoạt động phi lợi nhuận được tổ chức vào mỗi học kỳ trong nhiều năm qua, giúp các
                bạn sinh viên Bách Khoa củng cố kiến thức những môn đại cương, từ đó có sự chuẩn bị
                tốt hơn cho kỳ thi.
              </p>

              {width > 1200 && (
                <div className='flex flex-row items-center justify-start space-x-[0.5rem] xl:space-x-[1rem]'>
                  <div className='h-[2rem] w-auto rounded-[1.25rem] bg-[#5B5B5B] bg-opacity-60'>
                    <p className='px-[1.5rem] text-white'>
                      <span className='font-bold'>14.000+</span> sinh viên được hỗ trợ
                    </p>
                  </div>
                  <div className='h-[2rem] w-auto rounded-full bg-[#5B5B5B] bg-opacity-60'>
                    <p className='px-[1.5rem] text-white'>
                      <span className='font-bold'>50+</span> lớp học mỗi kỳ
                    </p>
                  </div>
                </div>
              )}

              <div className='mb-[2rem] flex flex-row items-center justify-between rounded-full bg-[#4285F4]'>
                <p className='py-4 px-[3rem] font-bold text-white'>Đăng ký ngay!</p>
              </div>
            </div>
          </div>
          <div className='relative w-full'>
            <LazyLoadImage
              containerClassName='overflow-hidden w-full block'
              className='z-[1] block'
              src={FrontImage}
              placeHolderSrc={FrontImage}
              alt='introduction_pic'
              objectFit='cover'
            />
          </div>
        </div>
      ) : (
        <div className='relative mb-[3rem] flex min-h-[30rem] flex-row items-center justify-between lg:mb-[3rem]'>
          <div className='absolute z-[5] flex w-full flex-col items-center justify-between space-y-[2rem] text-white'>
            <p className='mb-[1rem] text-center text-[36px] font-bold text-white'>LỚP HỌC ÔN TẬP</p>

            <p className='mx-auto max-w-full px-5 text-justify leading-7 text-white md:leading-7 lg:leading-9 2xl:leading-10'>
              <span className='font-bold'>Lớp học ôn tập </span>của CLB Chúng Ta Cùng Tiến là một
              hoạt động phi lợi nhuận được tổ chức vào mỗi học kỳ trong nhiều năm qua, giúp các bạn
              sinh viên Bách Khoa củng cố kiến thức những môn đại cương, từ đó có sự chuẩn bị tốt
              hơn cho kỳ thi.
            </p>

            <div className='mb-[2rem] flex flex-row items-center justify-between rounded-full bg-[#4285F4]'>
              <p className='py-4 px-[3rem] font-bold text-white'>Đăng ký ngay!</p>
            </div>
          </div>
          <div className='relative block h-full overflow-hidden'>
            <LazyLoadImage
              containerClassName='overflow-hidden w-full block'
              className='z-[1] block'
              src={FrontImage}
              placeHolderSrc={FrontImage}
              alt='introduction_pic'
              objectFit='cover'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
