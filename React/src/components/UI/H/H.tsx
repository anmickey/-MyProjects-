import React from 'react';
import { HConf } from './H.conf';

import './H.scss';

const H: React.FC<HConf> = ({
  tag: CustomTag = 'h1',
  children,
  weight = '',
  ClassCus = '',
}) => {
  return (
    <CustomTag style={{ fontWeight: weight }} className={ClassCus}>
      {children}
    </CustomTag>
  );
};

export { H };
