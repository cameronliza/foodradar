const initialState = {
  isAuth: false,
  loading: true,
  user: null,
  users: [],
};

export default function user(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_USER":
      return { ...state, isAuth: true, loading: false, user: payload };
    case "LOGIN":
    case "REGISTER":
      return { ...state, ...payload, isAuth: true, loading: false };
    case "ALL_USERS":
      return { ...state, users: payload, loading: false };
    case "AUTH_ERROR":
    case "LOGOUT":
      return { ...state, isAuth: false, user: null, loading: false };
    default:
      return state;
  }
}
