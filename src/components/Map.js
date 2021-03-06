import React, { Component } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GoogleMapReact from "google-map-react";
import { useGoogleMaps } from "react-hook-google-maps";

const AnyReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon />
  </div>
);

class Map extends Component {
  render() {
    const defaultProps = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      },

      zoom: 11,
    };

    return (
      <div style={{ height: "40vh", width: "40vw", paddingBottom: "30" }}>
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBnSX01PranxI4L-iRi1mOkMkcMc72nDec" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
