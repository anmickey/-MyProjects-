import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Body from './Components/Body/Body';
import {
  UserSetConfig,
  useAppDispatch,
  useAppSelector,
  userSetHTTP,
} from '../../../../store';
import SignBody from '../../../../components/UI/LoginBody/LoginBody';
import { useEffect } from 'react';
import { LanguageSelect } from '../../../../components';

import './style/SingUp.scss';

const SignUp: React.FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<UserSetConfig>({ mode: 'onSubmit' });
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((store) => store.user);

  const fetching = async (body: UserSetConfig) => {
    dispatch(userSetHTTP({ body, setError }));
  };

  useEffect(() => {
    if (isAuth) {
      router('/');
    }
  }, [isAuth]);

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn={<LanguageSelect ru='Создать' en='Sign up' />}
    >
      <Body register={register} errors={errors} getValues={getValues} />
    </SignBody>
  );
};

export default SignUp;
