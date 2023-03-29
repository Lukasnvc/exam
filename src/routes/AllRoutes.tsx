import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { authLayoutRoutes, mainLayoutRoutes } from "./const";

import { Circles } from "react-loader-spinner";
import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const AllRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <React.Suspense
                fallback={
                  <div
                    style={{
                      width: "100vw",
                      height: "80vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Circles
                      height="80"
                      width="80"
                      color="#7cb6f3"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                }>
                <Component />
              </React.Suspense>
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default AllRoutes;
