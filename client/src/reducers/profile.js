const initialState = {
  loading: true,
  profile: null,
  profiles: [],
};

export default function Profile(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PROFILE":
    case "SET_PROFILE":
      return { ...state, user: payload, loading: false };
    case "DELETE_PROFILE":
      return { ...state, profile: null, loading: false };
    default:
      return state;
  }
}
