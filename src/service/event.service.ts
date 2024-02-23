import { API_URL } from '../config';
import { Event } from '../types/events';
import { axios } from '../utils/custom-axios';

import type { Response } from '../types/response';

type CreateEventArgument = {
  name: string;
  description: string;
  eventType: string;
  venue: string;
  hasRegistrationTime: boolean;
  registrationStartedAt?: number;
  registrationEndedAt?: number;
  startedAt: number;
  endedAt: number;
  lhotMetadata?: {
    subject: string;
  };
};

type EditEventArgument = {
  name?: string;
  description?: string;
  eventType?: string;
  venue?: string;
  hasRegistrationTime?: boolean;
  registrationStartedAt?: number;
  registrationEndedAt?: number;
  startedAt?: number;
  endedAt?: number;
  lhotMetadata?: {
    subject?: string;
  };
};

type GetAllEventPaginatedArgument = {
  name?: string;
  eventType?: string;
  pageNumber?: number;
  pageSize?: number;
};

type GetAllEventPaginatedReturnType = {
  total: number;
  pageCount: number;
  pageSize: number;
  pageNumber: number;
  result: Event[];
};

const create = (data: CreateEventArgument) => {
  console.log(data);
  return axios.post<Response<Event>>(`${API_URL}admin/event`, data);
};

const checkInByQRCode = (id: string, qrCode: string) => {
  return axios.post<Response<null>>(`${API_URL}admin/event/${id}/checkin`, { qrCode });
};

const checkInByEmail = (id: string, email: string) => {
  return axios.post<Response<null>>(`${API_URL}admin/event/${id}/checkin`, { email });
};

const editById = (id: string, data: EditEventArgument) => {
  return axios.patch<Response<Event>>(`${API_URL}admin/event/${id}`, data);
};

const getById = (id: string, admin = false) => {
  return axios.get<Response<Event>>(`${API_URL}${admin ? 'admin/' : ''}event/${id}`);
};

const getAllPaginated = (query: GetAllEventPaginatedArgument, admin = false) => {
  const queryString = `${API_URL}${admin ? 'admin/' : ''}event?pagination=true\
  ${query.name ? `&name=${query.name}` : ''}\
  ${query.eventType ? `&eventType=${query.eventType}` : ''}\
  ${query.pageNumber !== undefined ? `&pageNumber=${query.pageNumber}` : ''}\
  ${query.pageSize !== undefined ? `&pageSize=${query.pageSize}` : ''}`;

  return axios.get<Response<GetAllEventPaginatedReturnType>>(queryString);
};

const deleteById = (id: string) => {
  return axios.delete<Response<null>>(`${API_URL}admin/event/${id}`);
};

const EventService = {
  create,
  checkInByQRCode,
  checkInByEmail,
  editById,
  getById,
  getAllPaginated,
  deleteById,
};

export default EventService;
