import React from "react";
import { Fragment } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import AboutCapacity from "./AboutCapacity";
import About from "./About";
import AboutFacilitator from "./AboutFacilitator";
import AboutPoker from "./AboutPoker";
import Backroundimg from "../../Logos/images/about-backroud.jpg";
import classes from "./MainPage.module.css";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <Fragment>
      <img
        className={classes.backroundimg}
        src={Backroundimg}
        alt="backround-img"
      />
      <MainNavigation />
      <About />
      <AboutFacilitator />
      <AboutCapacity />
      <AboutPoker />
    </Fragment>
  );
};

export default MainPage;
