import jwt from 'jsonwebtoken';
import config from 'config';
import APIError from '../errors/APIError.js';

export function AuthMw(req: any, _: any, next: any) {
  try {
    if (req.method === 'OPTIONS') {
      next();
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw APIError.unauthorized('Not authorized');
    }
    const decoded: any = jwt.verify(token, config.get('secretKey'));

    if (!decoded) {
      throw APIError.unauthorized('Not authorized');
    }
    req.id = decoded.id;
    next();
  } catch (err) {
    next(err);
  }
}
