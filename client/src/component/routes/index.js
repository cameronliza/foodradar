import React from "react";
import Login from "../users/login";
import Register from "../users/register";
import Profileform from "../profile/profileForm";
import Getallusers from "../users/allUser";
import { Route, Switch } from "react-router-dom";

import Home from "../layout/home";

import Nofound from "../layout/noFound";
import Privateroute from "./private";
import Profile from "../profile/profile";

const Routes = () => {
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
