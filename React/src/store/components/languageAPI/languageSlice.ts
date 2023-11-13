import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LangunageSelectType } from './slice.conf';
import { getLanfConf } from './slice.conf';
import { getLangHTTP } from './languageActions';

const initialState: LangunageSelectType = {
  select: 'Ru',
};

const LangunageSlice = createSlice({
  name: 'langunage',
  initialState,
  reducers: {
    selectLang(state, action: PayloadAction<string>) {
      state.select = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
  extraReducers: (b) => {
    b.addCase(
      getLangHTTP.fulfilled,
      function (state, action: PayloadAction<getLanfConf>) {
        const { message } = action.payload;

        if (message === 'Ok') {
          state.select = action.payload.body;
        } else if (localStorage.getItem('lang')) {
          state.select = localStorage.getItem('lang') as string;
        }
      }
    );
  },
});

export const { selectLang } = LangunageSlice.actions;

export default LangunageSlice.reducer;
