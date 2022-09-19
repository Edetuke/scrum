import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.menu}>
        <Link to="/about" className={classes.link}>
          {" "}
          About
        </Link>
        <Link to="/fasilitator" className={classes.link}>
          {" "}
          Fasilitator election{" "}
        </Link>
        <Link to="/capacity" className={classes.link}>
          {" "}
          capacity calculator{" "}
        </Link>
        <Link to="/poker" className={classes.link}>
          {" "}
          story point poker{" "}
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
