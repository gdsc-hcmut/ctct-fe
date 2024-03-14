import { LazyLoadImage } from '../';

const NewsFirstItem = () => {
  return (
    <div className='flex w-full flex-col items-start justify-start pt-[1.5rem] md:flex-row md:pt-[2.5rem]'>
      <div className='min-w-full md:min-w-[50%]'>
        <div className='relative block overflow-visible md:h-max md:w-[100%] md:overflow-hidden'>
          <LazyLoadImage
            className='z-[1] block rounded-[0.5rem] md:aspect-auto'
            src={require('../../assets/images/News_1.png')}
            placeHolderSrc={require('../../assets/images/News_1.png')}
            alt='tstt_alt'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='mt-[1rem] flex w-full max-w-full flex-col space-y-[0.25rem] md:mt-0 md:ml-[1rem] md:space-y-[0.75rem] lg:ml-[1.5rem] xl:ml-[1.75rem] 3xl:ml-[2rem]'>
        <div className='max-w-full lg:max-w-[50%]'>
          <p className='text-start text-[20px] font-semibold text-[#000000] xl:text-[24px]'>
            Trợ giảng khi còn ngồi trên giảng đường
          </p>
        </div>
        <div className='max-w-full lg:max-w-[50%]'>
          <p className='text-start text-[14px] leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
            Nhiều trường ĐH tuyển chọn sinh viên khá, giỏi làm trợ lý giảng dạy cho giảng viên. Các
            “giảng viên sinh viên" này tham gia đứng lớp giảng dạy, phụ chấm bài và được nhà trường
            trả lương.
          </p>
        </div>
        <div className='hidden max-w-full md:block lg:max-w-[50%]'>
          <p className='text-start text-[12px] font-semibold leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
            40 phút trước
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsFirstItem;
