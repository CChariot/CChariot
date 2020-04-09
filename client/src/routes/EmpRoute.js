import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../auth/auth";

const EmpRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        
        if (auth.isEmpAuthed()) {
          return <Component {...props} />;
        } 
        else {
          return (
            <Redirect
              to={{
                pathname: "/employees",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default EmpRoute;