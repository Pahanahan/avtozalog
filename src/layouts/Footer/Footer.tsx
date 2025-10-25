import FooterTop from "./components/FooterTop/FooterTop";
import FooterBottom from "./components/FooterBottom/FooterBottom";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className="small-container">
        <div className={styles["footer__inner"]}>
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
