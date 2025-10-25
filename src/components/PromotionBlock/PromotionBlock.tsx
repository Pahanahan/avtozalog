import Button from "../../ui/Button/Button";
import { useWindowWidth } from "../../customHooks/useWindowWidth";

import styles from "./PromotionBlock.module.scss";

interface PromotionBlockProps {
  title: string;
  img: string;
  text?: string;
  ul?: string[];
  button?: string;
  blue?: boolean;
  orange?: boolean;
}

function PromotionBlock({
  title,
  text,
  img,
  ul,
  button,
  blue,
  orange,
}: PromotionBlockProps) {
  const windowWidth = useWindowWidth();
  let backgroundLiner: string;

  if (blue && windowWidth >= 1000) {
    backgroundLiner = `linear-gradient(
      245deg,
      #56abee 0%,
      #3994db 40%,
      transparent 40%
    )`;
  } else if (orange && windowWidth >= 1000) {
    backgroundLiner = `linear-gradient(
      115deg,
      #ff8a1e 0%,
      #ff621e 40%,
      transparent 40%
    )`;
  } else if (blue && windowWidth < 1000) {
    backgroundLiner = `linear-gradient(
        310deg,
        #56abee 0%,
        #3994db 43%,
        transparent 43%
      )`;
  } else if (orange && windowWidth < 1000) {
    backgroundLiner = `linear-gradient(
        57deg,
        #ff8a1e 0%,
        #ff621e 40%,
        transparent 40%
      )`;
  }

  let order: 0 | 1;

  if (blue && windowWidth >= 1000) {
    order = 0;
  } else if (blue && windowWidth < 1000) {
    order = 0;
  } else if (orange && windowWidth >= 1000) {
    order = 1;
  } else if (orange && windowWidth < 1000) {
    order = 0;
  }

  let paddingRight: "100px" | "0";

  if (blue && windowWidth >= 1000) {
    paddingRight = "100px";
  } else if (blue && windowWidth < 1000) {
    paddingRight = "0";
  }

  let paddingLeft: "100px" | "0";

  if (orange && windowWidth >= 1000) {
    paddingLeft = "100px";
  } else if (orange && windowWidth < 1000) {
    paddingLeft = "0";
  }

  const textAlign = blue ? "start" : "end";
  const flexStartOrEnd = blue ? "flex-start" : "flex-end";

  const textElement = text && (
    <p className={styles["promotion__text"]}>{text}</p>
  );

  const liElements =
    ul &&
    ul.map((li) => {
      return (
        <div
          key={li}
          className={styles["promotion__list-box"]}
          style={{ justifyContent: flexStartOrEnd }}
        >
          <span></span>
          <li className={styles["promotion__list-item"]}>{li}</li>
        </div>
      );
    });

  const ulElement = ul && (
    <ul className={styles["promotion__list"]}>{liElements}</ul>
  );

  const buttonElement = button && <Button type="button">{button}</Button>;

  return (
    <div className={styles["promotion"]}>
      <div
        className={styles["promotion__inner"]}
        style={{ background: backgroundLiner! }}
      >
        <div
          className={styles["promotion__box"]}
          style={{ order: order!, textAlign: textAlign }}
        >
          <h3 className={styles["promotion__title"]}>{title}</h3>
          {textElement}
          {ulElement}
          {buttonElement}
        </div>
        <div className={styles["promotion__box-image"]}>
          <img
            className={styles["promotion__img"]}
            src={img}
            alt="image"
            style={{ paddingLeft: paddingLeft!, paddingRight: paddingRight! }}
          />
        </div>
      </div>
    </div>
  );
}

export default PromotionBlock;
