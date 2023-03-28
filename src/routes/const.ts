import { AuthLayoutRoutes, MainLayoutRoutes } from './routesTypes';

import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import React from 'react';

const LazyAdd = React.lazy(() => import('../pages/AddPage'))
const LazyHome = React.lazy(() => import('../pages/Home'))
const LazyLogin = React.lazy(() => import('../pages/Login'))
const LazyRegister = React.lazy(() => import('../pages/Register'))

export const HOME_PATH = '/';
export const ADD_PATH = '/add';
export const LOGIN_PATH = '/';
export const REGISTER_PATH = '/register';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: LazyHome },
    {path: ADD_PATH, Component: LazyAdd}
  ]
}

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    { path: LOGIN_PATH, Component: LazyLogin },
    {path: REGISTER_PATH, Component: LazyRegister}
  ]
}