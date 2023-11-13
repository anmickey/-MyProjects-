import { Button, P } from '../../../../../index';
import { ReactComponent as User } from '../../../../../../media/icons/user.svg';
import { ReactComponent as Lang } from '../../../../../../media/icons/Vector.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect';
import {
  checkLangHTTP,
  selectLang,
  useAppDispatch,
  useAppSelector,
} from '../../../../../../store';
import { Collapsible } from '../../../../../UI/Collapsible/Collapsible';
import { $host } from '../../../../../../http';
import { userAuth } from '../../../../../../store/components/userAPI/userSlice';
import { links } from '../../../../../../router';

const AccountMenu = () => {
  const dispatch = useAppDispatch();
  const { user, isAuth } = useAppSelector((state) => state.user);
  const { select } = useAppSelector((state) => state.lang);
  const lcation = useLocation().pathname;
  const router = useNavigate();

  const handleExit = async () => {
    localStorage.setItem('tokenFile', '0');
    dispatch(userAuth({}));
    await $host.get('userfile/delete');
    if (lcation.includes('folder')) router(links.DISC);
  };

  function changeLang(item) {
    const lang = select.includes('Ru') ? item.ru : item.en;
    if (isAuth) dispatch(checkLangHTTP({ lang }));
    dispatch(selectLang(lang));
  }

  return (
    <div className='accoutmenu'>
      <div className='langselect'>
        <Collapsible
          first={select}
          className='classic'
          arr={[
            { id: 1, ru: 'Ru', en: 'Ru', handler: changeLang },
            { id: 2, en: 'En', ru: 'En', handler: changeLang },
          ]}
          title={
            <div className='langselect__title'>
              <div className='langselect__text'>
                <P size='m'>{select}</P>
              </div>
              <div className='accoutmenu__icon'>
                <Lang />
              </div>
            </div>
          }
        />
      </div>
      <div className='accoutmenu__wrap'>
        {isAuth ? (
          <>
            <Collapsible
              className='another'
              arr={[{ id: 1, ru: 'Выход', en: 'Exit', handler: handleExit }]}
              title={
                <div className='accoutmenu__user'>
                  <div className='accoutmenu__login'>
                    <P size='m'>{'login' in user && user.login}</P>
                  </div>
                  <div className='accoutmenu__icon'>
                    <User />
                  </div>
                </div>
              }
            />
          </>
        ) : (
          <div className='accoutmenu__block'>
            <Button
              test='signin'
              valid={true}
              name='btn1'
              path={links.INLOGIN_ROUTER}
            >
              <P weight='600' size='m'>
                <LanguageSelect ru='Войти' en='Sign in' />
              </P>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
