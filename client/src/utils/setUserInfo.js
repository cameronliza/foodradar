import api from "./api";

const setUserInfo = async (info) => {
  if (info) {
    // api.defaults.headers.common['x-auth-token'] = token;
    // localStorage.setItem('token', token);
    // const res = await api.get("/user/isAuth", { withCredentials: true });
    // const sessionObject = { username: res.data.username, id: res.data.id };
    // console.log(res);
    const data = JSON.stringify(info);

    localStorage.setItem("session", data);
  } else {
    // delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem("session");
  }
};

export default setUserInfo;
