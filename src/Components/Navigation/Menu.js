import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const MenuNav = () => {
  return (
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
  );
};

export default MenuNav;
