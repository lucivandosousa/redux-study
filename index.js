const { createStore } = require("redux");

// Action Types
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

// Action Creators
const changeUser = (user) => ({
  type: CHANGE_USER,
  info: "Change user",
  payload: user
});

const logout = () => ({
  type: LOGOUT,
  info: "Logout"
});

// Reducer
function userReducer(state = { user: "", isLogged: false }, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload,
        isLogged: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLogged: false
      };
    default:
      return state;
  }
}

// Store
const store = createStore(userReducer);

console.log("Initial state: ", store.getState());

store.dispatch(changeUser("John"));
console.log("After change user: ", store.getState());

store.dispatch(logout());
console.log("After logout: ", store.getState());