import { LazyLoadImage } from '../';

const NewsFirstItem = () => {
  return (
    <div className='flex w-full flex-row items-start justify-start pt-[2.5rem]'>
      <div className='min-w-[50%]'>
        <div className='relative block h-max w-[100%] overflow-hidden'>
          <LazyLoadImage
            className='z-[1] block aspect-auto rounded-[0.5rem]'
            src={require('../../assets/images/News_1.png')}
            placeHolderSrc={require('../../assets/images/News_1.png')}
            alt='tstt_alt'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='ml-[2rem] flex w-full max-w-full flex-col space-y-[0.75rem]'>
        <div className='max-w-[50%]'>
          <p className='text-start font-semibold text-[16x] text-[#000000] xl:text-[24px]'>
            Trợ giảng khi còn ngồi trên giảng đường
          </p>
        </div>
        <div className='max-w-[50%]'>
          <p className='text-justify text-[12px] leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
            Nhiều trường ĐH tuyển chọn sinh viên khá, giỏi làm trợ lý giảng dạy cho giảng viên. Các
            “giảng viên sinh viên" này tham gia đứng lớp giảng dạy, phụ chấm bài và được nhà trường
            trả lương.
          </p>
        </div>
        <div className='max-w-[50%]'>
          <p className='text-justify text-[12px] font-semibold leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
            40 phút trước
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsFirstItem;
