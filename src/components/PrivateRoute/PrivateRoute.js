import { LOGIN_ROUTE } from 'constans/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const PrivatRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? children : <Navigate to={navigateTo} replace />;
};
