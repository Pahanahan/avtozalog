import { createContext } from "react";

const ModalContext = createContext({
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
});

export default ModalContext;
