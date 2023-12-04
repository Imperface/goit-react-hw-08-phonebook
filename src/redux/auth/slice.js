import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      return { ...state, error: '' };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { name: payload.user.name, email: payload.user.email },
          token: payload.token,
          isLoading: false,
          isLogin: true,
        };
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { name: payload.user.name, email: payload.user.email },
          token: payload.token,
          isLoading: false,
          isLogin: true,
        };
      })

      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          isLogin: true,
          user: { name: payload.name, email: payload.email },
        };
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshThunk.pending
        ),
        state => {
          return {
            ...state,
            isLoading: true,
            error: '',
          };
        }
      )

      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          return {
            ...state,
            isLoading: false,
            error: payload,
          };
        }
      );
  },
});
export const authReduser = authSlice.reducer;
export const { clearError } = authSlice.actions;
