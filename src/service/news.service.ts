// import { API_URL } from '../config';
import { News } from '../types/news';
// import { axios } from '../utils/custom-axios';

// import type { Response } from '../types/response';

type CreateNewsArgument = {
  title: string;
  content: string;
  thumbnail: string;
  author: string;
};

type EditNewsArgument = {
  title?: string;
  content?: string;
  thumbnail?: string;
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
  console.log(data);
  return null;
};

const editById = async (id: string, data: EditNewsArgument) => {
  console.log(id, data);
  return null;
};

const getById = async (id: string) => {
  console.log(id);
  return null;
};

const getAllPaginated = async (params: GetAllNewsPaginatedArgument) => {
  console.log(params);
  return null;
};

const deleteById = async (id: string) => {
  console.log(id);
  return null;
};

const NewsService = {
  create,
  editById,
  getById,
  getAllPaginated,
  deleteById,
};

export default NewsService;
