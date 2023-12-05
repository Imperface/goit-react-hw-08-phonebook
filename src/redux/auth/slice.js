import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { LOGIN, LOGOUT, REFRESH, REGISTER } from 'constans/operationType';
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
  operation: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      return { ...state, error: '' };
    },
    clearAuthOperation: state => {
      return { ...state, operation: '' };
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
          operation: REGISTER,
        };
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { name: payload.user.name, email: payload.user.email },
          token: payload.token,
          isLoading: false,
          isLogin: true,
          operation: LOGIN,
        };
      })

      .addCase(logoutThunk.fulfilled, () => {
        return { ...initialState, operation: LOGOUT };
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          isLogin: true,
          user: { name: payload.name, email: payload.email },
          operation: REFRESH,
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
            operation: '',
          };
        }
      );
  },
});
export const authReduser = authSlice.reducer;
export const { clearError, clearAuthOperation } = authSlice.actions;
