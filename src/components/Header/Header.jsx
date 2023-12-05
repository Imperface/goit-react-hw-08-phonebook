import { Button, Loader } from 'components';

import { logoutThunk } from 'redux/auth/operations';
import {
  selectAuthIsLoading,
  selectAuthOperation,
  selectIsLogin,
} from 'redux/auth/selectors';

import { CiLogout } from 'react-icons/ci';

import { HeaderWrapper } from './Header.styled';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { LOGIN, LOGOUT, REGISTER } from 'constans/operationType';
import { Notify } from 'notiflix';
import { clearAuthOperation } from 'redux/auth/slice';

export const Header = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectAuthIsLoading);
  const authOperation = useSelector(selectAuthOperation);

  useEffect(() => {
    if (authOperation === REGISTER) {
      Notify.success('Successful registration.');
      dispatch(clearAuthOperation());
    }
  }, [dispatch, authOperation]);

  useEffect(() => {
    if (authOperation === LOGIN) {
      Notify.success('Login successful.');
      dispatch(clearAuthOperation());
    }
  }, [dispatch, authOperation]);

  useEffect(() => {
    if (authOperation === LOGOUT) {
      Notify.success('Logout successful.');
      dispatch(clearAuthOperation());
    }
  }, [dispatch, authOperation]);

  return (
    <HeaderWrapper>
      {!isLoading ? (
        <nav>
          <ul>
            {!isLogin ? (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/">LogIn</NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
        </nav>
      ) : (
        <Loader size={58} color="#fff" />
      )}

      {isLogin && (
        <Button
          type="button"
          text="Log Out"
          callback={() => dispatch(logoutThunk())}
          isLoading={isLoading}
          icon={() => <CiLogout />}
        />
      )}
    </HeaderWrapper>
  );
};
