import { Fragment } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import About from "./About";

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <About />
    </Fragment>
  );
};

export default MainPage;
