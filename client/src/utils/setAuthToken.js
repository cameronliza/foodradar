import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    console.log(token);
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    console.log("remove");
    //   localStorage.removeItem("token");
  }
};

export default setAuthToken;
