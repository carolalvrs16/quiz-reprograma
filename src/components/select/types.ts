import { Dispatch, SetStateAction } from 'react';

export type SelectHandles = {
  label?: string,
  options: string[],
  selected: string,
  className?: string,
  onSelected: Dispatch<SetStateAction<string>>
  placeholder: string,
};
