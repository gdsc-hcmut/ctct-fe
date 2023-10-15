import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loading } from '../../../components';
import ExamSessionService from '../../../service/examSession.service';
import { SessionStatus } from '../../../types';

import Ongoing from './Ongoing';
import Review from './Review';

const MockTest: FC = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isRefetching, setIsRefetching] = useState(false);

  const { data: exam, isLoading } = useQuery({
    enabled: !!params?.sessionId,
    queryKey: [params.sessionId],
    queryFn: async () => {
      const { data } = await ExamSessionService.getById(params.sessionId as string);
      setIsRefetching(false);
      return data.payload;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: 'always',
  });

  const submit = useMutation({
    mutationFn: async () => {
      await ExamSessionService.submit(params.sessionId as string);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['exam-session', exam?.fromExam._id]);
      queryClient.invalidateQueries([params.sessionId]);
      setIsRefetching(true);
    },
    onError: () => {
      toast.error('Đã có lỗi trong lúc nộp bài!');
    },
  });

  useEffect(() => {
    if (
      exam?.status === SessionStatus.ENDED &&
      pathname === `/room/tests/session/${params.sessionId}`
    ) {
      navigate(`/room/tests/review/session/${params.sessionId}`, { replace: true });
    }
  }, [exam, navigate, params, pathname]);

  if (isLoading || submit.isLoading || isRefetching || !exam) {
    return <Loading />;
  }

  return exam.status === SessionStatus.ONGOING ? (
    <Ongoing exam={exam} handleSubmit={submit} setIsRefetching={setIsRefetching} />
  ) : (
    <Review exam={exam} />
  );
};

export default MockTest;
