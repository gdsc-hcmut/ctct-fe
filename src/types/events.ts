export enum EventType {
  LHOT = 'LHOT',
  GSAX = 'GSAX',
  OTHER = 'OTHER',
}

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
