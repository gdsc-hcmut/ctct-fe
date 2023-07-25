import { ROLES } from './auth';

export type Subject = {
  _id: string;
  name: string;
  writeAccess: ROLES[];
  createdBy: string;
  createdAt: number;
  lastUpdatedAt: number;
};

export type ExamArchive = {
  _id: string;
  name: string;
  writeAccess: ROLES[];
  readAccess: ROLES[];
  resource: string;
  createdBy: string;
  createdAt: number;
  lastUpdatedAt: number;
  subject: string;
};

export type Material = {
  _id: string;
  name: string;
  writeAccess: ROLES[];
  readAccess: ROLES[];
  resource: string;
  createdBy: string;
  createdAt: number;
  lastUpdatedAt: number;
  subject: string;
};