import { IsDefined, IsEmail } from 'class-validator';

export class UserCreateConf {
  @IsDefined()
  number: string;
  @IsEmail()
  email: string;
  @IsDefined()
  login: string;
  @IsDefined()
  password: string;
  @IsDefined()
  role?: string;
  @IsDefined()
  firstName: string;
  @IsDefined()
  lastName: string;
}

export class LoginConf {
  @IsEmail()
  email: string;
  @IsDefined()
  password: string;
}

export type UserConf = {
  id: number;
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  login: string;
  password: string;
  role?: string;
};
