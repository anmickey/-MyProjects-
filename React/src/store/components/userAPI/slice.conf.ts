import { UseFormSetError } from 'react-hook-form';

export type UserInfoConfig = {
  id: number;
  email: string;
  password: string;
  number: string;
  login: string;
  role: string;
};

export type UserGetDataConfig<T extends UserSetConfig | UserLoginConfig> = {
  body: T;
  setError: UseFormSetError<T>;
};

export type UserStateConfig = {
  user: UserSetConfig | object;
  isAuth: boolean;
  isLoading: boolean;
};

export type UserResponseConfig = {
  user: UserInfoConfig;
  token: string;
  message: string;
};

export type UserLoginConfig = Pick<UserInfoConfig, 'email' | 'password'>;
export type UserSetConfig = Omit<UserInfoConfig, 'id'>;
