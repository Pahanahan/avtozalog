import { useContext } from "react";

import Button from "../../ui/Button/Button";
import ModalContext from "../../context/ModalContext";

import refinanceBg from "../../assets/images/refinance-bg.jpg";
import styles from "./Refinance.module.scss";

function Refinance() {
  const ctx = useContext(ModalContext);

  return (
    <div className={styles["refinance"]}>
      <div className="big-container">
        <div className={styles["refinance__bg"]}>
          <div className="small-container">
            <div className={styles["refinance__inner"]}>
              <h1 className={styles["refinance__title"]}>
                Рефинансирование займов по ПТС
              </h1>
              <div className={styles["refinance__box"]}>
                <div className={styles["refinance__box-item"]}>
                  <span className={styles["refinance__box-item-after"]}></span>
                  Быстрое одобрение
                </div>
                <div className={styles["refinance__box-item"]}>
                  <span className={styles["refinance__box-item-after"]}></span>
                  Бесплатная консультация
                </div>
                <div className={styles["refinance__box-item"]}>
                  <span className={styles["refinance__box-item-after"]}></span>
                  Безопасная сделка
                </div>
              </div>
              <p className={styles["refinance__text"]}>
                Если вы взяли кредит, но слишком высокие ежемесячные выплаты,
                рефинансирование кредита под залог авто может стать хорошим
                решением для вас. Мы полностью закроем Ваш долг перед другой
                финансовой организацией, а в случае если Вам необходимо
                увеличить сумму финансирования, то предоставим денежные
                средства.
              </p>
              <img
                className={styles["refinance__img"]}
                src={refinanceBg}
                alt="car"
              />
              <ul className={styles["refinance__list"]}>
                <li className={styles["refinance__list-item"]}>
                  -1% от вашей процентной ставки
                </li>
                <li className={styles["refinance__list-item"]}>
                  Полная конфиденциальность
                </li>
                <li className={styles["refinance__list-item"]}>
                  Быстрое переоформление
                </li>
                <li className={styles["refinance__list-item"]}>
                  Только выгодные условия
                </li>
              </ul>
              <div className={styles["refinance__button"]}>
                <Button onClick={ctx.showModal} type="button">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refinance;
