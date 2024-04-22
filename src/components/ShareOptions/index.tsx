import { FacebookShareButton, EmailShareButton } from 'react-share';
import { toast } from 'react-toastify';

import Icon from '../Icon';
interface ShareOptionsProps {
  link: string;
}

const ShareOptions = ({ link }: ShareOptionsProps) => {
  return (
    <div className='flex flex-row items-center justify-start space-x-[0.375rem]'>
      <p className='text-center text-[12px] font-normal text-[#696984] md:text-[14px] 2xl:text-[16px]'>
        Chia sẻ
      </p>

      <FacebookShareButton url={link}>
        <div className='m-0 aspect-square items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
          <Icon.FacebookSolid className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
        </div>
      </FacebookShareButton>

      <EmailShareButton url={link}>
        <div className='aspect-auto items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
          <Icon.Letter className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
        </div>
      </EmailShareButton>

      <button
        onClick={() => {
          navigator.clipboard.writeText(link);
          toast.success('Copy link thành công!');
        }}
      >
        <div className='aspect-auto items-center justify-center rounded-full border-[1px] border-[#696984] p-[0.25rem]'>
          <Icon.Link className='aspect-square h-auto w-[1rem] fill-[#696984] p-0 hover:fill-[#4285F4] lg:w-[1.25rem] 2xl:w-[1.5rem]' />
        </div>
      </button>
    </div>
  );
};

export default ShareOptions;
