import MainPage from "./Components/MainPage/MainPage";
import styles from "./global.css";
import Footer from "../src/Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SpinWheel from "./Components/pages/SpinWheel/SpinWheel";
import Poker from "./Components/pages/Poker/Poker";
import Capacity from "./Components/pages/Capacity/Capacity";
import MainNavigation from "./Components/Navigation/MainNavigation";
import ModalForm from "./Components/ModalForm";
import { useState } from "react";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [username, setUsername] = useState();

  const onCloseModalHandler = () => {
    setModalIsShown(false);
    let username = localStorage.getItem("username");
    if (username !== null) {
      setUsername(username);
    }
  };

  return (
    <div className={styles.content}>
      <MainNavigation
        username={username}
        onShowModal={() => setModalIsShown(true)}
      />

      <Routes>
        <Route path="/scrum" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/fasilitator-election" element={<SpinWheel />} />

        <Route path="/poker" element={<Poker />} />

        <Route path="/capacity-calculator" element={<Capacity />} />
      </Routes>
      {modalIsShown && <ModalForm onClose={onCloseModalHandler} />}
      <Footer />
    </div>
  );
}

export default App;
