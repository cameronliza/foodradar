const { combineReducers } = require("redux");
const user = require("./user");

const rootReducer = combineReducers({ user });

module.exports = rootReducer;
