import TimetableBar from '../TimetableBar';

const Timetable = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
      <TimetableBar date={new Date()} />
      <TimetableBar date={new Date()} />
    </div>
  );
};

export default Timetable;
