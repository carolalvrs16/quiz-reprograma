import { ReactNode, HTMLAttributes } from 'react';

export type TextSizesHandles = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type TextTypesHandles = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'small';

export interface TextHandles extends HTMLAttributes<HTMLTitleElement | HTMLHeadingElement> {
  size?: TextSizesHandles,
  type?: TextTypesHandles,
  label?: string | ReactNode,
  align?: 'left' | 'right' | 'center',
  weight?: '300' | '400' | '500' | '600' | '700' | '800' | '900',
  className?: string,
}
