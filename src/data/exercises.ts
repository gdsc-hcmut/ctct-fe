import { QuestionType } from '../types/question';

import type { QuizStatus, Quiz } from '../types/quiz';

const quiz: Quiz = {
  _id: '5132jkhk1g23u',
  userId: 'abjlkejba',
  status: 'ONGOING' as QuizStatus,
  createdAt: Date.now() - 108000000000,
  duration: 3600000,
  startTime: Date.now() - 60000,
  questions: [
    {
      _id: 'abkejolajkb',
      subQuestions: [
        {
          _id: 'abebaeb',
          type: QuestionType.MULTIPLE_CHOICE_SINGLE_ANSWER,
          starred: false,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Aliquet nec ullamcorper sit amet. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Nibh tellus molestie nunc non blandit. In ante metus dictum at tempor. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Ut consequat semper viverra nam libero justo laoreet. Tellus cras adipiscing enim eu. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Vitae nunc sed velit dignissim sodales ut eu sem integer. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget.',
          options: [
            { key: 1, description: 'Lorem ipsum' },
            { key: 2, description: 'Lorem ipsum' },
            { key: 3, description: 'Lorem ipsum' },
            { key: 4, description: 'Lorem ipsum' },
          ],
          explanation:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          userAnswerKey: 2,
        },
        {
          _id: 'abebaeadfba',
          type: QuestionType.MULTIPLE_CHOICE_MULTIPLE_ANSWERS,
          starred: false,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Aliquet nec ullamcorper sit amet. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Nibh tellus molestie nunc non blandit. In ante metus dictum at tempor. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Ut consequat semper viverra nam libero justo laoreet. Tellus cras adipiscing enim eu. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Vitae nunc sed velit dignissim sodales ut eu sem integer. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget.',
          options: [
            { key: 1, description: 'Lorem ipsum' },
            { key: 2, description: 'Lorem ipsum' },
            { key: 3, description: 'Lorem ipsum' },
            { key: 4, description: 'Lorem ipsum' },
          ],
          explanation:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          userAnswerKeys: [1, 3],
        },
      ],
    },
  ],
  fromTemplate: {
    _id: 'abebabdabd',
    name: 'Bài tập rèn luyện 1',
    description: 'Lorem ipsum',
    subject: {
      _id: 'abebabdabdasdgab',
      name: 'Giải tích 1',
      description: 'Lorem ipsum',
      createdBy: 'abebabdabdasdga112b',
      createdAt: Date.now() - 108000000000,
    },
    chapter: {
      _id: 'abebabdabdabebabdabd',
      name: 'Đạo hàm',
      description: 'Lorem ipsum',
      subject: {
        _id: 'abebabdabdasdgab',
        name: 'Giải tích 1',
        description: 'Lorem ipsum',
        createdBy: 'abebabdabdasdga112b',
        createdAt: Date.now() - 108000000000,
      },
      createdBy: 'abebabdabdasdga112b',
      createdAt: Date.now() - 108000000000,
    },

    duration: 3600000,
    potentialQuestions: ['abebabdabdabebabdabd', 'ab', '21341234'],
    sampleSize: 40,

    createdBy: 'abadabeda',
    createdAt: Date.now() - 108000000000,
  },
};

export default quiz;
