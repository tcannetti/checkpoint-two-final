import { addListing } from '../redux/actions';
import Add from '../components/Add';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);