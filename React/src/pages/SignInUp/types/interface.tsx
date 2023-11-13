import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { UserLoginConfig, UserSetConfig } from '../../../store';

export interface BodySignTypes {
  fetching: (el: any) => void;
  handleSubmit: UseFormHandleSubmit<UserLoginConfig | UserSetConfig>;
  loading: boolean;
  btn: React.ReactNode;
  children: React.ReactNode | React.ReactChild;
}

export interface FiledValue {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  select: string;
}

export interface SignInputAll {
  // ? ==================== register:
  register: UseFormRegister<UserLoginConfig | UserSetConfig>;
  errors: FieldErrors<UserLoginConfig | UserSetConfig>;
}

export type BodyUpProps = Pick<SignInputAll, 'errors'> & {
  // ? ==================== register:
  getValues: UseFormGetValues<UserSetConfig>;
  register: UseFormRegister<UserSetConfig>;
};

export interface BodyInProps extends SignInputAll {
  remember: boolean;
  setRemember: (remember: boolean) => void;
}

export interface RememberProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface InputFiledTypes<
  TFieldValues extends FieldValues = FieldValues
> {
  errors: FieldErrors<UserLoginConfig | UserSetConfig | TFieldValues>;
  type: string;
  textFiled?: string;
  register: UseFormRegister<any>;
  req?: boolean;
  name: string;
  getValues?: UseFormGetValues<UserSetConfig>;
  twopass?: boolean;
  checkErr?: boolean;
}
