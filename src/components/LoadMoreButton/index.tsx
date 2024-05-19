import Icon from '../Icon';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex w-full flex-row items-center justify-center space-x-[0.5rem] rounded-[0.5rem] border-[1px] border-[#696984] border-opacity-10 bg-white p-2 hover:bg-[#696984] hover:bg-opacity-5'
    >
      <div className='text-[12px] font-normal leading-6 text-[#696984] xl:text-[16px] '>
        Xem thêm
      </div>
      <Icon.ChevronDown fill='#696984' className='aspect-[10/7] h-auto w-[12px]' />
    </button>
  );
};

export default LoadMoreButton;
