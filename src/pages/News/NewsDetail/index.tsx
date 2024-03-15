import { Footer, LazyLoadImage } from '../../../components';
import ShareOptions from '../../../components/ShareOptions';
import { Page } from '../../../layout';

const DayOfWeekVietnamese = [
  'Chủ Nhật',
  'Thứ Hai',
  'Thứ Ba',
  'Thứ Tư',
  'Thứ Năm',
  'Thứ Sáu',
  'Thứ Bảy',
];

const translateVietnameseDay = (date: Date) => {
  const vietnameseDay = DayOfWeekVietnamese[date.getDay()];
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  return `${vietnameseDay}, ${day < 10 ? 0 : ''}${day}/${
    month < 10 ? 0 : ''
  }${month}/${year}, ${time} (GMT+7)`;
};

const NewsDetail = () => {
  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col items-center gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='mb-16 flex w-full max-w-[120rem] flex-row gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='mt-[3rem] mb-[0.5rem] flex w-full flex-col gap-y-[1rem] lg:mb-[1.5rem] lg:gap-y-[1.5rem] xl:gap-y-[2rem] 2xl:mb-[2.5rem] 2xl:gap-y-[2.5rem]'>
              <div className='flex max-w-full flex-col xl:ml-[6rem] xl:max-w-[65%] 2xl:max-w-[55%]'>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-start text-[14px] font-medium text-[#4285F4] md:text-[16px] xl:text-[18px]'>
                    Sự kiện
                  </p>
                  <p className='text-start text-[14px] font-normal text-[#696984] md:text-[16px] xl:text-[18px]'>
                    {translateVietnameseDay(new Date())}
                  </p>
                </div>
                <div className='mt-[0.75rem] flex w-full flex-row'>
                  <p className='text-start text-[28px] font-semibold text-[#000000] xl:text-[36px]'>
                    Trợ giảng khi còn ngồi trên giảng đường
                  </p>
                </div>
                <div className='mt-[2rem] flex flex-col space-y-[1rem] text-justify text-[14px] font-normal leading-[1.5rem] text-[#696984] md:text-[16px] md:leading-[1.75rem] xl:text-[18px] xl:leading-[2rem] 2xl:space-y-[2rem]'>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi erat,
                    consequat id luctus ac, viverra et lacus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Duis in purus urna. Proin
                    ac efficitur elit. Nunc auctor venenatis arcu, nec lacinia purus semper sit
                    amet. Cras eu odio sit amet mi imperdiet pellentesque sit amet nec neque. Ut non
                    lobortis odio. Sed maximus dignissim magna eu elementum. Mauris eget feugiat
                    lacus. Mauris varius faucibus feugiat. Aliquam erat volutpat.
                    {<br />}
                    {<br />}
                    Aliquam ornare ipsum vitae faucibus porttitor. Quisque nisl libero, vehicula vel
                    dolor a, accumsan lacinia lacus. Nunc consequat lacinia pellentesque. Nullam
                    tristique in urna eget volutpat. Nam libero purus, malesuada vel ex at, maximus
                    bibendum leo. Integer vel malesuada mi. Nunc mattis lorem eget pretium
                    condimentum. Aliquam scelerisque justo at quam tincidunt, sit amet congue diam
                    pharetra. Cras fringilla fermentum velit, congue facilisis ipsum consectetur
                    nec. Suspendisse porttitor fermentum orci, in luctus orci convallis non.
                    Praesent metus felis, tempor vitae lorem ut, dapibus suscipit dui.
                  </div>
                  <div className='relative flex h-auto max-w-full flex-col overflow-hidden'>
                    <LazyLoadImage
                      className='z-[1] block aspect-auto rounded-[0.5rem]'
                      src={require('../../../assets/images/Fessior2.jpg')}
                      placeHolderSrc={require('../../../assets/images/Fessior2.jpg')}
                      alt='tstt_alt'
                      objectFit='cover'
                    />
                    <div className='mt-[0.75rem] w-full items-center justify-center'>
                      <p className='text-center text-[12px] font-normal text-[#696984] md:text-[14px] 2xl:text-[16px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div>
                    Curabitur malesuada, leo consectetur efficitur pellentesque, dolor nisi feugiat
                    tortor, sed maximus orci velit sit amet nisi. Morbi quis nisi et lacus elementum
                    consequat. Curabitur imperdiet dui non sagittis bibendum. Suspendisse tempor
                    iaculis mi imperdiet vehicula. Donec diam mauris, varius id dapibus in,
                    tristique quis magna. Nullam porta malesuada euismod. Quisque vestibulum
                    pellentesque bibendum. Cras egestas accumsan faucibus. Fusce fermentum tincidunt
                    risus id eleifend. Morbi non est lobortis, molestie sem quis, blandit nulla.
                    Cras eu ultrices mauris.
                    {<br />}
                    {<br />}
                    Pellentesque volutpat eget nisl et sollicitudin. Nunc vitae massa eu urna
                    vehicula molestie. Vestibulum et hendrerit ipsum, in varius nisl. Sed iaculis
                    orci vitae porta facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nulla quam nibh, condimentum non dignissim eu, faucibus sit amet risus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Curabitur sit amet convallis tortor, nec fermentum dui. Nunc rutrum justo
                    vitae magna porta, sit amet ultrices lacus vestibulum. Fusce in massa maximus,
                    mollis ex nec, facilisis tellus..
                  </div>
                </div>
                <div className='mt-[1rem]'>
                  <p className='text-end text-[16px] font-semibold text-black md:text-[18px] xl:text-[20px]'>
                    Đoàn Đạt
                  </p>
                </div>
                <div className='mt-[1rem] flex flex-row items-center justify-end'>
                  <ShareOptions link='https://www.facebook.com' />
                </div>
              </div>
              <div className='flex flex-col'></div>
              <div className='flex flex-col'>Hello</div>
              <div className='flex flex-col'>Hello</div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default NewsDetail;
