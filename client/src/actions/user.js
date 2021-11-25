import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

//check out if the user has auth
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/user/isAuth", { withCredentials: true });
    const sessionObject = {
      username: res.data.username,
      id: res.data.id,
      avatar: res.data.avatar,
    };
    setAuthToken(sessionObject);
    dispatch({
      type: "LOAD_USER",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};

//login user in
export const login = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/user/login", formData, {
      withCredentials: true,
    });

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    console.log("inside of login trying to load user");
    dispatch(loadUser());
  } catch (err) {
    console.error(err);
  }
};

export const register = (formData) => async (dispatch) => {
  const res = await api.post("/user/register", formData, {
    withCredentials: true,
  });
  dispatch({
    type: "REGISTER",
    payload: res.data,
  });
  dispatch(loadUser());
};

export const logout = () => async (dispatch) => {
  const res = await api.get("/user/logout", { withCredentials: true });
  dispatch({
    type: "LOGOUT",
    payload: res.data,
  });
};

export const getAllUser = () => async (dispatch) => {
  const res = await api.get("/user");

  dispatch({
    type: "ALL_USERS",
    payload: res.data,
  });
};
