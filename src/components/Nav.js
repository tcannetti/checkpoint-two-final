import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import cookie from "cookie";

export default function Nav(props) {
  const cookies = cookie.parse(document.cookie);

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="nav-bar">
          <Typography variant="h6" className="nav-title">
            ATX Small Business App
          </Typography>
          <ul className="nav-list">
            <Button color="inherit" className="nav-list-item">
              <Link to="/">Listing</Link>
            </Button>
            <li>
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button color="inherit" className="nav-list-item">
                    <Link to="/add">Add</Link>
                  </Button>
                  <Button
                    color="inherit"
                    className="nav-list-item"
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/login");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li color="inherit" className="nav-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Button
                  color="inherit"
                  className="nav-list-item"
                  onClick={() => {
                    document.cookie = "loggedIn=";
                    window.location.replace("/login");
                  }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn && (
          <span>
            Welcome <span style={{ color: "hotpink" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
}
