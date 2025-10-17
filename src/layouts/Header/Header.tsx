import { useState } from "react";

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Menu from "../../components/Menu/Menu";

import styles from "./Header.module.scss";

function Header() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <header className={styles["header"]}>
      <HeaderTop
        onMenuVisible={menuVisible}
        onSetMenuVisible={setMenuVisible}
      />
      <Menu onMenuVisible={menuVisible} />
    </header>
  );
}

export default Header;
