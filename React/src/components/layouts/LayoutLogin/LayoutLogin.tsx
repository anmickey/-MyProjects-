import { Location, Outlet, useLocation } from 'react-router-dom';
import HaveAccount from './Components/HaveAccount';
import { links } from '../../../router/components/links';
import { LanguageSelect } from '../LayoutMain/components/LanguageSelect/LanguageSelect';

import './style/Login.scss';

export const LayoutLogin: React.FC = (): JSX.Element => {
  const { pathname }: Location = useLocation();
  const isLogin = pathname.includes(links.INLOGIN_ROUTER);

  return (
    <>
      <div className='login'>
        <div className={isLogin ? 'login__container' : 'login__container rg'}>
          <div className='login__body'>
            <div className='login__title'>
              <h2>
                {isLogin ? (
                  <LanguageSelect ru='Вход' en='Sign in' />
                ) : (
                  <LanguageSelect ru='Создать аккаунт' en='Create account' />
                )}
              </h2>
            </div>
            <Outlet />
            <HaveAccount isLogin={isLogin} />
          </div>
        </div>
      </div>
    </>
  );
};
