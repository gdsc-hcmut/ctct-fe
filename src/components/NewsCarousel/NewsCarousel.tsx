import { Carousel } from 'react-responsive-carousel';

import { CarouselIndicator, Icon, LazyLoadImage } from '../../components';
import { NewsData as data } from '../../data/CarouselData';
import { useWindowDimensions } from '../../hooks';

const NewsCarousel = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <div className='flex w-full flex-row items-start justify-start md:gap-8 lg:gap-12 2xl:gap-[56px]'>
          {data.map((item, index) => (
            <a
              className='flex w-[25%] cursor-pointer flex-col items-start justify-start gap-y-2 rounded-[20px] p-7 shadow-xl md:min-h-[500px] md:p-3 lg:min-h-[600px] lg:gap-y-3 lg:py-5 lg:px-4 xl:min-h-[550px] 2xl:min-h-[650px] 2xl:py-7 2xl:px-5'
              key={`new_${index}`}
              target='_blank'
              href={item.linkTo}
              rel='noreferrer'
            >
              <div className='w-[100%]'>
                <LazyLoadImage
                  className='z-[1] block aspect-[3/2] rounded-[20px]'
                  src={item.imgSrc}
                  placeHolderSrc={item.imgSrc}
                  alt={`img_${index}`}
                  objectFit='cover'
                />
              </div>
              <p className='h-[24px] text-start text-[12px] text-[#00CBB8] lg:text-[16px] 2xl:text-lg'>
                {item.source}
              </p>
              <p className='text-start font-medium leading-6 text-[#252641] lg:leading-8 2xl:leading-9'>
                {item.name}
              </p>
              <div className='flex flex-row gap-x-1'>
                <Icon.Clock className='aspect-square w-4 fill-[#696984] p-0 lg:w-5 2xl:w-6' />
                <p className='text-[12px] font-medium text-[#696984] lg:text-[14px] 2xl:text-[16px]'>
                  {item.date}
                </p>
              </div>
              <p className='text-[14px] font-normal leading-6 lg:text-[16px] lg:leading-7 2xl:text-[18px] 2xl:leading-8'>
                {item.description}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <div className='flex w-full items-center justify-center'>
          <Carousel
            showThumbs={false}
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            swipeable
            autoPlay
            infiniteLoop
            interval={10000}
            transitionTime={1000}
            showArrows={false}
            renderIndicator={CarouselIndicator}
            stopOnHover
            className='flex w-full flex-col items-center justify-center gap-y-5 bg-transparent'
          >
            {data.map((item, index) => (
              <div className='flex w-full justify-center pb-10' key={`new_${index}`}>
                <a
                  target='_blank'
                  href={item.linkTo}
                  className='flex w-[calc(100%-40px)] cursor-pointer flex-col items-start justify-center gap-y-2 rounded-[20px] p-3 shadow-xl'
                  rel='noreferrer'
                >
                  <div className='w-[100%]'>
                    <LazyLoadImage
                      className='z-[1] block aspect-[3/2] rounded-[20px]'
                      src={item.imgSrc}
                      placeHolderSrc={item.imgSrc}
                      alt={`img_${index}`}
                      objectFit='cover'
                    />
                  </div>
                  <p className='text-start text-[20px] text-[#00CBB8]'>{item.source}</p>
                  <p className='text-start text-[24px] font-medium leading-7 text-[#252641]'>
                    {item.name}
                  </p>
                  <div className='flex flex-row gap-x-1'>
                    <Icon.Clock className='aspect-square w-4 fill-[#696984] p-0 lg:w-5 2xl:w-6' />
                    <p className='text-[16px] font-medium text-[#696984]'>{item.date}</p>
                  </div>
                  <p className='text-start text-[16px] font-normal leading-7 text-[#696984]'>
                    {item.description}
                  </p>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default NewsCarousel;
