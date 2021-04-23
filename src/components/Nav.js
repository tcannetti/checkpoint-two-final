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
        <Toolbar className="nav-toolbar">
          <Typography variant="h6" className="list-title">
            ATX Small Business App
          </Typography>
          <ul className="list-list">
            <Button color="inherit" className="list-list-item">
              <Link to="/">Listing</Link>
            </Button>
            <li>
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button color="inherit" className="list-list-item">
                    <Link to="/add">Add</Link>
                  </Button>
                  <Button color="inherit" className="list-list-item" onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/login");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li color="inherit" className="list-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Button color="inherit" className="list-list-item" onClick={() => {
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
            Welcome <span style={{ color: "orange" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
}
