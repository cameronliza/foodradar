import React from "react";
import Login from "../users/login";
import Register from "../users/register";

import Getallusers from "../users/allUser";
import { Route, Switch } from "react-router-dom";

import Home from "../layout/home";

import Nofound from "../layout/noFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={Getallusers} />
      <Route path="*" component={Nofound} />
    </Switch>
  );
};
export default Routes;
