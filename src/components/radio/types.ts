import { InputHTMLAttributes } from 'react';

export interface RadioHandles extends InputHTMLAttributes<HTMLInputElement> {
  error?: string,
  name: string,
  label: string,
}
