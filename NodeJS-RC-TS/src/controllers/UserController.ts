import { Body, Controller, Get, JsonController, Post, Req, Res, UseBefore } from 'routing-controllers';
import { AuthMw } from '../middlewares/AuthMw.js';
import { sequelize } from '../bd.js';
import { LoginConf, UserCreateConf } from '../interfaces/user.config.js';
import APIError from '../errors/APIError.js';
import { checkModal, createModal, loginModal } from '../modal/userModal.js';
import { User } from '../modal/mapping.js';

import 'reflect-metadata';

@Controller()
@JsonController()
export class UserController {
  @UseBefore(AuthMw)
  @Get('/user')
  async check(@Req() { id }: any, @Res() res: any) {
    const [results]: any = await sequelize.query(`SELECT * from users WHERE id = ${id};`);

    if (results.length) {
      const token = await checkModal(results[0], res);

      return { token, body: results, message: 'Ok' };
    } else {
      throw APIError.unauthorized('Not authorized');
    }
  }

  @Post('/user/login')
  async login(@Body() { password, email }: LoginConf, @Res() res: any) {
    const [results]: any = await sequelize.query(`SELECT * from users WHERE email = ${email};`);

    if (!results.length) {
      throw APIError.badRequest('login or email not found');
    }

    const token = await loginModal(results[0], password, res);

    return { message: 'Ok', token, body: results[0] };
  }

  @Post('/user/add')
  async registration(@Body() { password, email, number, login, firstName, lastName }: UserCreateConf, @Res() res: any) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
    }
    const userNumber = await User.findOne({ where: { number } });
    if (userNumber) {
      throw APIError.badRequest('This number already exists');
    }
    const userLogin = await User.findOne({ where: { login } });
    if (userLogin) {
      throw APIError.badRequest('This login already exists');
    }

    const { token, user } = await createModal({ password, email, number, login, firstName, lastName }, res);

    return { message: 'Ok', token, body: user };
  }
}
