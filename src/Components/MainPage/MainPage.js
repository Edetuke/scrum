import { Fragment } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import AboutCapacity from "./AboutCapacity";

import AboutFacilitator from "./AboutFacilitator";
import AboutPoker from "./AboutPoker";

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <AboutFacilitator />
      <AboutCapacity />
      <AboutPoker />
    </Fragment>
  );
};

export default MainPage;
