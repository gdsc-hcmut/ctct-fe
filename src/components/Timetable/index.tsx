import { UseMutateAsyncFunction } from '@tanstack/react-query';

import { useWindowDimensions } from '../../hooks';
import { Event } from '../../types/events';
import TimetableBar from '../TimetableBar';

interface TimetableProps {
  dates: number[];
  eventSets: Event[][];
  register: UseMutateAsyncFunction<void, unknown, string, unknown>;
}

const Timetable = ({ dates, eventSets, register }: TimetableProps) => {
  const { width } = useWindowDimensions();
  return (
    <div className='flex w-full flex-col items-center justify-between space-y-[2.5rem]'>
      {dates.map((date, index) => (
        <>
          {eventSets[index].length > 0 && width > 768 && (
            <>
              <TimetableBar
                date={new Date(date)}
                eventSets={eventSets[index].slice(0, 4)}
                register={register}
              />
              {eventSets[index].length > 4 && (
                <TimetableBar
                  date={new Date(date)}
                  eventSets={eventSets[index].slice(4)}
                  register={register}
                />
              )}
              {eventSets[index].length > 8 && (
                <TimetableBar
                  date={new Date(date)}
                  eventSets={eventSets[index].slice(8)}
                  register={register}
                />
              )}
            </>
          )}
          {eventSets[index].length > 0 && width <= 768 && (
            <>
              <TimetableBar
                date={new Date(date)}
                eventSets={eventSets[index]}
                register={register}
              />
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Timetable;
