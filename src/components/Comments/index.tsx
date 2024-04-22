import { Carousel } from 'react-responsive-carousel';

import { CarouselIndicator } from '../../components';
import { CommentsData as data } from '../../data/CarouselData';
import { useWindowDimensions } from '../../hooks';
import CommentsItem from '../CommentsItem';

const Comments = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <div className='flex w-full flex-col items-center justify-center space-y-[1.5rem] md:space-y-[3rem]'>
          <div className='relative flex w-full justify-start'>
            <CommentsItem
              name={data[0].name}
              comment={data[0].comment}
              profileImg={data[0].profileImg}
            />
            <div className='absolute bottom-0 left-0 z-[-1] hidden aspect-square w-[52px] rounded-full bg-[#4285F4] lg:-bottom-6 lg:-left-6 lg:block lg:w-32 xl:-bottom-8 xl:-left-8 xl:w-40 2xl:-bottom-14 2xl:-left-14 2xl:w-52' />
          </div>
          <div className='relative flex w-full justify-end'>
            <CommentsItem
              name={data[1].name}
              comment={data[1].comment}
              profileImg={data[1].profileImg}
            />
            <div className='absolute top-0 right-0 z-[-1] hidden aspect-square w-[52px] rounded-full bg-[#4285F4] lg:-top-8 lg:-right-8 lg:block lg:w-32 xl:-top-10 xl:-right-10 xl:w-40 2xl:-top-16 2xl:-right-16 2xl:w-52' />
          </div>
          <div className='relative flex w-full justify-start'>
            <CommentsItem
              name={data[2].name}
              comment={data[2].comment}
              profileImg={data[2].profileImg}
            />
            <div className='absolute top-0 left-0 z-[-1] hidden aspect-square w-[52px] rounded-lg bg-[#4285F4] lg:-top-5 lg:-left-5 lg:block lg:w-32 xl:-top-6 xl:-left-6 xl:w-40 xl:rounded-2xl 2xl:-top-8 2xl:-left-8 2xl:w-52 2xl:rounded-3xl' />
          </div>
        </div>
      ) : (
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
          className='flex h-max w-full flex-col items-center justify-center gap-y-5 bg-transparent'
        >
          {data.map((item, index) => (
            <div className='flex h-full w-full justify-center pb-10' key={`new_${index}`}>
              <div className='flex w-[calc(100%-40px)] flex-col items-center justify-start gap-y-2 rounded-[20px] p-3 shadow-xl'>
                <img
                  className='aspect-square max-h-[4rem] max-w-[4rem] rounded-full'
                  src={item.profileImg}
                  alt={item.profileImg}
                />
                <p className='text-start text-[24px] font-medium leading-7 text-[#252641]'>
                  {item.name}
                </p>
                <p className='text-start text-[16px] font-normal leading-7 text-[#696984]'>
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Comments;
