import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import toobusy from 'toobusy-js';

@Middleware({ type: 'before' })
export class ToobusyMw implements ExpressMiddlewareInterface {
  use(_: any, res: any, next: any) {
    toobusy.maxLag(10);
    toobusy.interval(250);
    if (toobusy()) {
      res.send(503, 'Server Too Busy');
    } else {
      next();
    }
  }
}
