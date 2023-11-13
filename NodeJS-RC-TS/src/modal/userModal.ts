import jwt from 'jsonwebtoken';
import config from 'config';
import { UserConf, UserCreateConf } from '../interfaces/user.config.js';
import APIError from '../errors/APIError.js';
import bcrypt from 'bcrypt';
import { sequelize } from '../bd.js';
import { User } from './mapping.js';

const maxAge = 60 * 60 * 1000 * 24;

function generateJwt({ id, email, login }: Pick<UserConf, 'email' | 'login' | 'id'>) {
  return jwt.sign({ id, email, login }, config.get('secretKey') as string, {
    expiresIn: '24h',
  });
}

export async function loginModal(user: UserConf, password: string, res: any) {
  const comparePass = bcrypt.compareSync(password, user.password);
  if (!comparePass) {
    throw APIError.badRequest('Incorrect password');
  }
  const token = generateJwt({ id: user.id, login: user.login, email: user.email });

  res.cookie('user', user.id, {
    maxAge,
    signed: true,
    sameSite: 'strict',
    secure: true,
    httpOnly: true,
  });

  return token;
}

export async function checkModal(user: UserConf, res: any) {
  const token = generateJwt({ id: user.id, login: user.login, email: user.email });

  res.cookie('user', user.id, {
    maxAge,
    signed: true,
    sameSite: 'strict',
    secure: true,
    httpOnly: true,
  });

  return token;
}

export async function createModal({ password, email, number, login, firstName, lastName }: UserCreateConf, res: any) {
  const hashPass = await bcrypt.hash(password, 5);

  const user: any = await User.create({
    password: hashPass,
    email,
    number,
    login,
    firstName,
    lastName,
  });

  const token = generateJwt({ id: user.id, login: user.login, email: user.email });
  res.cookie('crmuser', user.id, {
    maxAge,
    signed: true,
    sameSite: 'Strict',
    secure: true,
  });
  return { token, user };
}
