import twoPercent from "../../assets/images/two-percent.png";
import styles from "./MounthlyRate.module.scss";

function MonthlyRate() {
  return (
    <div className={styles["monthly-rate"]}>
      <div className="small-container">
        <div className={styles["monthly-rate__inner"]}>
          <div className={styles["monthly-rate__left"]}>
            <h3 className={styles["monthly-rate__title"]}>
              Ставка от 2% в месяц
            </h3>
            <p className={styles["monthly-rate__text"]}>
              Низкий процент — больше выгоды для вас. Прозрачные условия,
              никаких скрытых платежей.
            </p>
          </div>
          <div className={styles["monthly-rate__right"]}>
            <img
              className={styles["monthly-rate__img"]}
              src={twoPercent}
              alt="2 percent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyRate;
