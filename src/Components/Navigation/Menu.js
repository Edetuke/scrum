import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const MenuNav = () => {
  return (
    <div className={classes.menu}>
      <Link className={classes.link} to="/facilitator">
        Fasilitator
      </Link>
    </div>
  );
};

export default MenuNav;
