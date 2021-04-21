import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Main = (props) => {
  const cookies = cookie.parse(document.cookie);

  const deleteButton = (id) => {
    if (cookies.loggedIn) {
      return (
        <TableCell>
          <DeleteIcon
            onClick={() => props.deleteListing(id)}
            style={{ color: "red" }}
          />
        </TableCell>
      );
    }
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, id) => (
            <TableRow key={listing.address}>
              <TableCell style={{ color: "mediumblue" }}>
                <Link to={`/business/${listing.id}`}>{listing.name}</Link>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>{listing.address}</TableCell>
              {deleteButton(id)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Main;
