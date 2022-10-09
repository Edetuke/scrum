import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import UserLogin from "../Navigation/UserLogin";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const MainNavigation = (props) => {
  const [isLoggedIn, setLogin] = useState();

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);
  return (
    <div className={classes.navigation}>
      <img className={classes.logo} src={logo} alt="logo" />
      {isLoggedIn ? <UserLogin /> : null}
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
        <NavLink
          to="/capacity-calculator"
          className={classes.link}
          onClick={props.onShowModal}
        >
          capacity calculator
        </NavLink>
        <NavLink
          to="/poker"
          className={classes.link}
          onClick={props.onShowModal}
        >
          story point poker
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
