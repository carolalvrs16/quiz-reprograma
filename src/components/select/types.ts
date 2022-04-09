import { Dispatch, SetStateAction } from 'react';

export type SelectHandles = {
  error?: boolean,
  label?: string,
  options: string[],
  selected: string,
  className?: string,
  onSelected: Dispatch<SetStateAction<string>>
  placeholder: string,
};
