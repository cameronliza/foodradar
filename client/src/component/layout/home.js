import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { loadUser } from "../../actions/user";
import { Link } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";

// import { Block } from "@mui/icons-material";
const Home = () => {
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
  const handleChange = () => {
    dispatch(logout());
  };
  return (
    <div style={{ display: "inline-grid" }}>
      Home page
      <button onClick={handleChange} style={{ width: "360px" }}>
        logout
      </button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
