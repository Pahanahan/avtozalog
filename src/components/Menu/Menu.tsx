import { useState } from "react";
import { Link } from "react-router-dom";

import phone from "../../assets/icons/phone.svg";
import styles from "./Menu.module.scss";

interface MenuProps {
  onMenuVisible: boolean;
}

function Menu({ onMenuVisible }: MenuProps) {
  const [visibleBoxMoney, setVisibleBoxMoney] = useState<boolean>(false);
  const [visibleBoxSales, setVisibleBoxSales] = useState<boolean>(false);

  return (
    <nav
      className={`${styles["menu"]} ${
        onMenuVisible ? styles["menu--visible"] : ""
      }`}
    >
      <div className="small-container">
        <div className={styles["menu__inner"]}>
          <div className={styles["menu__items"]}>
            <Link
              to="/"
              onMouseEnter={() => setVisibleBoxMoney(true)}
              onMouseLeave={() => setVisibleBoxMoney(false)}
              className={styles["menu__link"]}
            >
              Деньги под залог
              <div
                className={`${styles["menu__links-bottom"]} ${
                  visibleBoxMoney ? styles["menu__links-bottom--visible"] : ""
                }`}
              >
                <div className={styles["menu__link-bottom-money"]}>ПТС</div>
                <div className={styles["menu__link-bottom-money"]}>
                  Автомобиля
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  Мотоцикла
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  Спецтехники
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  Водного транспорта
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  Автобуса
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  ПТС для граждан СНГ
                </div>
                <div className={styles["menu__link-bottom-money"]}>
                  ПТС юридическим лицам
                </div>
              </div>
            </Link>
            <Link to="/" className={styles["menu__link"]}>
              Рефинансирование
            </Link>
            <Link to="/" className={styles["menu__link"]}>
              Автомаркет
            </Link>
            <Link to="/" className={styles["menu__link"]}>
              Займ по доверенности
            </Link>
            <Link to="/" className={styles["menu__link"]}>
              О нас
            </Link>
            <Link
              to="/"
              onMouseEnter={() => setVisibleBoxSales(true)}
              onMouseLeave={() => setVisibleBoxSales(false)}
              className={styles["menu__link"]}
            >
              Акции
              <div
                className={`${styles["menu__links-bottom"]} ${
                  visibleBoxSales ? styles["menu__links-bottom--visible"] : ""
                }`}
              >
                <div className={styles["menu__link-bottom-sales"]}>
                  <span>5000 ₽</span> за друга
                </div>
                <div className={styles["menu__link-bottom-sales"]}>
                  Нашли дешевле? Снизим еще!
                </div>
                <div className={styles["menu__link-bottom-sales"]}>
                  Перезаключите договор с выгодой
                </div>
              </div>
            </Link>
            <Link to="/" className={styles["menu__link"]}>
              Контакты
            </Link>
          </div>
          <div className={styles["menu__phone"]}>
            <img src={phone} alt="phone" />
            <div className={styles["menu__phone-text"]}>Заказать звонок</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
