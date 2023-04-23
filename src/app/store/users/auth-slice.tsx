/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^state"] }] */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { IUserRequest, IUserResponse } from './models/user.interface';
import { authApi } from './auth-api';

const initialState: IUserResponse = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: state => {
      state.user = null;
      state.token = '';
    },
    setUser: (state, action: PayloadAction<IUserRequest>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload: { user } }) => {
        state.user = user;
      },
    );
  },
});
export const selectAuth = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;

export const { logout, setUser, setToken } = userSlice.actions;
