import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HConf
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  > {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  weight?: string;
  ClassCus?: string;
}
