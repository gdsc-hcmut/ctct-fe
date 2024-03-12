import { LazyLoadImage } from '../';

const NewsItem = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-row items-start justify-start'>
        <div className='max-w-[45%]'>
          <div className='relative block aspect-[3/2] h-auto w-[100%] overflow-hidden'>
            <LazyLoadImage
              className='z-[1] block aspect-auto rounded-[0.5rem]'
              src={require('../../assets/images/News_1.png')}
              placeHolderSrc={require('../../assets/images/News_1.png')}
              alt='tstt_alt'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='ml-[1.25rem] flex w-full max-w-full flex-col'>
          <div className='max-w-full'>
            <p className='text-start font-semibold text-[14x] text-[#000000] xl:text-[20px]'>
              CLB Chúng Ta Cùng Tiến thông báo mở form tuyển thành viên đợt 2
            </p>
          </div>
          <div className='mt-[0.75rem] max-w-full'>
            <p className='text-justify text-[12px] leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
              Nhiều trường ĐH tuyển chọn sinh viên khá, giỏi làm trợ lý giảng dạy cho giảng viên.
              Các “giảng viên sinh viên" này tham gia đứng lớp giảng dạy, phụ chấm bài và được nhà
              trường trả lương.
            </p>
          </div>
          <div className='mt-[0.25rem] max-w-full'>
            <p className='text-justify text-[12px] font-normal leading-6 text-[#696984] xl:text-[16px] xl:leading-7'>
              50 phút trước
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[1.5rem] h-[1px] w-full bg-[#696984] opacity-10'></div>
    </div>
  );
};

export default NewsItem;
