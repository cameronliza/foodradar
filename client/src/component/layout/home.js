import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
const Home = () => {
  const dispatch = useDispatch();
  const [cookies, setcookies] = useState("");
  // function getCookie(cookieName) {
  //   let cookie = {};
  //   document.cookie.split(";").forEach(function (el) {
  //     let [key, value] = el.split("=");
  //     cookie[key.trim()] = value;
  //   });
  //   // setcookie(cook)
  //   return cookie[cookieName];
  // }
  const handleChange = () => {
    dispatch(logout());
  };
  return (
    <div>
      Home page
      <button onClick={handleChange}>logout</button>
    </div>
  );
};

export default Home;
