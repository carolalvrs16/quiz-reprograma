import { Dispatch, SetStateAction } from 'react';

export type User = {
  date: string,
  avatar: string,
  first_name: string,
  last_name: string,
};

export type QuizHandles = {
  user: User | null,
  onUser: Dispatch<SetStateAction<User | null>>
  questions: string[] | null
  onQuestions: Dispatch<SetStateAction<string[] | null>>
};
