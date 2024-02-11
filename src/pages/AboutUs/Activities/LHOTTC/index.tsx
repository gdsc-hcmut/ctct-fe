import { Footer, LazyLoadImage } from '../../../../components';
import Achievement2 from '../../../../components/Achivement/Achievement2';
import Comments from '../../../../components/Comments';
import { Page } from '../../../../layout';
import './index.css';

const LHOTTCPage = () => {
  return (
    <Page title='Lớp học ôn tập'>
      <main className='with-nav-height flex flex-col gap-y-5 overflow-y-auto text-[16px] md:text-[14px] lg:gap-y-10 lg:text-[18px] xl:text-[20px] 2xl:gap-y-[54px] 3xl:gap-y-[60px]'>
        <div className='block h-fit w-full'>
          <LazyLoadImage
            className='header z-[1] block aspect-[52/25] md:aspect-[4/1]'
            src={require('../../../../assets/images/LHOT_1.jpg')}
            placeHolderSrc={require('../../../../assets/images/LHOT_1-placeholder.jpg')}
            alt='tstt_alt'
            objectFit='cover'
          />
        </div>
        <div className='mb-16 flex w-full flex-col gap-y-0 px-5 md:gap-y-12 md:px-12 lg:mb-24 lg:gap-y-20 lg:px-24 2xl:mb-32 2xl:gap-y-24 2xl:px-32 3xl:mb-36 3xl:gap-y-28 3xl:px-40'>
          <div className='flex w-full flex-col items-center justify-center gap-y-0'>
            <div className='flex w-full items-start'>
              <h1 className='text-start text-[28px] font-bold text-[#2F327D] md:mb-8 md:text-[24px] md:text-2xl md:text-[#2F327D] lg:mb-10 lg:text-3xl xl:text-4xl 2xl:mb-[44px] 2xl:text-5xl'>
                LỚP HỌC ÔN TẬP - THI THỬ
              </h1>
            </div>
            <div className='mb-7 flex w-full flex-col gap-y-6 md:mb-20 md:gap-y-9 lg:mb-24 lg:gap-y-12 xl:gap-y-14 2xl:mb-28 2xl:gap-y-16'>
              <div className='flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Giới thiệu
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    <span className='font-bold'>Lớp học ôn tập</span> là một hoạt động phi lợi nhuận
                    được Câu lạc bộ Chúng Ta Cùng Tiến tổ chức vào mỗi học kỳ trong nhiều năm qua.
                    Hoạt động đã trở nên rất quen thuộc với nhiều thế hệ sinh viên Bách khoa và là
                    “người bạn” đồng hành vượt qua các môn đại cương khó khăn, chia sẻ kinh nghiệm
                    học tập, thi cử, . . .
                    <br />
                    <span className='font-bold'>Lớp học ôn tập</span> thường được tổ chức vào mỗi
                    cuối tuần tại Trường Đại học Bách khoa, cơ sở Dĩ An; chủ yếu dạy các môn đại
                    cương như: Giải tích, Vật lý, Hóa đại cương, Đại số tuyến tính, . . . Ngoài ra,
                    CLB còn tổ chức các kỳ thi thử giữa kỳ và cuối kỳ, giúp các bạn chuẩn bị tốt hơn
                    cho kỳ thi chính thức của trường.
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[47/28] rounded-[20px] md:aspect-[3/2]'
                    src={require('../../../../assets/images/LHOT_2.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_2-placeholder.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[11/5] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT-placeholder.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
                <div className='flex justify-center md:max-w-[46%]'>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Điều đặc biệt ở <span className='font-bold'>Lớp học ôn tập</span>, người trực
                    tiếp đứng lớp giảng dạy và soạn đề chính là các bạn thành viên xuất sắc thuộc
                    Ban Chuyên môn CLB. Với phong cách và ngôn ngữ sinh viên - gần gũi trong chia sẻ
                    hỗ trợ ôn tập, hệ thống kiến thức, các bạn đến đây sẽ được giúp đỡ nhiệt tình và
                    còn nhận được tài liệu học tập.
                  </p>
                </div>
              </div>
              <div className='flex w-full flex-col items-start justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='lg:px-py-3 flex flex-col justify-center gap-2 md:max-w-[46%] md:py-2 lg:gap-4 2xl:gap-5 2xl:py-4'>
                  <h2 className='text-start text-[24px] font-semibold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Hình thành và Phát triển
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Chương trình <span className='font-bold'>Lớp học ôn tập</span> được tổ chức lần
                    đầu vào tháng 5/2013, xuất phát từ tình trạng thực tế lúc bấy giờ. Khi hàng trăm
                    sinh viên bị cảnh cáo học vụ, Trung tâm Hỗ trợ Sinh viên và Việc làm lên ý tưởng
                    triển khai các buổi ôn tập, hệ thống kiến thức, chia sẻ kinh nghiệm làm bài thi
                    cho những sinh viên có nhu cầu trước mỗi kỳ thi.
                    <br /> Trải qua 10 năm phát triển, từ các nhóm học nhỏ,{' '}
                    <span className='font-bold'>Lớp học ôn tập</span> dần thu hút được càng nhiều
                    sinh viên tham gia. Theo thống kê, các năm gần đây, CLB Chúng Ta Cùng Tiến tổ
                    chức hàng trăm lớp học, tiếp cận được hàng ngàn sinh viên mỗi khóa.
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[4/3] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_4.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_4-placeholder.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>

            <div className='mb-7 flex w-[calc(100%+40px)] flex-col gap-6 rounded-[20px] bg-[#9DCCFF]/20 px-5 py-6 md:mb-12 md:w-[108%] md:py-8 md:px-[4%] lg:mb-16 lg:gap-8 lg:py-12 2xl:mb-20 2xl:gap-10 2xl:py-16'>
              <div className='flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Tháng 5/2013
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Xuất phát từ thực trạng có hàng trăm sinh viên bị cảnh cáo học vụ, chương trình{' '}
                    <span className='font-semibold'>Chúng ta cùng tiến</span> ra đời với các nhóm hỗ
                    trợ học tập nhỏ ở các phòng tự học của trường và ký túc xá ĐHQG-HCM.
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOTDK_5.png')}
                    placeHolderSrc={require('../../../../assets/images/LHOTDK_5.png')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_5.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_5-placeholder.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Tháng 4/2014
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Đội <span className='font-semibold'>Chúng ta cùng tiến</span> được thành lập,
                    tham gia hỗ trợ hướng dẫn ôn tập, hệ thống kiến thức cho sinh viên. Hoạt động
                    chính tại giảng đường H1, H6.
                  </p>
                </div>
              </div>
              <div className='flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Tháng 5/2015
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Chương trình được xuất hiện trên báo Tuổi trẻ với bài đăng{' '}
                    <a
                      className='underline underline-offset-2'
                      href='https://tuoitre.vn/tro-giang-khi-con-ngoi-tren-giang-duong-757152.htm'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Trợ giảng khi còn ngồi trên giảng đường - Báo Tuổi trẻ.
                    </a>
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_1.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_1-placeholder.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_2017_1.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_2017_1.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Năm 2017
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Phát triển thành <span className='font-semibold'>CLB Chúng Ta Cùng Tiến</span>{' '}
                    với nhiều hoạt động hơn. Lấy tên chương trình là{' '}
                    <span className='font-semibold'>Lớp học ôn tập</span> làm hoạt động cốt lõi.
                  </p>
                </div>
              </div>
              <div className='flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Năm 2018
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Fanpage <span className='font-semibold'>Chúng Ta Cùng Tiến</span> và Group{' '}
                    <span className='font-semibold'>Cộng đồng Chúng Ta Cùng Tiến</span> được thành
                    lập. Group đến nay trở thành nơi uy tín để sinh viên trao đổi thắc mắc và được
                    hỗ trợ học tập
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_2018_1.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_2018_1.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_2021_2.JPG')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_2021_2.JPG')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Năm 2020-2021
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Tạm hoãn do đại dịch Covid-19. Hoạt động online được đẩy mạnh, thành lập kênh
                    YouTube với hơn 40 video bài giảng. Group trao đổi cũng từ đó phát triển mạnh
                    mẽ.
                  </p>
                </div>
              </div>
              <div className='flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                  <h2 className='text-start text-[24px] font-semibold text-[#696984] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Năm 2022-nay
                  </h2>
                  <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Xây dựng, bổ sung, phát triển chương trình trở lại sau đại dịch. HK231 ra mắt{' '}
                    <span className='font-semibold'>website Chúng Ta Cùng Tiến</span> với phòng ôn
                    luyện cho hỗ trợ sinh viên học tập.
                  </p>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-[5/2] rounded-[20px]'
                    src={require('../../../../assets/images/LHOT_2022_2.jpg')}
                    placeHolderSrc={require('../../../../assets/images/LHOT_2022_2.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>

            <div className='mb-[3.5rem] flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
              <div className='w-[100%] md:w-[50%]'>
                <Achievement2 />
              </div>
              <div className='flex flex-col justify-center gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                <h2 className='text-start text-[24px] font-semibold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                  Thành tựu
                </h2>
                <p className='text-start leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:leading-10'>
                  Lớp Học Ôn Tập tự hào đạt được những kết quả cùng thành tựu xuất sắc sau hơn 10
                  năm hoạt động. Những con số cũng đồng thời là những cột mốc, những mục tiêu mà Câu
                  lạc bộ Chúng Ta Cùng Tiến muốn duy trì và phát triển hơn cả về số lượng và chất
                  lượng.*
                </p>
              </div>
            </div>

            <div className='mb-[3.5rem] flex w-full flex-col items-start justify-between gap-8'>
              <div className='flex flex-col justify-start gap-2 md:max-w-[46%] lg:gap-4 2xl:gap-5'>
                <div className='text-[24px] font-bold text-[#000000] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                  Đánh giá của sinh viên
                </div>
                <p className='mx-auto max-w-full leading-7 text-[#696984] md:leading-7 lg:leading-9 2xl:max-w-[75%] 2xl:leading-10'>
                  Trên hết, sinh viên tham gia lớp học chính là những người cảm nhận rõ nhất những
                  giá trị mà Lớp Học Ôn Tập mang lại.*
                </p>
              </div>
              <Comments />
            </div>

            <div className='flex w-[calc(100%+40px)] flex-col gap-6 rounded-[20px] bg-[#9DCCFF]/20 px-5 py-6 md:mb-12 md:w-[108%] md:py-8 md:px-[4%] lg:mb-16 lg:gap-8 lg:py-12 2xl:mb-20 2xl:gap-10 2xl:py-16'>
              <div className='flex w-full flex-col items-start justify-start gap-5 md:h-min md:flex-row md:gap-8 lg:gap-12 2xl:gap-[56px]'>
                <div className='flex min-h-min flex-col justify-start space-y-[1.5rem] md:max-w-[46%] lg:space-y-[2.5rem] '>
                  <h2 className='text-start text-[24px] font-semibold text-[#010514] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]'>
                    Feedback cho chúng tôi
                  </h2>
                  <p className='text-start leading-7 text-[#010514] md:leading-7 lg:leading-9 2xl:leading-10'>
                    Lớp học ôn tập là thành quả của sự nỗ lực và tâm huyết không hề nhỏ của Trung
                    tâm Hỗ trợ Sinh viên và Việc làm và các thành viên của CLB Chúng Ta Cùng Tiến,
                    tuy nhiên, không tránh khỏi những sai sót trong quá trình tổ chức. CLB rất hy
                    vọng nhận được những ý kiến đóng góp để ngày càng hoàn thiện hơn, tạo ra được
                    giá trị hơn nữa cho cộng đồng sinh viên.
                  </p>
                  <div className='flex h-[3rem] w-[10rem] flex-row items-center justify-center rounded-full bg-[#4285F4] lg:h-[3.5rem] lg:w-[12erm] xl:h-[4rem] xl:w-[15rem]'>
                    <p className='cursor-pointer font-semibold text-white'>Feedback tại đây</p>
                  </div>
                </div>
                <div className='w-[100%] md:w-[50%]'>
                  <LazyLoadImage
                    className='z-[1] block aspect-auto rounded-[20px]'
                    src={require('../../../../assets/images/IntroductionPic.jpg')}
                    placeHolderSrc={require('../../../../assets/images/IntroductionPic.jpg')}
                    alt='tstt_alt'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Page>
  );
};

export default LHOTTCPage;
