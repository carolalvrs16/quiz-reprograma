import { HTMLAttributes } from 'react';

export interface InputHandles extends HTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: boolean | string,
}
