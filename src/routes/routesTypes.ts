import { PropsWithChildren } from "react"

type MainRoute = {
  path: '/' | '/add';
  Component: () => JSX.Element
}

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
}

type AuthRoute = {
  path: '/' | '/register';
  Component: () => JSX.Element
}

export type AuthLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: AuthRoute[];
}