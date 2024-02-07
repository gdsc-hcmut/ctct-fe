import { useWindowDimensions } from '../../hooks';
import LazyLoadImage from '../LazyLoadImage';

const BenefitBoard = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width >= 768 ? (
        <div className='flex w-full flex-col items-center justify-center pb-[6rem] md:gap-8 lg:gap-12 2xl:gap-[56px]'>
          <div className='flex w-full flex-row items-center justify-center md:gap-8 lg:gap-12 2xl:gap-[56px]'>
            <div className='flex w-[33%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] lg:min-h-[20rem] lg:space-y-[1rem] lg:rounded-[2rem] lg:p-[1.25rem] xl:min-h-[24rem] xl:space-y-[1.25rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={require('../../assets/images/LHOTDK_3.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_3.png')}
                  alt={`LHOTDK_3.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Những kiến thức đại cương được hệ thống hoá, truyền đạt với ngôn ngữ{' '}
                  <span className='text-[#4285F4]'>sinh viên</span> gần gũi, dễ hiểu
                </p>
              </div>
            </div>

            <div className='flex w-[33%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] lg:min-h-[20rem] lg:space-y-[1rem] lg:rounded-[2rem] lg:p-[1.25rem] xl:min-h-[24rem] xl:space-y-[1.25rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={require('../../assets/images/LHOTDK_4.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_4.png')}
                  alt={`LHOTDK_4.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Cơ hội rèn luyện các dạng <span className='text-[#4285F4]'>bài tập</span> quan
                  trọng, thường gặp trong đề thi
                </p>
              </div>
            </div>

            <div className='flex w-[33%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] lg:min-h-[20rem] lg:space-y-[1rem] lg:rounded-[2rem] lg:p-[1.25rem] xl:min-h-[24rem] xl:space-y-[1.25rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={require('../../assets/images/LHOTDK_5.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_5.png')}
                  alt={`LHOTDK_5.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Kỹ năng làm đề thi từ những bộ đề do chính{' '}
                  <span className='text-[#4285F4]'>Ban chuyên môn</span> Câu lạc bộ Chúng Ta Cùng
                  Tiến biên soạn
                </p>
              </div>
            </div>
          </div>

          <div className='flex w-full flex-row items-center justify-center md:gap-8 lg:gap-12 2xl:gap-[56px]'>
            <div className='flex w-[33%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] lg:min-h-[20rem] lg:space-y-[1rem] lg:rounded-[2rem] lg:p-[1.25rem] xl:min-h-[24rem] xl:space-y-[1.25rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={require('../../assets/images/LHOTDK_6.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_6.png')}
                  alt={`LHOTDK_6.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Phòng học <span className='text-[#4285F4]'>thoải mái</span>, những người bạn học{' '}
                  <span className='text-[#4285F4]'>chăm chỉ</span>
                </p>
              </div>
            </div>

            <div className='flex w-[33%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] lg:min-h-[20rem] lg:space-y-[1rem] lg:rounded-[2rem] lg:p-[1.25rem] xl:min-h-[24rem] xl:space-y-[1.25rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={require('../../assets/images/LHOTDK_7.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_7.png')}
                  alt={`LHOTDK_7.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Được <span className='text-[#4285F4]'>giải đáp thắc mắc</span> tận tình sau buổi
                  học
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex w-full flex-col items-center justify-center space-y-[0.75rem] pb-[1rem] sm:space-y-[1.25rem] sm:pb-[3rem]'>
          <div className='flex w-full flex-row items-center justify-center space-x-[0.75rem] sm:space-x-[1.25rem]'>
            <div className='flex h-[20rem] w-[50%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] sm:h-[17rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[1rem] sm:aspect-[2/1]'
                  src={require('../../assets/images/LHOTDK_3.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_3.png')}
                  alt={`LHOTDK_3.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Những kiến thức đại cương được hệ thống hoá, truyền đạt với ngôn ngữ{' '}
                  <span className='text-[#4285F4]'>sinh viên</span> gần gũi, dễ hiểu
                </p>
              </div>
            </div>
            <div className='flex h-[20rem] w-[50%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] sm:h-[17rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[1rem] sm:aspect-[2/1]'
                  src={require('../../assets/images/LHOTDK_4.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_4.png')}
                  alt={`LHOTDK_4.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Cơ hội rèn luyện các dạng <span className='text-[#4285F4]'>bài tập</span> quan
                  trọng, thường gặp trong đề thi
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-row items-center justify-center space-x-[0.75rem] sm:space-x-[1.25rem]'>
            <div className='flex h-[20rem] w-[50%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] sm:h-[17rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[1rem] sm:aspect-[2/1]'
                  src={require('../../assets/images/LHOTDK_5.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_5.png')}
                  alt={`LHOTDK_5.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Kỹ năng làm đề thi từ những bộ đề do chính{' '}
                  <span className='text-[#4285F4]'>Ban chuyên môn</span> Câu lạc bộ Chúng Ta Cùng
                  Tiến biên soạn
                </p>
              </div>
            </div>
            <div className='flex h-[20rem] w-[50%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.75rem] sm:h-[17rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[1rem] sm:aspect-[2/1]'
                  src={require('../../assets/images/LHOTDK_6.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_6.png')}
                  alt={`LHOTDK_6.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Phòng học <span className='text-[#4285F4]'>thoải mái</span>, những người bạn học{' '}
                  <span className='text-[#4285F4]'>chăm chỉ</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-row items-center justify-center space-x-[0.75rem] sm:space-x-[1.25rem]'>
            <div className='flex h-[20rem] w-[50%] flex-col items-start justify-start space-y-[0.75rem] rounded-[1.25rem] bg-white p-[0.5rem] sm:h-[17rem]'>
              <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[1rem] sm:aspect-[2/1]'
                  src={require('../../assets/images/LHOTDK_7.png')}
                  placeHolderSrc={require('../../assets/images/LHOTDK_7.png')}
                  alt={`LHOTDK_7.png`}
                  objectFit='cover'
                />
              </div>
              <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
                <p className='text-center font-semibold text-[#343743]'>
                  Được <span className='text-[#4285F4]'>giải đáp thắc mắc</span> tận tình sau buổi
                  học
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BenefitBoard;
