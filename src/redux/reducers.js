import { combineReducers } from 'redux'

const listings = (state = [], action) => {
  switch(action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "DELETE_LISTING":
      const listings = [...state];
      listings.splice(action.value, 1);
      return listings;
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return (state = action.value);
    default:
      return state;
  }
}

export default combineReducers({ user, listings, loggedIn });