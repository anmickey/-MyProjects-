import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import './style/SingIn.scss';
import { useNavigate } from 'react-router-dom';
import Body from './Components/Body/Body';
import {
  UserLoginConfig,
  useAppDispatch,
  useAppSelector,
  userLoginHTTP,
} from '../../../../store';
import SignBody from '../../../../components/UI/LoginBody/LoginBody';
import { LanguageSelect, renderInput } from '../../../../components';

const SignIn: React.FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<UserLoginConfig>({ mode: 'onSubmit' });
  const router = useNavigate();
  const [remember, setRemember] = useState(true);
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((store) => store.user);

  const fetching = async (body: UserLoginConfig) => {
    dispatch(userLoginHTTP({ body, setError }));
  };

  useEffect(() => {
    if (isAuth) {
      router(-1);
    }
  }, [isAuth]);

  useEffect(() => {
    setTimeout(() => {
      renderInput();
    }, 500);
  });

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn={<LanguageSelect ru='Войти' en='Sign in' />}
    >
      <Body
        register={register}
        errors={errors}
        remember={remember}
        setRemember={setRemember}
      />
    </SignBody>
  );
};

export default SignIn;
