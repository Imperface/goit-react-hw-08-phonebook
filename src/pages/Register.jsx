import { Button, Error, Input } from 'components';

import { registerThunk } from 'redux/auth/operations';
import { selectAuthError, selectAuthIsLoading } from 'redux/auth/selectors';
import { clearError } from 'redux/auth/slice';

import { MdEmail } from 'react-icons/md';
import { FaUserPen } from 'react-icons/fa6';
import { FaUserEdit } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

import { RegisterWrapper } from './Register.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

export const Register = () => {
  const dispath = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  const onRegisterSubmit = e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // check form data
    if (!name || !email || !password) {
      Notify.failure('Name, Email and Password must be filled.');
      return;
    }

    // create obj for
    const userData = { name, email, password };

    dispath(registerThunk(userData));
  };

  // reset error message

  useEffect(() => {
    dispath(clearError());
  }, [dispath]);

  return (
    <RegisterWrapper>
      {error && <Error text={error} />}

      <form onSubmit={onRegisterSubmit}>
        <Input
          type="text"
          name="name"
          defaultValue="Alfred"
          placeholder="Alfred"
          minLength={2}
          icon={() => <FaUserEdit />}
        />
        <Input
          type="email"
          name="email"
          defaultValue="alfred123@gmail.com"
          placeholder="alfred@gmail.com"
          icon={() => <MdEmail />}
        />
        <Input
          type="password"
          name="password"
          minLength={6}
          defaultValue="qwertyasdfasdfsd"
          placeholder="****************"
          icon={() => <RiLockPasswordFill />}
        />

        <Button
          isLoading={isLoading}
          text="Registration"
          type="submit"
          icon={() => <FaUserPen />}
        />
      </form>
    </RegisterWrapper>
  );
};
