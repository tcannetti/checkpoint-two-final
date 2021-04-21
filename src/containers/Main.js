import Main from "../components/Main";
import { deleteListing } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (id) => dispatch(deleteListing(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);