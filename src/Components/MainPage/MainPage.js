import { Fragment } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import AboutCapacity from "./AboutCapacity";

import AboutFacilitator from "./AboutFacilitator";

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <AboutFacilitator />
      <AboutCapacity />
    </Fragment>
  );
};

export default MainPage;
