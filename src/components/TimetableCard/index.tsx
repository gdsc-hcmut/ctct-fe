import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { useState, memo, useMemo, ComponentPropsWithoutRef, MouseEvent, useEffect } from 'react';

import useBoundStore from '../../store';
import { Subject } from '../../types';
import Icon from '../Icon';
import InfoModal from '../Modal/InfoModal';

type EventUser = {
  userId: string;
  checkedInAt: Date;
};
interface TimetableCardProps {
  eventId: string;
  subject?: Subject;
  startedAt: Date;
  endedAt: Date;
  location: string;
  registeredUsers: EventUser[];
  disabledRegisterButton?: boolean;
  register: UseMutateAsyncFunction<void, unknown, string, unknown>;
}

enum EventStatus {
  OPEN = 'Mở đăng ký',
  REGISTERED = 'Đã đăng ký',
  ONGOING = 'Đang diễn ra',
  ENDED = 'Đã kết thúc',
}

interface EventButtonProps extends ComponentPropsWithoutRef<'button'> {
  eventStatus: EventStatus;
  isRegistered: boolean;
}

const EventButton = memo<EventButtonProps>(function Button({
  eventStatus,
  isRegistered,
  disabled,
  ...props
}) {
  switch (eventStatus) {
    case EventStatus.OPEN:
      return (
        <button
          {...props}
          disabled={disabled}
          className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] cursor-pointer text-[#696984] underline'
        >
          Đăng ký
        </button>
      );
    case EventStatus.REGISTERED:
      return (
        <button
          {...props}
          disabled={isRegistered}
          className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] font-semibold text-[#0F9D58]'
        >
          Đã đăng ký
        </button>
      );
    case EventStatus.ONGOING:
      return (
        <button
          {...props}
          disabled={true}
          className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] text-[#696984]'
        >
          Đang diễn ra
        </button>
      );
    default:
      return (
        <button
          {...props}
          disabled={true}
          className='absolute bottom-[1.25rem] right-[1.25rem] z-[1] text-[#696984]'
        >
          Đã kết thúc
        </button>
      );
  }
});

const TimetableCard = ({
  eventId,
  subject,
  startedAt,
  endedAt,
  location,
  registeredUsers,
  register,
}: TimetableCardProps) => {
  const user = useBoundStore.use.user();
  const isRegistered = useMemo(
    () => !!registeredUsers.find((registeredUser) => registeredUser.userId === user._id), // bug here
    [registeredUsers, user._id]
  );

  const startTime = startedAt.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const endTime = endedAt.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const [eventStatus, setEventStatus] = useState<EventStatus>(EventStatus.OPEN);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  useEffect(() => {
    if (Date.now() > endedAt.getTime()) {
      setEventStatus(EventStatus.ENDED);
    } else if (Date.now() > startedAt.getTime() && Date.now() < endedAt.getTime()) {
      if (isRegistered) setEventStatus(EventStatus.REGISTERED);
      else setEventStatus(EventStatus.ONGOING);
    } else {
      if (isRegistered) setEventStatus(EventStatus.REGISTERED);
      else setEventStatus(EventStatus.OPEN);
    }
  }, [startedAt, endedAt, isRegistered]);

  const onClickRegister = () => {
    switch (eventStatus) {
      case EventStatus.OPEN:
        return (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setInfoModalOpen(true);
        };
      default:
        return () => {};
    }
  };

  const onClickInfoModal = async () => {
    await register(eventId);
  };

  return (
    <>
      <div className='relative flex min-h-[15rem] w-full flex-col items-start space-y-[0.25rem] rounded-[1.25rem] bg-white p-[1.25rem] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] sm:min-h-[10rem] md:min-h-[85%] md:w-[100%] lg:min-h-[90%] xl:min-h-[85%]'>
        <p className='cursor-pointer text-[16px] font-bold text-[#2F327D] lg:text-[24px]'>
          {subject?.name}
        </p>
        <div className='flex flex-row items-start justify-start md:items-center xl:space-x-[0.5rem]'>
          <Icon.LocationTransparent className='hidden max-h-[1.5rem] xl:block' />
          <p className='font-semibold text-[#696984]'>{location}</p>
        </div>
        <div className='flex flex-row items-start justify-start md:items-center xl:space-x-[0.5rem]'>
          <Icon.AlarmClock className='hidden max-h-[1.5rem] xl:block' />
          <p className='text-[#696984]'>
            {startTime} - {endTime}
          </p>
        </div>
        <EventButton
          eventStatus={eventStatus}
          isRegistered={isRegistered}
          onClick={onClickRegister()}
        />
      </div>
      <InfoModal isOpen={infoModalOpen} handleOpen={setInfoModalOpen} register={onClickInfoModal} />
    </>
  );
};

export default TimetableCard;
