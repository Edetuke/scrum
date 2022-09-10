import { Fragment } from "react";
import logo from "../../Logos/scrum-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";
import MenuNav from "./Menu";

const MainNavigation = () => {
  return (
    <Fragment>
      <img className={classes.logo} src={logo} alt="logo" />
      <MenuNav />
    </Fragment>
  );
};

export default MainNavigation;
