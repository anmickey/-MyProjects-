import { UserResponseConfig, UserStateConfig } from './slice.conf';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserStateConfig = {
  user: {},
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(
      state,
      action: PayloadAction<Pick<UserStateConfig, 'user'> | object>
    ) {
      state.user = action.payload;
      state.isAuth = false;
    },
  },

  extraReducers: function (builder) {
    builder
      .addMatcher(
        ({ type }) => /^user\/(userLoginHTTP|userSetHTTP)\/pending$/.test(type),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(({ type }) => /^user\/.*?\/fulfilled$/.test(type), setDone);
  },
});

function setDone(state, action: PayloadAction<UserResponseConfig>) {
  const { payload } = action;
  if (payload?.message == 'Ok') {
    state.user = payload.user;
    state.isAuth = true;
    state.isLoading = false;
  }
}

export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
