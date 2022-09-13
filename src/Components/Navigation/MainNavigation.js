import React from "react";
import { Fragment } from "react";
import logo from "../../Logos/screasy-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import MenuNav from "./Menu";
import AboutBackround from "../../Logos/images/about-backroud.jpg";
import About from "../MainPage/About";

const MainNavigation = () => {
  return (
    <Fragment>
      <img className={classes.backround} src={AboutBackround} alt="backround" />
      <img className={classes.logo} src={logo} alt="logo" />
      <MenuNav />
      <About />
    </Fragment>
  );
};

export default MainNavigation;
