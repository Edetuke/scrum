import logo from "../../Logos/scrum-logo.svg";
import classes from "../Navigation/MainNavigation.module.css";

const MainNavigation = () => {
  return <img className={classes.logo} src={logo} alt="logo" />;
};

export default MainNavigation;
