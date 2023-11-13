import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import APIError from '../errors/APIError.js';
import logger from '../logger.js';

@Middleware({ type: 'after' })
export class ErrorMw implements ExpressErrorMiddlewareInterface {
  error(err: any, _: any, res: any, __: any) {
    logger.error(err.message);
    if (err instanceof APIError && 'status' in err) {
      throw res.status(err.status).json({ message: err.message });
    }
    throw res.status(500).json({ message: 'unexpected error' });
  }
}
