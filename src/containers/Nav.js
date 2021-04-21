import Nav from "../components/Nav";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user,
  }
};

export default connect(mapStateToProps)(Nav);