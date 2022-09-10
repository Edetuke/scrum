import React, { Fragment } from "react";

import MainNavigation from "./Components/Navigation/MainNavigation";
import SpinWheel from "./Components/SpinWheel/SpinWheel";
import styles from "./global.css";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <SpinWheel />
    </Fragment>
  );
}

export default App;
