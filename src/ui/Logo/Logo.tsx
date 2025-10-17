import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to={"/"} className={styles["logo"]}>
      <div className={styles["logo__image"]}></div>
    </Link>
  );
}

export default Logo;
