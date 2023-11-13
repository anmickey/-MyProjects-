import AppError from '../errors/APIError.js';

export const AdminCheckMw = (req: any, _: any, next: any) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    if (req.auth.role !== 'ADMIN') {
      throw AppError.forbidden('Error, only for administrator');
    }
    next();
  } catch (err) {
    next(err);
  }
};
