import { links } from '../../../../router';
import { Button } from '../../../UI/Button/Button';
import { P } from '../../../index';
import { LanguageSelect } from '../../LayoutMain/components/LanguageSelect/LanguageSelect';

const HaveAccount: React.FC<{ isLogin: boolean }> = ({
  isLogin,
}): JSX.Element => {
  return (
    <>
      {isLogin ? (
        <div className='login__singUp footinup'>
          <div className='footinup__text'>
            <P size='l'>
              <LanguageSelect
                ru='У вас еще нет аккаунта?'
                en="Don't have an account yet?"
              />
            </P>
          </div>
          <div className='footinup__btn'>
            <Button name='btn2' valid={true} path={links.UPLOGIN_ROUTER}>
              <P size='l'>
                <LanguageSelect ru='Создать аккаунт' en='Create an account' />
              </P>
            </Button>
          </div>
        </div>
      ) : (
        <div className='login__singUp footinup'>
          <div className='footinup__text'>
            <P size='l'>
              <LanguageSelect
                ru='У вас уже есть аккаунт?'
                en='Do you already have an account?'
              />
            </P>
          </div>
          <div className='footinup__btn'>
            <Button name='btn2' valid={true} path={links.INLOGIN_ROUTER}>
              <P size='l'>
                <LanguageSelect ru='Войти' en='Sign in' />
              </P>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HaveAccount;
