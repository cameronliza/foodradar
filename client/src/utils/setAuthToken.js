import api from "./api";

const setAuthToken = (info) => {
  if (info) {
    // api.defaults.headers.common["x-auth-info"] = info;
    // console.log(info);
    const data = JSON.stringify(info);
    localStorage.setItem("session", data);
  } else {
    // delete api.defaults.headers.common["x-auth-info"];
    // console.log("remove");
    localStorage.removeItem("session");
  }
};

export default setAuthToken;
