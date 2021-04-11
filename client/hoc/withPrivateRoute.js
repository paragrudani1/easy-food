import React from "react";
import Router from "next/router";
import { useAuth } from "../contexts/AuthContext";

const login = "/login?redirected=true"; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */

export default (WrappedComponent) => {
  let AuthToken;
  const hocComponent = ({ ...props }) => {
    const { token } = useAuth();
    AuthToken = token;
    return <WrappedComponent {...props} />;
  };

  hocComponent.getInitialProps = async (context) => {
    const userAuth = { auth: AuthToken && true};

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
