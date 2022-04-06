import {
  useMemo,
  useState,
  createContext,
} from 'react';

import { User, QuizHandles } from './types';

export const QuizContext = createContext({} as QuizHandles);

export const QuizProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<User | null>(null);
  const [result, onResult] = useState<number>(null);
  const [questions, onQuestions] = useState<number[]>(null);

  const value = useMemo(() => ({
    user,
    onUser,
    result,
    onResult,
    questions,
    onQuestions,
  }), [user, result, questions]);

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
