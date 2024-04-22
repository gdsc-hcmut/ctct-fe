import { StateCreator } from 'zustand';

export interface TAdminFilterSlice {
  filterName: string;
  filterSubject: string;
  filterChapter: string;
  filterSemster: string;
  filterEventType: string;
  page: number;
  pathState:
    | 'subject'
    | 'chapter'
    | 'question'
    | 'material'
    | 'exam'
    | 'exercise'
    | 'mockTest'
    | 'event'
    | 'news'
    | null;
  setFilterName: (option: string) => void;
  setFilterSubject: (option: string) => void;
  setFilterChapter: (option: string) => void;
  setFilterSemester: (option: string) => void;
  setFilterEventType: (option: string) => void;
  setPage: (option: number) => void;
  setPathState: (
    path:
      | 'subject'
      | 'chapter'
      | 'question'
      | 'material'
      | 'exam'
      | 'exercise'
      | 'mockTest'
      | 'event'
      | 'news'
      | null
  ) => void;
}

export const AdminFilterSlice: StateCreator<
  TAdminFilterSlice,
  [['zustand/devtools', never]],
  [],
  TAdminFilterSlice
> = (set) => ({
  filterName: '',
  filterSubject: '',
  filterChapter: '',
  filterSemster: '',
  filterEventType: '',
  page: 1,
  pathState: null,
  setFilterName: (option) => set(() => ({ filterName: option })),
  setFilterSubject: (option) => set(() => ({ filterSubject: option })),
  setFilterChapter: (option) => set(() => ({ filterChapter: option })),
  setFilterSemester: (option) => set(() => ({ filterSemster: option })),
  setFilterEventType: (option) => set(() => ({ filterEventType: option })),
  setPage: (option) => set(() => ({ page: option })),
  setPathState: (path) => set(() => ({ pathState: path })),
});
