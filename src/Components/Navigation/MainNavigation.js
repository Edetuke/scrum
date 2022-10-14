import React from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import UserLogin from "../Navigation/UserLogin";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

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
      <div className={classes.login}>
        <UserLogin username={props.username} onClick={props.onShowModal} />
      </div>
      <div className={classes.menu}>
        <div className={classes.open}>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.menubtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
        <div className={classes.close}>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.closebtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
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
