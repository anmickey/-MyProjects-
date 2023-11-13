import React from 'react';
import './style/Button.scss';
import { ButtonProps } from './Button.conf';
import { Link } from 'react-router-dom';

export function Button({
  children,
  valid,
  name,
  path = '',
  test = '',
}: ButtonProps) {
  return (
    <>
      {valid ? (
        <Link data-testid={test} to={path} className={name}>
          {<div className={name + '__text'}>{children}</div>}
        </Link>
      ) : (
        <button type='submit' className={name}>
          <div className={name + '__text'}>{children}</div>
        </button>
      )}
    </>
  );
}

export function ButtonSecond({ children, name, path = '' }: ButtonProps) {
  return (
    <Link to={path} className={name}>
      {<div className={name + '__text'}>{children}</div>}
    </Link>
  );
}
