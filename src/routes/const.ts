import { AuthLayoutRoutes, MainLayoutRoutes } from './routesTypes';

import AddPage from '../pages/AddPage';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/Register';

export const HOME_PATH = '/';
export const ADD_PATH = '/add';
export const LOGIN_PATH = '/';
export const REGISTER_PATH = '/register';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    {path: ADD_PATH, Component: AddPage}
  ]
}

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    { path: LOGIN_PATH, Component: Login },
    {path: REGISTER_PATH, Component: Register}
  ]
}