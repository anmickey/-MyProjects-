import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  valid?: boolean;
  path?: string;
  name: 'btn1' | 'btn2' | 'btn3' | 'btn4';
  arrow?: boolean;
  test?: string;
}
