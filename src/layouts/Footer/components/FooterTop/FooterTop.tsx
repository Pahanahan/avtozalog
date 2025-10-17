import { Link } from "react-router-dom";

import LogoFooter from "../../../../ui/Logo/LogoFooter";

import styles from "./FooterTop.module.css";

function FooterTop() {
  return (
    <div className={styles["footer-top"]}>
      <LogoFooter />
      <div className={styles["footer-top__address"]}>
        <div className={styles["footer-top__box"]}>
          <div className={styles["footer-top__title"]}>Телефон</div>
          <a href="tel: +79274792020" className={styles["footer-top__tel"]}>
            8 (927) 479 20 20
          </a>
        </div>
        <div className={styles["footer-top__box"]}>
          <div className={styles["footer-top__title"]}>Адрес</div>
          <p className={styles["footer-top__text-addr"]}>
            Республика Татарстан, г. Набереные Челны, 33/1, офис 1 (Чулман 10В)
          </p>
        </div>
      </div>
      <div className={styles["footer-top__box"]}>
        <div className={styles["footer-top__title"]}>Навигация</div>
        <Link to={"/"} className={styles["footer-top__link"]}>
          О нас
        </Link>
        <Link to={"/"} className={styles["footer-top__link"]}>
          Документы
        </Link>
        <Link to={"/"} className={styles["footer-top__link"]}>
          Деньги под залог ПТС
        </Link>
        <Link to={"/"} className={styles["footer-top__link"]}>
          Деньги под залог авто
        </Link>
        <Link to={"/"} className={styles["footer-top__link"]}>
          Деньги под залог ПТС . лицам
        </Link>
        <Link to={"/"} className={styles["footer-top__link"]}>
          Контакты
        </Link>
      </div>
      <div className={styles["footer-top__box"]}>
        <div className={styles["footer-top__title"]}>
          Информация на сайте не является публичной офертой и носит
          информационно-справочный характер. Все права защищены. ©«Avtozalog116»
          2025
        </div>
        <p className={styles["footer-top__text"]}>
          Согласие на обработку персональных данных
        </p>
        <p className={styles["footer-top__text"]}>
          Политика обработки персональных данных
        </p>
      </div>
    </div>
  );
}

export default FooterTop;
