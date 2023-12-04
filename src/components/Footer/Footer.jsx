import { FooterWrapper } from './Footer.styled';

import { selectIsLogin, selectUserData } from 'redux/auth/selectors';

import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Footer = () => {
  const isLogin = useSelector(selectIsLogin);
  const userData = useSelector(selectUserData);

  return (
    <>
      {isLogin && (
        <FooterWrapper>
          <p>
            User name: <b>{userData.name} </b>
          </p>
          <p>
            User email: <b>{userData.email} </b>
          </p>
        </FooterWrapper>
      )}
    </>
  );
};
