import { useContext } from "react";

import Button from "../../ui/Button/Button";
import ModalContext from "../../context/ModalContext";
import { useWindowWidth } from "../../customHooks/useWindowWidth";

import styles from "./Refinance.module.scss";

interface RefinanceProps {
  title: string;
  titleColor: string;
  div?: string[];
  divColor?: string;
  text: string;
  textColor: string;
  ul?: string[];
  ulColor?: string;
  note?: string;
  noteColor?: string;
  img: string;
}

function Refinance({
  title,
  titleColor,
  div,
  divColor,
  text,
  textColor,
  ul,
  ulColor,
  img,
}: RefinanceProps) {
  const ctx = useContext(ModalContext);

  const windowWidth = useWindowWidth();

  let listItems;
  let divItems;

  if (ul) {
    listItems = ul.map((li) => {
      return (
        <li
          key={li}
          style={{
            color: windowWidth >= 756 ? ulColor : "#424242",
          }}
          className={styles["refinance__list-item"]}
        >
          {li}
        </li>
      );
    });
  }

  if (div) {
    divItems = div.map((item) => {
      return (
        <div
          key={item}
          style={{ color: windowWidth >= 756 ? divColor : "#424242" }}
          className={styles["refinance__box-item"]}
        >
          <span className={styles["refinance__box-item-after"]}></span>
          {item}
        </div>
      );
    });
  }

  return (
    <div
      className={styles["refinance"]}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="big-container">
        <div className={styles["refinance__bg"]}>
          <div className="small-container">
            <div className={styles["refinance__inner"]}>
              <h1
                style={{
                  color: windowWidth >= 756 ? titleColor : "#424242",
                }}
                className={styles["refinance__title"]}
              >
                {title}
              </h1>
              {div && (
                <div className={styles["refinance__box"]}>{divItems}</div>
              )}
              <p
                style={{
                  color: windowWidth >= 756 ? textColor : "#424242",
                }}
                className={styles["refinance__text"]}
              >
                {text}
              </p>
              <img
                className={styles["refinance__img"]}
                src={img}
                alt="vehicle"
              />
              {ul && <ul className={styles["refinance__list"]}>{listItems}</ul>}
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
