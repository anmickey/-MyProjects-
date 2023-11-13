import { FieldValues, SubmitHandler } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../../media/icons/arrow.svg';
import { BodySignTypes } from '../../../pages/SignInUp/types/interface';
import { Button } from '../Button/Button';
import { P } from '../P/P';
import { links } from '../../../router/components/links';
import { LanguageSelect } from '../../index';

import './LoginBody.scss';

const LoginBody: React.FC<BodySignTypes> = ({
  fetching,
  handleSubmit,
  loading,
  btn,
  children,
}) => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    fetching(data);
  };

  const router: NavigateFunction = useNavigate();

  return (
    <form
      className={loading ? 'signbody load' : 'signbody'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      <div className='signbody__footer'>
        <div
          onClick={() => router(links.HOME_ROUTER)}
          className='signbody__wrap'
        >
          <div className='signbody__arrow'>
            <Arrow />
          </div>
          <Button name='btn2' valid={true}>
            <div className='signbody__text'>
              <P size='l'>
                <LanguageSelect ru='Главная страница' en='To Home' />
              </P>
            </div>
          </Button>
        </div>
        <div className='signbody__btn'>
          <Button name='btn1' valid={false}>
            <P size='m' weight='700'>
              {btn}
            </P>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginBody;
