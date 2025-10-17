import Logo from "../../ui/Logo/Logo";

import whatsup from "../../assets/icons/whatsup.svg";
import point from "../../assets/icons/point.svg";
import pointSmall from "../../assets/icons/point-small.svg";
import burger from "../../assets/icons/burger.svg";
import styles from "./HeaderTop.module.scss";

interface HeaderTopProps {
  onMenuVisible: boolean;
  onSetMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderTop({ onMenuVisible, onSetMenuVisible }: HeaderTopProps) {
  return (
    <div className={styles["top"]}>
      <div className={styles["top__point-small"]}>
        <img src={pointSmall} alt="point" />
        <p className={styles["top__point-text"]}>Набережные Челны</p>
      </div>
      <div className="small-container">
        <div className={styles["top__inner"]}>
          <Logo />
          <div className={styles["top__right"]}>
            <div className={styles["top__right-box"]}>
              <img
                className={styles["top__rigth-point-img"]}
                src={point}
                alt="point"
              />
              <p className={styles["top__text"]}>Набережные Челны</p>
            </div>
            <div className={styles["top__right-box"]}>
              <img
                className={styles["top__right-whatsup-img"]}
                src={whatsup}
                alt="whatsup"
              />
              <p className={styles["top__phone"]}>8 (927) 479 20 20</p>
            </div>
            <button
              onClick={() => onSetMenuVisible(!onMenuVisible)}
              className={styles["burger"]}
            >
              <img src={burger} alt="burger menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
