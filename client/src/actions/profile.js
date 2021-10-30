import api from "../utils/api";

export const getProfile = (userId) => async (dispatch) => {
  const res = await api.get(`profile/${userId}`);

  dispatch({
    type: "GET_PROFILE",
    payload: res.data,
  });
};

export const setProfile = (FormData) => async (dispatch) => {
  const res = await api.post("/", FormData, { withCredentials: true });

  dispatch({
    type: "SET_PROFILE",
    payload: res.data,
  });
};

export const deleteAccount = () => async (dispatch) => {
  const res = await api.delete("/", { withCredentials: true });

  dispatch({
    type: "DELETE_PROFILE",
    payload: res.data,
  });
};
