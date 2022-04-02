import { ButtonHTMLAttributes } from 'react';

export interface ButtonHandles extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  submit?: boolean,
  disabled?: boolean,
  className?: string,
}
