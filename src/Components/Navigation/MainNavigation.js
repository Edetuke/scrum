import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <div className={classes.navigation}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.menu}>
        <NavLink to="/about" className={classes.link}>
          About
        </NavLink>
        <NavLink
          to="/fasilitator-election"
          className={classes.link}
          onClick={props.onShowModal}
        >
          Fasilitator election
        </NavLink>
        <NavLink to="/capacity-calculator" className={classes.link}>
          capacity calculator
        </NavLink>
        <NavLink to="/poker" className={classes.link}>
          story point poker
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
