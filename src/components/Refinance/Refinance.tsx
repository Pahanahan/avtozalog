import { useContext, useMemo } from "react";

import Button from "../../ui/Button/Button";
import ModalContext from "../../context/ModalContext";
import { useWindowWidth } from "../../customHooks/useWindowWidth";
import { getColor } from "./helpers/getColor";

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

  const listItems = useMemo(
    () =>
      ul && ulColor
        ? ul.map((li) => {
            return (
              <li
                key={li}
                style={{
                  color: getColor(windowWidth, ulColor),
                }}
                className={styles["refinance__list-item"]}
              >
                {li}
              </li>
            );
          })
        : null,
    [ul, ulColor, windowWidth]
  );

  const divItems = useMemo(
    () =>
      div && divColor
        ? div.map((item) => {
            return (
              <div
                key={item}
                style={{ color: getColor(windowWidth, divColor) }}
                className={styles["refinance__box-item"]}
              >
                <span className={styles["refinance__box-item-after"]}></span>
                {item}
              </div>
            );
          })
        : null,
    [div, divColor, windowWidth]
  );

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
                  color: getColor(windowWidth, titleColor),
                }}
                className={styles["refinance__title"]}
              >
                {title}
              </h1>
              {div && (
                <div className={styles["refinance__box"]}>{divItems!}</div>
              )}
              <p
                style={{
                  color: getColor(windowWidth, textColor),
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
