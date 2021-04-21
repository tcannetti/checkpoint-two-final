import Login from "../components/Login";
import { connect } from "react-redux";
import { deleteListing, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (id) => dispatch(deleteListing(id)),
    setUser: (username) => dispatch(setUser(username)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);