import { Fragment } from "react";
import MainNavigation from "../Navigation/MainNavigation";

import AboutFacilitator from "./AboutFacilitator";

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <AboutFacilitator />
    </Fragment>
  );
};

export default MainPage;
