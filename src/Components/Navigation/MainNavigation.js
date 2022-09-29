import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <div className={classes.navigation}>
      <img className={classes.logo} src={logo} alt="logo" />
      <button className={classes.button}>
        <p>{props.userData}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={classes.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </button>
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
