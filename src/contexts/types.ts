import { Dispatch, SetStateAction } from 'react';

export type User = {
  date: string,
  avatar: string,
  first_name: string,
  last_name: string,
};

export type Answer = {
  id: number,
  point: number,
}[];

export type QuizHandles = {
  user: User | null,
  score: number,
  onUser: Dispatch<SetStateAction<User | null>>
  answers: Answer,
  formatAnswer: (answer: number, point: number) => void
};
