import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Map from "./Map";

const BusinessDetail = (props) => {
  const id = props.match.params.id;
  const listing = props.listings.find((listing) => listing.id === Number(id));
  console.log(id);
  console.log(props.listings);
  return (
    <Container maxWidth="sm">
      <Typography className="detail-container">
        <h2>{listing["name"]}</h2>
        <h5>Address:</h5> <p> {listing["address"]}</p>
        <h5>Hours:</h5> <p> {listing["hours"]} </p>
        <h5>Description:</h5> <p> "{listing["description"]}"</p>
      </Typography>
      <Map className="map" lat={listing.lat} lng={listing.lng} />
    </Container>
  );
};

export default BusinessDetail;
