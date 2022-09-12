import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const MenuNav = () => {
  return (
    <div className={classes.menu}>
      <Link className={classes.link}> About</Link>
      <Link className={classes.link}> Fasilitator election </Link>
      <Link className={classes.link}> capacity calculator </Link>
      <Link className={classes.link}> story point poker </Link>
    </div>
  );
};

export default MenuNav;
