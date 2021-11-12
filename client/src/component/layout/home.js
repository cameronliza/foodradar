import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { Link } from "react-router-dom";
// import { Block } from "@mui/icons-material";
const Home = () => {
  const dispatch = useDispatch();

  const [cookies, setcookies] = useState("");

  // }
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
