import { CONTACTS_ROUTE } from 'constans/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const RestrictedRoute = ({ children, navigateTo = CONTACTS_ROUTE }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? <Navigate to={navigateTo} replace /> : children;
};
