import { useWindowDimensions } from '../../hooks';
import LazyLoadImage from '../LazyLoadImage';
import './styles.css';

interface BenefitBoardItemProps {
  imgSrc: string;
  description: string;
}

const BenefitBoardItem: React.FC<BenefitBoardItemProps> = ({ imgSrc, description }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width >= 768 ? (
        <div className='item'>
          <div className='w-full lg:min-h-[10rem] xl:min-h-[12rem]'>
            <LazyLoadImage
              className='z-[1] block aspect-[3/2] rounded-[1.25rem]'
              src={imgSrc}
              placeHolderSrc={imgSrc}
              alt={imgSrc}
              objectFit='cover'
            />
          </div>
          <div className='flex h-full min-h-[5rem] flex-col items-center justify-center lg:min-h-[8rem] xl:min-h-[10rem] 2xl:min-h-[7rem]'>
            <p className='text-center font-semibold text-[#343743]'>{description}</p>
          </div>
        </div>
      ) : (
        <div className='item'>
          <div className='w-full'>
            <LazyLoadImage
              className='z-[1] block aspect-[3/2] rounded-[1.25rem]'
              src={imgSrc}
              placeHolderSrc={imgSrc}
              alt={imgSrc}
              objectFit='cover'
            />
          </div>
          <div className='flex h-full min-h-[10rem] flex-col items-center justify-center sm:min-h-[8rem]'>
            <p className='text-center font-semibold text-[#343743]'>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BenefitBoardItem;
