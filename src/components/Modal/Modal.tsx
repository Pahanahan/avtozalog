import { useState, useContext, type FormEvent } from "react";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import ModalContext from "../../context/ModalContext";

import close from "../../assets/icons/close.svg";
import styles from "./Modal.module.scss";

function Modal() {
  const [userName, setUserName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const ctx = useContext(ModalContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    ctx.hideModal();
  };

  const handleClose = () => {
    ctx.hideModal();
  };

  const modalCss = ctx.isOpen ? styles["modal"] : styles["modal--hiden"];

  return (
    <div className={modalCss}>
      <div className={styles["modal__box"]}>
        <button
          onClick={handleClose}
          type="button"
          className={styles["modal__close"]}
        >
          <img className={styles["modal__img"]} src={close} alt="close" />
        </button>
        <h3 className={styles["modal__title"]}>
          Оставьте заявку и получите займ в течение 30 минут
        </h3>
        <ul className={styles["modal__list"]}>
          <li className={styles["modal__list-item"]}>
            Обсудите с менеджером подходящие условия
          </li>
          <li className={styles["modal__list-item"]}>
            Получите деньги на карту в день обращения
          </li>
        </ul>
        <form
          onSubmit={(e: FormEvent) => handleSubmit(e)}
          className={styles["modal__form"]}
        >
          <div className={styles["modal__inputs"]}>
            <div className={styles["modal__input"]}>
              <Input
                onSetUserName={setUserName}
                value={userName}
                title="Ваше имя"
                type="text"
                name="name"
                placeholder="Имя"
              />
            </div>
            <div className={styles["modal__input"]}>
              <Input
                onSetPhone={setPhone}
                value={phone}
                title="Ваше имя"
                type="number"
                name="phone"
                placeholder="+7 (__) ___-__-__"
              />
            </div>
          </div>
          <Button width="100%" type="submit">
            Оставить заявку
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
