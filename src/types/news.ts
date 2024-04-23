import { User } from './';

export type News = {
  _id: string;

  title: string;
  content: string;
  thumbnail: string;
  author: string;

  createdAt: number;
  createdBy: User;
  lastUpdatedAt: number;
  deletedAt?: number;
};
