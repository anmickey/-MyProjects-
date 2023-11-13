import { ResponseConf } from '../actionStore.conf';

export type UserConf = {
  [x: string]: string;
};

export type UserMutation = {
  data: ResponseConf<UserConf>;
  text: string;
  pass: boolean;
};
