import { Layout } from 'components';
import { Contacts, Register, Login } from 'pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from 'redux/auth/operations';

import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

import { AppWrapper } from './App.styled';

import * as ROUTES from 'constans/routes';
import { PrivatRoute } from 'components/PrivateRoute/PrivateRoute';

const appRoutes = [
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivatRoute>
        <Contacts />
      </PrivatRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Layout>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* <Route path="*" /> */}
        </Routes>
      </Layout>
    </AppWrapper>
  );
};
