import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Event } from '../../types/events';
import TimetableBar from '../TimetableBar';

interface TimetableProps {
  firstDate?: Date;
  secondDate?: Date;
  firstEventSet?: Event[];
  secondEventSet?: Event[];
}

const Timetable = ({ firstDate, secondDate, firstEventSet, secondEventSet }: TimetableProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
      {width >= 768 ? (
        <>
          {firstDate && firstEventSet && (
            <TimetableBar date={firstDate} eventSets={firstEventSet.slice(0, 4)} />
          )}
          {firstDate && firstEventSet && firstEventSet.length > 4 && (
            <TimetableBar date={firstDate} eventSets={firstEventSet.slice(4)} />
          )}
          {secondDate && secondEventSet && (
            <TimetableBar date={secondDate} eventSets={secondEventSet.slice(0, 4)} />
          )}
          {secondDate && secondEventSet && secondEventSet.length > 4 && (
            <TimetableBar date={secondDate} eventSets={secondEventSet.slice(4)} />
          )}
        </>
      ) : (
        <>
          {firstDate && firstEventSet && (
            <TimetableBar date={firstDate} eventSets={firstEventSet} />
          )}
          {secondDate && secondEventSet && (
            <TimetableBar date={secondDate} eventSets={secondEventSet} />
          )}
        </>
      )}
    </div>
  );
};

export default Timetable;
