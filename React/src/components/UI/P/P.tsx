import React from 'react';
import { PConf } from './P.conf';
import './style/P.scss';

const P: React.FC<PConf> = ({
  size,
  children = '',
  className = '',
  weight = '',
}): JSX.Element => {
  return (
    <p style={{ fontWeight: weight }} className={size + ' ' + className}>
      {children}
    </p>
  );
};

export { P };
