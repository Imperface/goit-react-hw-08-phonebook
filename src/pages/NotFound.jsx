import { CONTACTS_ROUTE, LOGIN_ROUTE } from 'constans/routes';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';
import { NotFoundWrapper } from './NotFound.styled';

export const NotFound = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <NotFoundWrapper>
      <p>404 Page not found</p>
      {isLogin ? (
        <NavLink to={CONTACTS_ROUTE}>Go to Contacts page</NavLink>
      ) : (
        <NavLink to={LOGIN_ROUTE}>Go to Login page</NavLink>
      )}
    </NotFoundWrapper>
  );
};
