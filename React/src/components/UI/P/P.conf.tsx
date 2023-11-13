import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PConf
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'b' | 'm' | 'l';
  children?: ReactNode;
  weight?: string;
}
