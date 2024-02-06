import { useWindowDimensions } from '../../hooks';
import TimetableBar from '../TimetableBar';

const Timetable = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 768 ? (
        <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
          <TimetableBar />
          <TimetableBar />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Timetable;
