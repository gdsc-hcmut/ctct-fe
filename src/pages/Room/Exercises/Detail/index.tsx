import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useWindowDimensions } from '../../../../hooks';
import { Page } from '../../../../layout';
import QuizSessionService from '../../../../service/quizSession.service';
import { socket } from '../../../../socket';
import { QuizSession, SocketEvent } from '../../../../types';

import DesktopOngoing from './DesktopOngoing';
import MobileOngoing from './MobileOngoing';

const Detail: React.FC<{ quiz: QuizSession }> = ({ quiz }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();
  const queryClient = useQueryClient();

  const submit = useMutation({
    mutationFn: async () => {
      await QuizSessionService.submit(params.sessionId as string);
    },
    onError: () => {
      toast.error('Đã có lỗi trong lúc nộp bài!');
    },
  });

  useEffect(() => {
    const onEndQuizSession = async () => {
      toast.success('Đã nộp bài!');
      await queryClient.invalidateQueries(['quiz', params.quizId, params.sessionId]);
      navigate(
        `/room/exercises/${params.subjectId}/quiz/${params.quizId}/review/session/${params.sessionId}`,
        { replace: true }
      );
    };

    socket.on(SocketEvent.END_QUIZ_SESSION, onEndQuizSession);

    return () => {
      socket.off(SocketEvent.END_QUIZ_SESSION, onEndQuizSession);
    };
  }, [params, navigate, queryClient, pathname]);

  return (
    <Page
      title={`${quiz.fromQuiz.subject.name ? ` - ${quiz.fromQuiz.subject.name}` : ''}${
        quiz.fromQuiz.name ? ` - ${quiz.fromQuiz.name}` : ''
      }`}
    >
      {width < 768 ? (
        <MobileOngoing quiz={quiz} handleSubmit={submit.mutate} />
      ) : (
        <DesktopOngoing quiz={quiz} handleSubmit={submit.mutate} />
      )}
    </Page>
  );
};

export default Detail;
