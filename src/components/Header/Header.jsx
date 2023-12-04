import { Button, Loader } from 'components';

import { logoutThunk } from 'redux/auth/operations';
import { selectAuthIsLoading, selectIsLogin } from 'redux/auth/selectors';

import { CiLogout } from 'react-icons/ci';

import { HeaderWrapper } from './Header.styled';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <HeaderWrapper>
      {!isLoading ? (
        <nav>
          <ul>
            {!isLogin ? (
              <>
                <li>
                  <NavLink to="/login">Register</NavLink>
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
