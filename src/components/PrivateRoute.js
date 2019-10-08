import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...restProps }) {
  const user = true;
  return (
    <Route
      {...restProps}
      render={props => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }}
    />
  );
}
