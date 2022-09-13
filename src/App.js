import React, { Fragment } from "react";
import MainPage from "./Components/MainPage/MainPage";
import styles from "./global.css";

function App() {
  return (
    <div className={styles.content}>
      <Fragment>
        <MainPage />
      </Fragment>
    </div>
  );
}

export default App;
