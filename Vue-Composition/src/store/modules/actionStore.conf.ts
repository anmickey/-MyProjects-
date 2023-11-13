import { KyResponse } from 'ky';

export type ResponseConf<T = null> = KyResponse & {
  body?: T;
  message: string;
  token?: string;
};
