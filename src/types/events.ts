import { Option } from '../components/Select';

export enum EventType {
  LHOT = 'LHOT',
  GSAX = 'GSAX',
  OTHER = 'OTHER',
}

export const EVENT_TYPE_OPTIONS: Option[] = [
  { value: EventType.LHOT, label: 'LHOT' },
  { value: EventType.GSAX, label: 'GSAX' },
  { value: EventType.OTHER, label: 'Khác' },
];

export type Event = {
  _id: string;
  name: string;
  type: EventType;
  venue: string;
  isHidden: boolean;
  startedAt: number;
  endedAt: number;
  description: string;
  createdBy: string;
  createdAt: number;
  lastUpdatedAt?: number;
};
