import React, { Fragment } from "react";
import MainPage from "./Components/MainPage/MainPage";
import styles from "./global.css";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className={styles.content}>
      <Fragment>
        <MainPage />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
