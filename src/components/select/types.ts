import { Dispatch, SetStateAction } from 'react';

export type SelectHandles = {
  id?: string,
  error?: boolean | string,
  label?: string,
  options: string[],
  selected: string,
  className?: string,
  onSelected: Dispatch<SetStateAction<string>>
  placeholder: string,
};
