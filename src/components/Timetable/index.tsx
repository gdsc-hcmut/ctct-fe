import { UseMutateAsyncFunction } from '@tanstack/react-query';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Event } from '../../types/events';
import TimetableBar from '../TimetableBar';

interface TimetableProps {
  firstDate?: Date;
  secondDate?: Date;
  firstEventSet?: Event[];
  secondEventSet?: Event[];
  register: UseMutateAsyncFunction<void, unknown, string, unknown>;
}

const Timetable = ({
  firstDate,
  secondDate,
  firstEventSet,
  secondEventSet,
  register,
}: TimetableProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
      {width >= 768 ? (
        <>
          {firstDate && firstEventSet && (
            <TimetableBar
              date={firstDate}
              eventSets={firstEventSet.slice(0, 4)}
              register={register}
            />
          )}
          {firstDate && firstEventSet && firstEventSet.length > 4 && (
            <TimetableBar date={firstDate} eventSets={firstEventSet.slice(4)} register={register} />
          )}
          {secondDate && secondEventSet && (
            <TimetableBar
              date={secondDate}
              eventSets={secondEventSet.slice(0, 4)}
              register={register}
            />
          )}
          {secondDate && secondEventSet && secondEventSet.length > 4 && (
            <TimetableBar
              date={secondDate}
              eventSets={secondEventSet.slice(4)}
              register={register}
            />
          )}
        </>
      ) : (
        <>
          {firstDate && firstEventSet && (
            <TimetableBar date={firstDate} eventSets={firstEventSet} register={register} />
          )}
          {secondDate && secondEventSet && (
            <TimetableBar date={secondDate} eventSets={secondEventSet} register={register} />
          )}
        </>
      )}
    </div>
  );
};

export default Timetable;
