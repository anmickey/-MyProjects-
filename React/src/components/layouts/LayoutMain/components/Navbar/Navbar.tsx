import React from 'react';
import { HeaderProps } from './Navbar.conf';

import Logo from './Menu/Logo';
import Navigator from './Menu/Navigator';
import AccountMenu from './Menu/AccountMenu';

import './Navbar.scss';

export const Navbar = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className='header' {...props}>
      <div className='container'>
        <div className='header__wrap'>
          <div className='header__row'>
            <Logo />
            <Navigator />
            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
