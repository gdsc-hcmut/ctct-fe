import BenefitBoardData from '../../data/BenefitBoardData';
import { useWindowDimensions } from '../../hooks';
import BenefitBoardItem from '../BenefitBoardItem';
// import LazyLoadImage from '../LazyLoadImage';

const BenefitBoard = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width >= 768 ? (
        <div className='flex w-full flex-col items-center justify-center pb-[6rem] md:gap-8 lg:gap-12 2xl:gap-[56px]'>
          <div className='flex h-full w-full flex-row items-center justify-center md:gap-8 lg:gap-12 2xl:gap-[56px]'>
            <BenefitBoardItem
              imgSrc={BenefitBoardData[0].imgSrc}
              description={BenefitBoardData[0].description}
            />
            <BenefitBoardItem
              imgSrc={BenefitBoardData[1].imgSrc}
              description={BenefitBoardData[1].description}
            />
            <BenefitBoardItem
              imgSrc={BenefitBoardData[2].imgSrc}
              description={BenefitBoardData[2].description}
            />
          </div>

          <div className='flex h-full w-full flex-row items-center justify-center md:gap-8 lg:gap-12 2xl:gap-[56px]'>
            <BenefitBoardItem
              imgSrc={BenefitBoardData[3].imgSrc}
              description={BenefitBoardData[3].description}
            />
            <BenefitBoardItem
              imgSrc={BenefitBoardData[4].imgSrc}
              description={BenefitBoardData[4].description}
            />
          </div>
        </div>
      ) : (
        <div className='flex w-full flex-col items-center justify-center space-y-[0.75rem] pb-[3rem]'>
          <div className='flex h-full w-full flex-row items-center justify-center'>
            <BenefitBoardItem
              imgSrc={BenefitBoardData[0].imgSrc}
              description={BenefitBoardData[0].description}
            />
            <BenefitBoardItem
              imgSrc={BenefitBoardData[1].imgSrc}
              description={BenefitBoardData[1].description}
            />
          </div>

          <div className='flex h-full w-full flex-row items-center justify-center'>
            <BenefitBoardItem
              imgSrc={BenefitBoardData[2].imgSrc}
              description={BenefitBoardData[2].description}
            />
            <BenefitBoardItem
              imgSrc={BenefitBoardData[3].imgSrc}
              description={BenefitBoardData[3].description}
            />
          </div>

          <div className='flex h-full w-full flex-row items-center justify-center'>
            <BenefitBoardItem
              imgSrc={BenefitBoardData[4].imgSrc}
              description={BenefitBoardData[4].description}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BenefitBoard;
