import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import {auth} from '../firebase/authServices';

const PrivateRoute = ({ children, ...remainingProps }) => {
  const user = auth.currentUser;
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(user) && !isEmpty(user) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;