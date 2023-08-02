import React, { ChangeEvent, useEffect, useState } from 'react';
import { SingleValue } from 'react-select';

import { Icon, Select } from '../../../components';
import { Option } from '../../../components/Select';
import { useDebounce } from '../../../hooks';
import { Page, Wrapper } from '../../../layout';
import ChapterService from '../../../service/chapter.service';
import QuestionTemplateService from '../../../service/question.service';
import SubjectService from '../../../service/subject.service';
import { Question } from '../../../types';

interface CountDown {
  hours: number;
  minutes: number;
  seconds: number;
}

type OptionWithQuestion = Option & { question: Question };

const CreateExercisePage = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');

  const [duration, setDuration] = useState<CountDown>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [sampleSize, setSampleSize] = useState('');
  const [description, setDescription] = useState('');

  const [filterSubject, setFilterSubject] = useState('');
  const [filterChapter, setFilterChapter] = useState('');
  const [potentialQuestions, setPotentialQuestions] = useState<Question[]>([]);

  const [subjectOptions, setSubjectOptions] = useState<Option[]>([]);
  const [chapterOptions, setChapterOptions] = useState<Option[]>([]);
  const [questionOptions, setQuestionOptions] = useState<Question[]>([]);
  const [filterChapterOptions, setFilterChapterOptions] = useState<Option[]>([]);

  const onInputName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);

  const onSelectSubject = (event: SingleValue<Option>) => {
    if (event !== null) {
      setSubject(event.value);
    }
  };

  const onSelectChapter = (event: SingleValue<Option>) => {
    if (event !== null) {
      setChapter(event.value);
    }
  };

  const onInputDurationHours = (event: ChangeEvent<HTMLInputElement>) =>
    setDuration({ ...duration, hours: parseInt(event.target.value) });

  const onInputDurationMinutes = (event: ChangeEvent<HTMLInputElement>) =>
    setDuration({ ...duration, minutes: parseInt(event.target.value) });

  const onInputDurationSeconds = (event: ChangeEvent<HTMLInputElement>) =>
    setDuration({ ...duration, seconds: parseInt(event.target.value) });

  const onInputSampleSize = (event: ChangeEvent<HTMLInputElement>) =>
    setSampleSize(event.target.value);

  const onInputDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(event.target.value);

  const onSelectAddQuestion = (value: SingleValue<Option>) => {
    if (value !== null) {
      const duplicate = potentialQuestions.find(
        (x) => x._id === (value as OptionWithQuestion).question._id
      );
      if (!duplicate) {
        setPotentialQuestions([...potentialQuestions, (value as OptionWithQuestion).question]);
      } else {
        console.error(`This question has already been added`);
      }
    }
  };

  const onSelectFilterSubject = (event: SingleValue<Option>) => {
    if (event !== null) {
      setFilterSubject(event.value);
    }
  };

  const onSelectFilterChapter = (event: SingleValue<Option>) => {
    if (event !== null) {
      setFilterChapter(event.value);
    }
  };

  const createExercise = (_: React.MouseEvent<HTMLButtonElement>) => {
    // TODO
  };

  const fetchQuestions = useDebounce(() => {
    QuestionTemplateService.getAll({
      subject: filterSubject === '' ? undefined : filterSubject,
      chapter: filterChapter === '' ? undefined : filterChapter,
    })
      .then((res) => {
        const { result: allQuestions } = res.data.payload;
        setQuestionOptions(allQuestions);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  useEffect(() => {
    fetchQuestions();
  }, [filterSubject, filterChapter, fetchQuestions]);

  useEffect(() => {
    SubjectService.getAll({})
      .then((res) => {
        const { result: allSubjects } = res.data.payload;
        setSubjectOptions(
          allSubjects.map((sub) => {
            return {
              value: sub._id,
              label: sub.name,
            };
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // update options for chapter when the selected subject changes
    if (subject === '') {
      setChapterOptions([]);
      setChapter('');
      return;
    }

    ChapterService.getAll({ subject: subject })
      .then((res) => {
        const { result: chapters } = res.data.payload;
        setChapterOptions(
          chapters.map((chap) => ({
            value: chap._id,
            label: chap.name,
          }))
        );
        setChapter('');
      })
      .catch((err) => {
        console.error(err);
      });
  }, [subject]);

  useEffect(() => {
    // update options for filter chapter when filter subject changes
    if (filterSubject === '') {
      setFilterChapterOptions([]);
      setFilterChapter('');
      return;
    }

    ChapterService.getAll({ subject: filterSubject })
      .then((res) => {
        const { result: allFilterChapters } = res.data.payload;
        setFilterChapterOptions(
          allFilterChapters.map((chap) => ({
            value: chap._id,
            label: chap.name,
          }))
        );
        setFilterChapter('');
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filterSubject]);

  return (
    <Page>
      <Wrapper className='flex flex-1 flex-col'>
        <div className='w-full bg-[#4285F4]/90 py-4'>
          <p className='text-center text-sm font-bold text-white md:text-2xl 3xl:text-4xl'>
            Tạo bài tập rèn luyện
          </p>
        </div>
        <div className='w-full p-4'>
          <div className='h-full w-full rounded-lg bg-white p-4 lg:p-6 3xl:p-8'>
            <main className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-1'>
                <label
                  className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'
                  htmlFor='question_name'
                >
                  Tên
                </label>
                <input
                  id='question_name'
                  className='flex w-full flex-1 rounded-lg border border-[#D9D9D9] p-1 text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                  value={name}
                  onChange={onInputName}
                />
              </div>
              <div className='flex flex-row gap-x-8'>
                <div className='flex w-full flex-col gap-y-1'>
                  <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>Môn</p>
                  <Select
                    options={subjectOptions}
                    placeholder='Chọn môn'
                    value={subjectOptions.find((x) => x.value === subject) ?? null}
                    onChange={onSelectSubject}
                  />
                </div>
                <div className='flex w-full flex-col gap-y-1'>
                  <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>Chương</p>
                  <Select
                    options={chapterOptions}
                    placeholder='Chọn chương'
                    className='w-80'
                    value={chapterOptions.find((x) => x.value === chapter) ?? null}
                    onChange={onSelectChapter}
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>
                    Thời gian làm bài (hh:mm:ss)
                  </p>
                  <div className='flex justify-around'>
                    <input
                      className='flex w-[30%] rounded-lg border border-[#D9D9D9] p-1 text-center text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      value={duration.hours}
                      type='number'
                      onChange={onInputDurationHours}
                    />
                    <input
                      className='flex w-[30%] rounded-lg border border-[#D9D9D9] p-1 text-center text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      value={duration.minutes}
                      type='number'
                      onChange={onInputDurationMinutes}
                    />
                    <input
                      className='flex w-[30%] rounded-lg border border-[#D9D9D9] p-1 text-center text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                      value={duration.seconds}
                      type='number'
                      onChange={onInputDurationSeconds}
                    />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <p className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'>Số câu hỏi</p>
                  <input
                    className='flex w-24 flex-1 rounded-lg border border-[#D9D9D9] p-1 text-center text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                    value={sampleSize}
                    onChange={onInputSampleSize}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-y-1'>
                <label
                  className='flex flex-[2.5] text-base lg:text-lg 3xl:text-xl'
                  htmlFor='description'
                >
                  Chú thích
                </label>
                <textarea
                  id='description'
                  rows={10}
                  className='flex w-full flex-1 rounded-lg border border-[#D9D9D9] p-1 text-xs font-medium lg:p-3 lg:text-sm 3xl:p-5 3xl:text-base'
                  value={description}
                  onChange={onInputDescription}
                />
              </div>
              <div className='flex flex-col gap-y-8'>
                <div className='flex flex-row items-center gap-x-8'>
                  <label
                    className='flex text-base lg:text-lg 3xl:text-xl'
                    htmlFor='search_question'
                  >
                    Các câu hỏi có thể ra
                  </label>
                  <div className='flex flex-[2] flex-row items-center gap-x-8'>
                    <Select
                      options={questionOptions.map((question) => {
                        return {
                          value: question._id,
                          label: question.name,
                          question: question,
                        } as OptionWithQuestion;
                      })}
                      placeholder='Chọn câu hỏi'
                      value={null}
                      onChange={onSelectAddQuestion}
                    />
                    <Select
                      options={subjectOptions}
                      placeholder='Chọn môn'
                      value={subjectOptions.find((x) => x.value === filterSubject) ?? null}
                      onChange={onSelectFilterSubject}
                    />
                    <Select
                      options={filterChapterOptions}
                      placeholder='Chọn chương'
                      value={filterChapterOptions.find((x) => x.value === filterChapter) ?? null}
                      onChange={onSelectFilterChapter}
                    />
                    <button
                      className={`flex flex-[0.5] ${
                        filterSubject !== '' || filterChapter !== '' ? 'opacity-1' : 'opacity-0'
                      }`}
                      disabled={filterSubject === '' && filterChapter === ''}
                      onClick={() => {
                        setFilterSubject('');
                        setFilterChapter('');
                      }}
                    >
                      <p className='text-xs lg:text-sm 3xl:text-base'>Xoá bộ lọc</p>
                    </button>
                  </div>
                </div>
                <div>
                  <div className='mb-5 flex flex-1 flex-shrink-0 flex-row gap-x-4 px-6 lg:px-8 3xl:px-10'>
                    <p className='flex flex-[2.5] text-base font-semibold text-[#4285f4] lg:text-lg 3xl:text-xl'>
                      Tên
                    </p>
                    <p className='flex flex-[2] text-base font-semibold text-[#4285F4] lg:text-lg 3xl:text-xl'>
                      Môn
                    </p>
                    <p className='flex flex-[1.2] text-base font-semibold text-[#4285F4] lg:text-lg 3xl:text-xl'>
                      Chương
                    </p>
                    <p className='flex flex-[1.5] text-base font-semibold text-[#4285F4] lg:text-lg 3xl:text-xl'>
                      Thời gian tạo
                    </p>
                    <div className='flex flex-1' />
                  </div>
                  {potentialQuestions.map((question, index) => (
                    <div
                      key={question._id}
                      className='flex flex-1 flex-shrink-0 flex-row items-center gap-x-4 border-b border-b-[#CCC]/60
                      px-6 py-2 lg:py-4 lg:px-8 3xl:py-6 3xl:px-10'
                    >
                      <p className='flex flex-[2.5] text-xs font-medium lg:text-sm 3xl:text-base'>
                        {question.name}
                      </p>
                      <p className='flex flex-[2] text-xs font-medium lg:text-sm 3xl:text-base'>
                        {question?.subject?.name}
                      </p>
                      <p className='flex flex-[1.2] text-xs font-medium lg:text-sm 3xl:text-base'>
                        {question?.chapter?.name}
                      </p>
                      <p className='flex flex-[1.5] text-xs font-medium lg:text-sm 3xl:text-base'>
                        {new Date(question.createdAt).toLocaleString()}
                      </p>
                      <div className='flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-4'>
                        <button
                          className='flex items-center justify-center rounded-full bg-[#DB4437]/90 p-2'
                          onClick={() => {
                            const newPotentialQuestions = JSON.parse(
                              JSON.stringify(potentialQuestions)
                            ) as Question[];
                            newPotentialQuestions.splice(index, 1);
                            setPotentialQuestions(newPotentialQuestions);
                          }}
                        >
                          <Icon.Delete
                            fill='white'
                            className='h-4 w-4 lg:h-5 lg:w-5 3xl:h-6 3xl:w-6'
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='my-5 flex flex-row-reverse gap-x-8'>
                <button className='h-9 w-36 rounded-lg bg-[#4285F4] px-4' onClick={createExercise}>
                  <p className='text-white'>Tạo</p>
                </button>
              </div>
            </main>
          </div>
        </div>
      </Wrapper>
    </Page>
  );
};

export default CreateExercisePage;
