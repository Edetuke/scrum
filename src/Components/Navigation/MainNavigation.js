import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import UserLogin from "../Navigation/UserLogin";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  function displayModal() {
    let username = localStorage.getItem("username");
    if (username === null) {
      props.onShowModal();
    }
  }
  return (
    <div className={classes.navigation}>
      <img className={classes.logo} src={logo} alt="logo" />
      <UserLogin username={props.username} />
      <div className={classes.menu}>
        <NavLink to="/about" className={classes.link}>
          About
        </NavLink>
        <NavLink
          to="/fasilitator-election"
          className={classes.link}
          onClick={displayModal}
        >
          Fasilitator election
        </NavLink>
        <NavLink
          to="/capacity-calculator"
          className={classes.link}
          onClick={displayModal}
        >
          capacity calculator
        </NavLink>
        <NavLink to="/poker" className={classes.link} onClick={displayModal}>
          story point poker
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
