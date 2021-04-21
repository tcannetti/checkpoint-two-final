import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Map from "./Map";

const BusinessDetail = (props) => {
  const id = props.match.params.id;
  const listing = props.listings.find((listing) => listing.id == id);
  console.log(id);
  return (
    <Container style={{ height: "50vh", width: "45vw" }}>
      <Typography className="biz-paper">
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
