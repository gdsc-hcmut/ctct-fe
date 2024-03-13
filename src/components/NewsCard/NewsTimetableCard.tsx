import Icon from '../Icon';

interface NewsTimetableCardProps {
  eventSets?: Event[];
}

const NewsTimetableCard = ({ eventSets }: NewsTimetableCardProps) => {
  console.log(eventSets);
  return (
    <div className='flex w-full flex-col rounded-[0.5rem] border-[1px] border-[#696984] border-opacity-10 bg-white p-[1.25rem]'>
      <div className='flex w-full flex-col border-b-[1px] border-[#696984] border-opacity-10 pb-[0.5rem]'>
        <p className='text-start font-semibold text-[14x] text-[#696984] xl:text-[20px]'>
          LỚP HỌC SẮP TỚI
        </p>
      </div>
      <div className='grid grid-cols-3 gap-[1rem] pt-[1.25rem]'>
        <div className='flex w-full flex-col rounded-[0.5rem] border-[1px] border-[#696984] border-opacity-10 bg-white p-[0.75rem]'>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
              Thứ 7, 23/03
            </p>
            <div className='flex max-h-full max-w-full flex-row items-center justify-end'>
              {' '}
              <Icon.Clock className='aspect-square w-2 fill-[#696984] p-0 lg:w-3 2xl:w-4' />
              <p className='ml-[0.25rem] text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
                8h00
              </p>
            </div>
          </div>
          <div className='mt-[0.125rem] flex flex-row items-end justify-between'>
            <p className='text-start font-medium text-[12x] text-[#696984] xl:text-[16px]'>
              Vật lý 2
            </p>
            <p className='text-start font-normal text-[10x] text-[#696984] xl:text-[14px]'>
              Phòng 210H6
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-row items-center justify-end'>
        <a
          className='text-start font-normal text-[10x] text-[#696984] underline xl:text-[14px]'
          href='../events/lop-hoc-on-tap'
        >
          Đăng ký
        </a>
      </div>
    </div>
  );
};

export default NewsTimetableCard;
