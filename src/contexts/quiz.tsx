import {
  useMemo,
  useState,
  useCallback,
  createContext,
} from 'react';

import { User, Answer, QuizHandles } from './types';

export const QuizContext = createContext({} as QuizHandles);

export const QuizProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<User | null>(null);
  const [answers, onAnswers] = useState <Answer>([]);

  const formatAnswer = useCallback((answer, point) => {
    if (answers.length === 0) {
      onAnswers([{
        id: 0,
        point,
      }]);
    } else onAnswers((prev) => [...prev, { id: answer, point }]);
  }, [answers]);

  const points = answers.map(({ point }) => point);

  const score = useMemo(() => {
    if (points.length > 0) {
      return points?.reduce((acc, curr) => acc + curr, 0);
    }

    return 0;
  }, [points]);

  const value = useMemo(() => ({
    user,
    score,
    onUser,
    answers,
    formatAnswer,
  }), [user, score, answers, formatAnswer]);

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
