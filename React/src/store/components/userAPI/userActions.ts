import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserGetDataConfig,
  UserLoginConfig,
  UserResponseConfig,
  UserSetConfig,
} from './slice.conf';
import { $authHost, $host } from '../../../http';
import axios from 'axios';
import { validateUserValue } from '../../../pages/SignInUp/pages/SingUp/Components/validateUserValue/validateUserValue';

export const userCheckHTTP = createAsyncThunk<UserResponseConfig, undefined>(
  'user/userCheckHTTP',
  async function () {
    try {
      const { data } = await $authHost.get('userfile/check');

      if (data.message == 'Ok') {
        localStorage.setItem('tokenFile', JSON.stringify(data.token));
        return data;
      }
    } catch (error) {
      const err = error as Error;
      if (axios.isAxiosError(err) && err.response) {
        const {
          response: { data },
        } = err;
        return data;
      }
    }
  }
);

export const userLoginHTTP = createAsyncThunk<
  UserResponseConfig,
  UserGetDataConfig<UserLoginConfig>
>('user/userLoginHTTP', async function ({ body, setError }) {
  try {
    await $host.get(`userfile/delete`);

    const { data } = await $host.post('userfile/login', {
      ...body,
    });

    if (data.message == 'Ok') {
      localStorage.setItem('tokenFile', JSON.stringify(data.token));
      return data;
    }
  } catch (error) {
    const err = error as Error;
    if (axios.isAxiosError(err) && err.response) {
      const {
        response: { data },
      } = err;
      validateUserValue((data as { message: string }).message, setError, true);
      return data;
    }
  }
});

export const userSetHTTP = createAsyncThunk<
  UserResponseConfig,
  UserGetDataConfig<UserSetConfig>
>('user/userSetHTTP', async function ({ body, setError }) {
  try {
    await $host.get('userfile/delete');

    const { data } = await $host.post('userfile/registration', {
      ...body,
    });

    if (data.message == 'Ok') {
      localStorage.setItem('tokenFile', JSON.stringify(data.token));
      return data;
    }
  } catch (error) {
    const err = error as Error;
    if (axios.isAxiosError(err) && err.response) {
      const {
        response: { data },
      } = err;
      validateUserValue((data as { message: string }).message, setError, false);
      return data;
    }
  }
});
