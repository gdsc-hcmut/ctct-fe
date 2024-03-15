import Icon from '../Icon';

interface ShareOptionsProps {
  link: string;
}

const ShareOptions = ({ link }: ShareOptionsProps) => {
  console.log(link);
  return (
    <div className='flex flex-row items-center justify-start space-x-[0.375rem]'>
      <p className='text-center text-[12px] font-normal text-[#696984] md:text-[14px] 2xl:text-[16px]'>
        Chia sẻ
      </p>
      <div className='aspect-auto items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
        <Icon.FacebookSolid className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
      </div>

      <div className='aspect-auto items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
        <Icon.Letter className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
      </div>

      <div className='aspect-auto items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
        <Icon.Link className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
      </div>
    </div>
  );
};

export default ShareOptions;
