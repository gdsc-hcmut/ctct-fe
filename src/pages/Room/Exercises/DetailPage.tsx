import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as NoData } from '../../../assets/svgs/NoData.svg';
import { Icon, QuestionSlide } from '../../../components';
import subjects from '../../../data/exercises';
import { Page } from '../../../layout';
import Wrapper from '../../../layout/Wrapper';
import RoomAside from '../RoomAside';

const data = [
  {
    questionId: '1',
    questionNumber: 1,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '2',
    questionNumber: 2,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '3',
    questionNumber: 3,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '4',
    questionNumber: 4,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '5',
    questionNumber: 5,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '6',
    questionNumber: 6,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '7',
    questionNumber: 7,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '8',
    questionNumber: 8,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '9',
    questionNumber: 9,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '10',
    questionNumber: 10,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '11',
    questionNumber: 11,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '12',
    questionNumber: 12,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '13',
    questionNumber: 13,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '14',
    questionNumber: 14,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '15',
    questionNumber: 15,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
  {
    questionId: '16',
    questionNumber: 16,
    prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.',
    answers: ['A', 'B', 'C', 'D'],
  },
];

// const PageSkeleton = () => (
//   <div className='relative z-10 max-h-[266px] rounded-[20px] bg-white px-4 py-3 md:p-5 xl:p-6 2xl:p-7'>
//     <div className='absolute right-4 top-3 flex space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-5'></div>
//     <div className='space-y-2'>
//       <h2 className='text-base font-semibold md:text-xl lg:text-2xl'>
//         {<Skeleton baseColor='#9DCCFF' width={100} />}
//       </h2>
//     </div>
//     <div className='mt-4 bg-[#9DCCFF] bg-opacity-20 p-2 md:mt-5 md:p-3 xl:mt-6 xl:p-4 2xl:mt-7 2xl:p-5'>
//       <p className='max-h-[75px] overflow-hidden text-ellipsis text-sm text-[#696984] md:text-base'>
//         {<Skeleton count={3} baseColor='#9DCCFF' />}
//       </p>
//     </div>
//   </div>
// );

const DetailPage: React.FC = () => {
  const params = useParams();

  const subject = params ? subjects[Number(params.subjectId)] : null;
  const chapter = params ? Number(params.chapterId) : null;

  // const [materials, setMaterials] = useState<Material[] | null>(null);

  // useLayoutEffect(() => {
  //   if (params?.subjectId && params?.subjectId !== '') {
  //     setMaterials(null);
  //     LibraryService.getAllMaterialBySubjectId(params?.subjectId)
  //       .then((res) => {
  //         const { data } = res;
  //         const { payload } = data;

  //         setTimeout(() => setMaterials(payload), 300);
  //       })
  //       .catch((err) => {
  //         console.log('Error in fetching all exams achives by subject id', err);
  //         setTimeout(() => setMaterials([]), 300);
  //       });
  //   }
  // }, [params]);

  return (
    <Page title={`Tài liệu ${subject?.title}`}>
      <RoomAside
        title='Phòng thi'
        subTitle='Bài tập rèn luyện'
        description='Lorem ipsum dolor sit amet, consectetur adi'
        baseRoute='/room/exercises'
      />

      <Wrapper className='flex max-w-full flex-1 flex-col' fullWidth>
        {/* Banner */}
        <div className='hidden w-full bg-[#4285F4] px-5 py-5 text-white md:flex md:h-[88px] md:flex-col md:justify-between lg:h-[108px] lg:px-9 lg:py-6 xl:h-[132px] xl:px-10 xl:py-7 2xl:h-[164px] 2xl:px-11 2xl:py-8'>
          <h1 className='text-xl font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[44px]'>
            Bài tập rèn luyện - {subject?.title || <Skeleton baseColor='#9DCCFF' />}
          </h1>
          <p className='text-sm xl:text-base 2xl:text-lg'>
            Ôn tập và rèn luyện với các dạng bài tập
          </p>
        </div>

        <div className='mb-6 max-w-full flex-1 space-y-5 px-5 pt-5 md:space-y-6 md:pt-0 lg:px-9 lg:pt-8 xl:space-y-7 xl:px-10 xl:pt-10 2xl:space-y-8 2xl:px-11 2xl:pt-11'>
          <Link
            to={`/room/exercises/${params.subjectId}`}
            className='flex items-center space-x-2 hover:underline md:hidden'
          >
            <Icon.ChevronLeft className='max-w-2 min-w-2 min-h-3 max-h-3 fill-black' />
            <p className='w-[100px]'>Quay lại</p>
          </Link>

          {chapter !== null && subject?.chapters[chapter] ? (
            <div className='w-full'>
              <div className='flex flex-row gap-x-4'>
                <div className='flex flex-1'>
                  {subject.chapters[chapter - 1] ? (
                    <Link
                      to={`/room/exercises/${params.subjectId}/chapter/${chapter - 1}`}
                      className='flex w-full items-center justify-start space-x-2 hover:underline'
                    >
                      <Icon.ChevronLeft className='h-auto min-w-[8px] max-w-[10px] fill-black' />
                      <p>Chương {`${chapter}`}</p>
                    </Link>
                  ) : null}
                </div>
                <h3 className='flex-[5] text-center text-3xl font-semibold'>{`${subject?.chapters[chapter].title}`}</h3>
                <div className='flex flex-1'>
                  {subject.chapters[chapter + 1] ? (
                    <Link
                      to={`/room/exercises/${params.subjectId}/chapter/${chapter + 1}`}
                      className='flex w-full items-center justify-end space-x-2 hover:underline'
                    >
                      <p>Chương {`${chapter + 2}`}</p>
                      <Icon.ChevronRight className='h-auto min-w-[8px] max-w-[10px] fill-black' />
                    </Link>
                  ) : null}
                </div>
              </div>
              <QuestionSlide questions={data} />
            </div>
          ) : (
            <div className='z-10 rounded-[20px] bg-white px-4 py-3 md:p-5 xl:p-6 2xl:p-7'>
              <NoData width={200} className='mx-auto w-[200px] p-7 xl:w-[300px]' />
              <p className='w-full text-center'>Không tìm thấy tài liệu</p>
            </div>
          )}
        </div>
      </Wrapper>
    </Page>
  );
};

export default DetailPage;
