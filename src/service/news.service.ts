import { API_URL } from '../config';
import { News } from '../types';
import { axios } from '../utils/custom-axios';

import type { Response } from '../types/response';

type CreateNewsArgument = {
  title: string;
  content: string;
  thumbnailUrl: string;
  author: string;
};

type EditNewsArgument = {
  title?: string;
  content?: string;
  thumbnailUrl?: string;
  author?: string;
};

type GetAllNewsPaginatedArgument = {
  title?: string;
  author?: string;
  pageNumber?: number;
  pageSize?: number;
};

type GetAllNewsPaginatedReturnType = {
  total: number;
  pageCount: number;
  pageSize: number;
  pageNumber: number;
  result: News[];
};

const create = async (data: CreateNewsArgument) => {
  return axios.post<Response<News>>(`${API_URL}admin/news`, data);
};

const editById = async (id: string, data: EditNewsArgument) => {
  return axios.patch<Response<News>>(`${API_URL}admin/news/${id}`, data);
};

const getById = async (id: string, admin = false) => {
  return axios.get<Response<News>>(`${API_URL}${admin ? 'admin/' : ''}news/${id}`);
};

const getAllPaginated = async (query: GetAllNewsPaginatedArgument, admin = false) => {
  const queryString = `${API_URL}${admin ? 'admin/' : ''}news?pagination=true\
${query.title ? `&title=${encodeURIComponent(query.title)}` : ''}\
${query.author ? `&author=${encodeURIComponent(query.author)}` : ''}\
${query.pageNumber !== undefined ? `&pageNumber=${query.pageNumber}` : ''}\
${query.pageSize !== undefined ? `&pageSize=${query.pageSize}` : ''}`;

  return axios.get<Response<GetAllNewsPaginatedReturnType>>(queryString);
};

const deleteById = async (id: string) => {
  return axios.delete<Response<null>>(`${API_URL}admin/news/${id}`);
};

const NewsService = {
  create,
  editById,
  getById,
  getAllPaginated,
  deleteById,
};

export default NewsService;
