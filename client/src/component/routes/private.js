import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { loadUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";

const Privateroute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const { isAuth, loading } = auth;
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <p>...loading</p>
        ) : isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default Privateroute;
