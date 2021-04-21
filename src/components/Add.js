import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";

const Add = (props) => {
  const [business, setBusiness] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
    lat: 0,
    lng: 0,
    redirect: false,
  });

  const handleTextChange = (e) => {
    const newBusiness = { ...business };
    newBusiness[e.target.id] = e.target.value;
    setBusiness(newBusiness);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...business };
    payload.id = uuidv4();
    props.addBusiness(payload);
    setBusiness({
      redirect: true,
    });
  };

  return (
    <Container maxWidth="sm" className="add-form">
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleTextChange}
          placeholder={"Name"}
          fullWidth={true}
          id="name"
        />
        <TextField
          onChange={handleTextChange}
          placeholder={"Address"}
          fullWidth={true}
          id="address"
        />
        <TextField
          onChange={handleTextChange}
          placeholder={"Hours"}
          fullWidth={true}
          id="hours"
        />
        <TextField
          onChange={handleTextChange}
          placeholder={"Description"}
          fullWidth={true}
          id="description"
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          size="small"
          style={{
            paddingLeft: 150,
            paddingRight: 150,
            marginTop: 25,
            marginBottom: 30,
            marginLeft: 100,
          }}
          onClick={handleSubmit}
        >
          Save
        </Button>
        {business.redirect && <Redirect to="/" />}
      </form>
    </Container>
  );
};

export default Add;
