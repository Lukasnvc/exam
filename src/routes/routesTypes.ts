import { PropsWithChildren } from "react"

type MainRoute = {
  path: '/' | '/add';
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
}

type AuthRoute = {
  path: '/' | '/register';
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export type AuthLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: AuthRoute[];
}