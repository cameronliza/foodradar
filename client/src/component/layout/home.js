import React, { useState } from "react";

const Home = () => {
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
  const getCookie = (e) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    // setcookie(cook)
    const res = cookie[e.target.value];
    console.log(cookies);
    setcookies(res);
    // return cookie[e.target.value];
  };
  return (
    <div>
      Home page
      <input name="cookies" value={cookies} onChange={getCookie} type="text" />
    </div>
  );
};

export default Home;
