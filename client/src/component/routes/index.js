import React, { useEffect } from "react";
import Login from "../users/login";
import Register from "../users/register";
import Profileform from "../profile/profileForm";
import Getallusers from "../users/allUser";
import { Route, Switch } from "react-router-dom";

import Home from "../layout/home";

import Nofound from "../layout/noFound";
import Privateroute from "./private";
import Profile from "../profile/profile";
import { useDispatch } from "react-redux";
import { logout, loadUser } from "../../actions/user";
import setAuthToken from "../../utils/setAuthToken";

const Routes = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // check for token in LS
  //   if (localStorage.session) {
  //     console.log("setting token");
  //     setAuthToken(localStorage.session);
  //   }
  //   console.log("dispatching load user");
  //   dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener("storage", () => {
  //     if (!localStorage.session) dispatch(logout());
  //   });
  // }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={Getallusers} />
      <Route exact path="/profile/:id" component={Profile} />
      <Privateroute exact path="/profileform" component={Profileform} />
      <Route path="*" component={Nofound} />
    </Switch>
  );
};
export default Routes;
