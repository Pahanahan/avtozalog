import { useState } from "react";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

import styles from "./LoanCalculator.module.scss";

function LoanCalculator() {
  const [loanSum, setLoanSum] = useState<string>("100000");
  const [userName, setUserName] = useState<string>("");
  const [month, setMonth] = useState<string>("1");
  const [phone, setPhone] = useState<string>("");

  // console.log(loanSum, userName, month, phone);

  return (
    <div className={styles["calculator"]}>
      <div className="small-container">
        <div className={styles["calculator__inner"]}>
          <h2 className={styles["calculator__title"]}>
            Рассчитайте свой платёж и получите займ в течение 30 минут
          </h2>
          <ul className={styles["calculator__list"]}>
            <li className={styles["calculator__list-item"]}>
              Оставьте заявку на сайте или позвоните по телефону
            </li>
            <li className={styles["calculator__list-item"]}>
              Обсудите с менеджером подходящие условия
            </li>
            <li className={styles["calculator__list-item"]}>
              Получите деньги на карту в день обращения
            </li>
          </ul>
          <form className={styles["calculator__form"]}>
            <div className={styles["calculator__form-item"]}>
              <Input
                value={String(loanSum)}
                onSetLoanSum={setLoanSum}
                name="sum"
                type="range"
                title="Необходимая сумма"
                min="100000"
                max="10000000"
                step="100000"
                slider={true}
              />
            </div>
            <div className={styles["calculator__form-item"]}>
              <Input
                value={userName}
                onSetUserName={setUserName}
                name="name"
                type="string"
                title="Ваше имя"
                placeholder="Имя"
              />
            </div>
            <div className={styles["calculator__form-item"]}>
              <Input
                value={String(month)}
                onSetMonth={setMonth}
                name="month"
                type="range"
                title="Срок"
                min="1"
                max="36"
                step="1"
                slider={true}
              />
            </div>
            <div className={styles["calculator__form-item"]}>
              <Input
                value={phone}
                onSetPhone={setPhone}
                name="phone"
                type="number"
                title="Номер телефона"
                placeholder="+7 (__) ___-__-__"
              />
            </div>
          </form>
          <p className={styles["calculator__text"]}>
            Ваш платеж- 2% в месяц: <span>2000 ₽</span>
          </p>
          <div className={styles["calculator__button"]}>
            <Button type="submit">Получить займ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;
