export const addListing = (listing) => {
  return (dispatch) => {
    fetch(`https://maps.google.com/maps/api/geocode/json?address=${listing.address}&key=AIzaSyBnSX01PranxI4L-iRi1mOkMkcMc72nDec`)
    .then((res) => res.json())
    .then((response) => {
      listing.lat = response.results[0].geometry.location.lat;
      listing.lng = response.results[0].geometry.location.lng;
      const action = {
        type: "ADD_LISTING",
        value: listing,
      };
      dispatch(action);
    });
  };
};

export const deleteListing = (id) => {
  return {
    type: "DELETE_LISTING",
    value: id,
  };
};

export const loggedIn = (Boolean) => {
  return {
    type: "LOGGED_IN",
    value: Boolean,
  };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    value: username,
  };
};

