import { Link } from "react-router-dom";

import styles from "./LogoFooter.module.css";

function LogoFooter() {
  return (
    <Link to={"/"} className={styles["logo"]}>
      <div className={styles["logo__image"]}></div>
    </Link>
  );
}

export default LogoFooter;
