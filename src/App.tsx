import { useState } from "react";

import MainLayout from "./layouts/MainLayout/MainLayout";
import ModalContext from "./context/ModalContext.ts";

import "./assets/styles/fonts.css";
import "./assets/styles/reset.css";
import "./App.css";

function App() {
  const [isOpen, setModalState] = useState<boolean>(false);

  const showModal = () => {
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        showModal,
        hideModal,
      }}
    >
      <MainLayout />
    </ModalContext.Provider>
  );
}

export default App;
