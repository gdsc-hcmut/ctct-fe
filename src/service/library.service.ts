import { API_URL } from '../config';
import { axios } from '../utils/custom-axios';

// Subject
const createSubject = () => axios.post(`${API_URL}subject/`);

const editSubjectById = (subjectId: string) => axios.post(`${API_URL}subject/${subjectId}`);

const getAllSubjects = () => axios.get(`${API_URL}subject/all`);

const deleteSubjectById = () => axios.delete(`${API_URL}subject/delete/644164d57c8dfad4c1726c32`);

// Material
const uploadMaterial = () => axios.post(`${API_URL}material/create`);

const editMaterialById = (examId: string) => axios.patch(`${API_URL}material/edit/${examId}`);

const deleteMaterialById = (examId: string) => axios.delete(`${API_URL}material/edit/${examId}`);

const downloadMaterialById = (examId: string) => axios.get(`${API_URL}material/download/${examId}`);

const getMaterialById = (examId: string) => axios.get(`${API_URL}material/get/${examId}`);

const getAllMaterialBySubjectId = (subjectId: string) =>
  axios.get(`${API_URL}material/getbysubject/${subjectId}`);

// Previous Exam
const uploadPreviousExam = () => axios.post(`${API_URL}previous-exams/create`);

const editPreviousExamById = (examId: string) =>
  axios.patch(`${API_URL}previous-exams/edit/${examId}`);

const deletePreviousExamById = (examId: string) =>
  axios.delete(`${API_URL}previous-exams/edit/${examId}`);

const downloadPreviousExamById = (examId: string) =>
  axios.get(`${API_URL}previous-exams/download/${examId}`);

const getPreviousExamById = (examId: string) => axios.get(`${API_URL}previous-exams/get/${examId}`);

const getAllExamArchivesBySubjectId = (subjectId: string) =>
  axios.get(`${API_URL}previous-exams/getbysubject/${subjectId}`);

const LibraryService = {
  createSubject,
  editSubjectById,
  getAllSubjects,
  deleteSubjectById,
  uploadMaterial,
  getAllMaterialBySubjectId,
  editMaterialById,
  deleteMaterialById,
  downloadMaterialById,
  getMaterialById,
  uploadPreviousExam,
  getAllExamArchivesBySubjectId,
  editPreviousExamById,
  deletePreviousExamById,
  downloadPreviousExamById,
  getPreviousExamById,
};

export default LibraryService;