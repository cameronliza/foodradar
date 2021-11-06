import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./component/routes/index";
import Navbar from "./component/layout/navbar/navbar";
import { useDispatch } from "react-redux";
import { logout, loadUser } from "./actions/user";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch(logout());
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route component={Routes} />
      </Router>
    </div>
  );
}

export default App;
