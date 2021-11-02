import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/user";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(data));
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>
        <h4>Email:</h4>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      <div>
        <h4>Password:</h4>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
