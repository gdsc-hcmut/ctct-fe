import { lazy } from 'react';

const AboutUsPage = lazy(() => import('../pages/AboutUs'));
const HomePage = lazy(() => import('../pages/Home'));
const MaterialPage = lazy(() => import('../pages/Library/MaterialPage'));
const MaterialDetail = lazy(() => import('../pages/Library/MaterialDetail'));
const ExamArchivePage = lazy(() => import('../pages/Library/ExamArchivePage'));
const ExamArchiveDetail = lazy(() => import('../pages/Library/ExamArchiveDetail'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

export interface Route {
  title: string;
  path: string;
  component: React.FC;
  isProtected: boolean;
}

const routes = [
  { title: 'Chúng ta cùng tiến', path: '/', component: HomePage, isProtected: false },
  {
    title: 'Đề thi các năm',
    path: '/library/exam-archive/:subjectId?',
    component: ExamArchivePage,
    isProtected: true,
  },
  {
    title: 'Chi tiết đề thi',
    path: '/library/exam-archive/:subjectId/pdf/:pdfId?',
    component: ExamArchiveDetail,
    isProtected: true,
  },
  {
    title: 'Đề thi các năm',
    path: '/library/material/:subjectId?',
    component: MaterialPage,
    isProtected: true,
  },
  {
    title: 'Chi tiết đề thi',
    path: '/library/material/:subjectId/pdf/:pdfId?',
    component: MaterialDetail,
    isProtected: true,
  },
  {
    title: 'Bài luyện rèn luyện',
    path: '/room/exercises',
    component: NotFoundPage,
    isProtected: true,
  },
  { title: 'Đề thi', path: '/room/tests', component: NotFoundPage, isProtected: true },
  { title: 'Về chúng tôi', path: '/about-us', component: AboutUsPage, isProtected: false },
  { title: 'Hoạt động', path: '/about-us/activities', component: NotFoundPage, isProtected: false },
  {
    title: 'Đơn vị hợp tác',
    path: '/about-us/partners',
    component: NotFoundPage,
    isProtected: false,
  },
  { title: 'Hỗ trợ', path: '/help', component: NotFoundPage, isProtected: false },
  { title: 'Thông tin của tôi', path: '/profile', component: NotFoundPage, isProtected: true },
  { title: 'Đăng nhập', path: '/login', component: HomePage, isProtected: true },
  { title: 'Không tìm thấy', path: '*', component: NotFoundPage, isProtected: false },
];

export default routes;
