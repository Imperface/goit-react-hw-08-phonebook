import { Button, Error, Input } from 'components';

import { loginThunk } from 'redux/auth/operations';
import { selectAuthError, selectAuthIsLoading } from 'redux/auth/selectors';
import { clearError } from 'redux/auth/slice';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { CiLogin } from 'react-icons/ci';

import { LoginWrapper } from './Login.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

export const Login = () => {
  const dispath = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  // reset error message
  useEffect(() => {
    dispath(clearError());
  }, [dispath]);

  const onLoginSubmit = e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // check form data
    if (!email || !password) {
      Notify.failure('Email and Password must be filled.');
      return;
    }

    // create obj for login
    const userData = { email, password };

    dispath(loginThunk(userData));
  };

  return (
    <LoginWrapper>
      {error && <Error text={error} />}

      <form onSubmit={onLoginSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="alfred@gmail.com"
          icon={() => <MdEmail />}
        />
        <Input
          type="password"
          name="password"
          minLength={6}
          placeholder="****************"
          icon={() => <RiLockPasswordFill />}
        />
        <Button
          isLoading={isLoading}
          text="Log In"
          type="submit"
          icon={() => <CiLogin />}
        />
      </form>
    </LoginWrapper>
  );
};
