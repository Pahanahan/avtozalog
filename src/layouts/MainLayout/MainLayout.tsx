import { Routes, Route } from "react-router-dom";
import { createPortal } from "react-dom";

import Modal from "../../components/Modal/Modal";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import BuyAuto from "../../pages/BuyAuto/BuyAuto";
import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles["app"]}>
      {createPortal(<Modal />, document.getElementById("modal")!)}
      <Header />
      <div className={styles["content"]}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/buy_auto" element={<BuyAuto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
