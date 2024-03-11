import { Footer } from '../../components';
import { Page } from '../../layout';

const NewsPage = () => {
  return (
    <Page title='Tin tức'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-hidden overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <Footer />
      </main>
    </Page>
  );
};

export default NewsPage;
