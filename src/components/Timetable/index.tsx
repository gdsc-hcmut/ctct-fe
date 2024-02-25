import { Event } from '../../types/events';
import TimetableBar from '../TimetableBar';

interface TimetableProps {
  firstDate?: Date;
  secondDate?: Date;
  firstEventSet?: Event[];
  secondEventSet?: Event[];
}

const Timetable = ({ firstDate, secondDate, firstEventSet, secondEventSet }: TimetableProps) => {
  return (
    <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
      {firstDate && firstEventSet && <TimetableBar date={firstDate} eventSets={firstEventSet} />}
      {secondDate && secondEventSet && (
        <TimetableBar date={secondDate} eventSets={secondEventSet} />
      )}
    </div>
  );
};

export default Timetable;
