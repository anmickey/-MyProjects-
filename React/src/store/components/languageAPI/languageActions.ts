import { createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../../http';
import { getLanfConf } from './slice.conf';

export const getLangHTTP = createAsyncThunk<getLanfConf>(
  'language/getLangHTTP',
  async function () {
    try {
      const { data } = await $host.get('/lang');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const checkLangHTTP = createAsyncThunk<void, { lang: string }>(
  'language/checkLangHTTP',
  async function ({ lang }) {
    await $host.patch('/lang', { params: { lang } });
  }
);
