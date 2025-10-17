import percent from "../../assets/images/percent.png";
import styles from "./CarLoanLimit.module.scss";

function CarLoanLimit() {
  return (
    <div className={styles["car-loan"]}>
      <div className="small-container">
        <div className={styles["car-loan__inner"]}>
          <div className={styles["car-loan__left"]}>
            <img
              className={styles["car-loan__img"]}
              src={percent}
              alt="percent"
            />
          </div>
          <div className={styles["car-loan__right"]}>
            <h3 className={styles["car-loan__title"]}>
              До 80% стоимости автомобиля{" "}
            </h3>
            <p className={styles["car-loan__text"]}>
              Получите нужную сумму — быстро и без лишних документов
            </p>
            <div className={styles["car-loan__box"]}>
              <li className={styles["car-loan__box-item"]}>
                Не требуются доп. справки
              </li>
              <li className={styles["car-loan__box-item"]}>
                Не требуется кредитная история
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarLoanLimit;
