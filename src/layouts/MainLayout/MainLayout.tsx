import { Routes, Route } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles["app"]}>
      <Modal />
      <Header />
      <div className={styles["content"]}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
