import { Footer } from '../../components';
import { Page } from '../../layout';

const NewsPage = () => {
  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='mb-16 flex w-full flex-col gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'></div>
        <Footer />
      </main>
    </Page>
  );
};

export default NewsPage;
