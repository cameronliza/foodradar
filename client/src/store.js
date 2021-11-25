import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import setAuthToken from "./utils/setAuthToken";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  // let previousState = currentState;
  currentState = store.getState();
  let previousState = currentState;
  // currentState = store.getState();
  // const info = currentState.user.userDetail;
  // console.log("userdetail sub", info);
  // setAuthToken(info);
  // if the token changes set the value in localStorage and axios headers
  if (previousState.user.userDetail !== currentState.user.userDetail) {
    const info = currentState.user.userDetail;
    setAuthToken(info);
    // console.log(token);
  }
});

export default store;
