import { HTMLAttributes } from 'react';

export type InputHandles = HTMLAttributes<HTMLInputElement> & JSX.IntrinsicElements['input'] & {
  label?: string,
  error?: boolean | string,
};
