import Icon from '../components/Icon';

const CarouselData = [
  {
    id: 1,
    title: 'Thi Thử Vật Lý 1',
    imgSrc: require('../assets/images/IntroductionPic.jpg'),
    imgPlaceholder: require('../assets/images/Introduction-placeholder.jpg'),
    to: '/room/tests',
  },
  {
    id: 2,
    title: 'Thi Thử Hoá Đại Cương',
    imgSrc: require('../assets/images/LHOT_1.jpg'),
    imgPlaceholder: require('../assets/images/LHOT_1-placeholder.jpg'),
    to: '/room/tests',
  },
  {
    id: 3,
    title: 'Thi Thử Giải Tích 1',
    imgSrc: require('../assets/images/GSAX-Header.jpg'),
    imgPlaceholder: require('../assets/images/GSAX-Header-placeholder.jpg'),
    to: '/room/tests',
  },
  {
    id: 4,
    title: 'Không Ai Bị Bỏ Lại Phía Sau',
    imgSrc: require('../assets/images/TSTT.jpg'),
    imgPlaceholder: require('../assets/images/TSTT-placeholder.jpg'),
    to: '/about-us',
  },
];

const EventsAndActivities = [
  {
    id: '1',
    name: 'Gia sư áo xanh',
    imgSrc: require('../assets/images/GSAX.jpg'),
    imgPlaceholder: require('../assets/images/GSAX-placeholder.jpg'),
    linkTo: 'about-us/activities/gia-su-ao-xanh',
  },
  {
    id: '2',
    name: 'Lớp học ôn tập',
    imgSrc: require('../assets/images/LHOT.jpg'),
    imgPlaceholder: require('../assets/images/LHOT-placeholder.jpg'),
    linkTo: 'about-us/activities/lop-hoc-on-tap',
  },
  {
    id: '3',
    name: 'Sách cũ tri thức mới',
    imgSrc: require('../assets/images/SCTTM.jpg'),
    imgPlaceholder: require('../assets/images/SCTTM-placeholder.jpg'),
    linkTo: 'about-us/activities/sach-cu-tri-thuc-moi',
  },
  {
    id: '4',
    name: 'Tiếp sức tới trường',
    imgSrc: require('../assets/images/TSTT.jpg'),
    imgPlaceholder: require('../assets/images/TSTT-placeholder.jpg'),
    linkTo: 'about-us/activities/tiep-suc-toi-truong',
  },
];

const NewsData = [
  {
    id: '1',
    name: 'NÀO CHÚNG TA CÙNG TIẾN!',
    source: 'Đại học Quốc Gia TP.HCM',
    description:
      'Vào thứ Bảy và Chủ nhật hằng tuần, tại nhà H6 Trường ĐH Bách Khoa ĐHQG-HCM (Cơ sở Dĩ An) có hàng trăm sinh viên đến tham gia lớp học mang tên Chúng ta cùng tiến.',
    date: '9 tháng 4, năm 2019',
    imgSrc: require('../assets/images/LHOTTTNews.png'),
    linkTo: 'https://vnuhcm.edu.vn/sinh-vien_33386864/nao-chung-ta-cung-tien-/313930366864.html',
  },
  {
    id: '2',
    name: 'TRỢ GIẢNG KHI CÒN NGỒI TRÊN GIẢNG ĐƯỜNG',
    source: 'Báo Tuổi Trẻ',
    description:
      'Hiện nay những buổi học đại trà thường thu hút 100-200 SV tham gia, không chỉ SV học yếu mà có cả SV khá giỏi” - ThS Trần Tấn Phúc, giám đốc Trung tâm Hỗ trợ SV và việc làm, cho biết.',
    date: '5 tháng 6, năm 2015',
    imgSrc: require('../assets/images/LHOTTTNews.png'),
    linkTo: 'https://tuoitre.vn/tro-giang-khi-con-ngoi-tren-giang-duong-757152.htm',
  },
  {
    id: '3',
    name: 'LỚP HỌC ĐỘC ĐÁO GIỮA GIẢNG ĐƯỜNG',
    source: 'Báo Thanh Niên',
    description:
      '"Chúng ta cùng tiến" là tên một lớp học độc đáo được tổ chức định kỳ vào cuối tuần tại Trường ĐH Bách Khoa TP.HCM. Ở đó người dạy và học đều là sinh viên.',
    date: '7 tháng 7, năm 2020',
    imgSrc: require('../assets/images/LHOTTTNews.png'),
    linkTo: 'https://thanhnien.vn/lop-hoc-doc-dao-giua-giang-duong-185971999.htm',
  },
  {
    id: '4',
    name: 'ĐỘC ĐÁO LỚP HỌC CÙNG TIẾN, GIÚP BẠN HỌC TỐT HƠN',
    source: 'Truyền Hình Vĩnh Long',
    description:
      'Lớp học là hoạt động mỗi tuần của Câu lạc bộ Chúng Ta Cùng Tiến nhằm tạo cầu nối để các bạn sinh viên giúp đỡ lẫn nhau trong học tập',
    date: '6 tháng 6, năm 2020',
    imgSrc: require('../assets/images/LHOTTTNews.png'),
    linkTo: 'https://www.youtube.com/watch?v=7YPnrVjdjQg&ab_channel=THVLT%E1%BB%95ngH%E1%BB%A3p',
  },
];

const SocialMediaData = [
  {
    id: '1',
    name: 'Website',
    logo: Icon.LogoCTCTNoText,
    title: 'Website Chúng Ta Cùng Tiến',
    description: 'Kho tài liệu học tập, bài tập rèn luyện trên website chungtacungtien.com',
    linkTo: 'https://chungtacungtien.com/',
  },
  {
    id: '2',
    name: 'Facebook',
    logo: Icon.LogoFacebookBlue,
    title: 'Cộng đồng Chúng Ta Cùng Tiến',
    description:
      'Nhóm “Cộng đồng Chúng Ta Cùng Tiến” hỗ trợ hỏi đáp, giải bài tập các môn đại cương và một số môn chuyên ngành',
    linkTo: 'https://m.facebook.com/groups/chungtacungtien.group/?ref=share',
  },
  {
    id: '3',
    name: 'YouTube',
    logo: Icon.LogoYoutube,
    title: 'CLB Chúng Ta Cùng Tiến - ĐHBK',
    description:
      'Kênh YouTube CLB Chúng Ta Cùng Tiến - ĐHBK với các video bài giảng, talkshow kinh nghiệm học tập',
    linkTo: 'https://www.youtube.com/@CLBChungtacungtienHBK',
  },
];

export { CarouselData, EventsAndActivities, NewsData, SocialMediaData };
