import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType, FunctionComponent } from "react";

interface ProtectedRouteProps {
  component: FunctionComponent<{}>;
}

const ValidateRoute = ((component:any, protectedRoute: boolean) => {
  const Component = protectedRoute ? withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          Loading
        </div>
      ),
    }): component;
  return <Component />;
});

export default ValidateRoute;