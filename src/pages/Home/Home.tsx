import Refinace from "../../components/Refinance/Refinance";
import BoxForTwoComponents from "../../components/BoxForTwoComponents/BoxForTwoComponents";
import PromotionBlockProps from "../../components/PromotionBlock/PromotionBlock";
import LoanCalculator from "../../components/LoanCalculator/LoanCalculator";
import VehicleCollateral from "../../components/VehicleCollateral/VehicleCollateral";
import Questions from "../../components/Questions/Questions";
import { refinanceData } from "../../data/refinanceData";

import percent from "../../assets/images/percent.png";
import twoPercent from "../../assets/images/two-percent.png";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles["home"]}>
      <Refinace
        title={refinanceData[0].title}
        titleColor={refinanceData[0].titleColor}
        div={refinanceData[0].div}
        divColor={refinanceData[0].divColor}
        text={refinanceData[0].text}
        textColor={refinanceData[0].textColor}
        ul={refinanceData[0].ul}
        ulColor={refinanceData[0].ulColor}
        img={refinanceData[0].img}
      />
      <BoxForTwoComponents>
        <PromotionBlockProps
          title="Ставка от 2% в месяц"
          text="Низкий процент — больше выгоды для вас. Прозрачные условия, никаких скрытых платежей."
          img={twoPercent}
          blue={true}
          orange={false}
        />
        <PromotionBlockProps
          title="До 80% стоимости автомобиля"
          text="Получите нужную сумму — быстро и без лишних документов"
          img={percent}
          ul={["Не требуются доп. справки", "Не требуется кредитная история"]}
          blue={false}
          orange={true}
        />
      </BoxForTwoComponents>
      <LoanCalculator />
      <BoxForTwoComponents title="Требования к залогу и заёмщику">
        <PromotionBlockProps
          title="Залог"
          text="Низкий процент — больше выгоды для вас. Прозрачные условия, никаких скрытых платежей."
          img={twoPercent}
          ul={[
            "Оригинал или дубликат ПТС",
            "Зарегистрирован в ГИБДД",
            "Не старше 2005 года выпуска",
            "Не в залоге в других организациях",
            "В собственности заемщика",
          ]}
          blue={true}
          orange={false}
        />
        <PromotionBlockProps
          title="Заёмщик"
          img={percent}
          ul={[
            "Возраст от 18 до 80 лет",
            "Российское гражданство",
            "Кредитная история не важна",
            "Трудоустройство не требуется",
            "Справки не нужны",
          ]}
          blue={false}
          orange={true}
        />
      </BoxForTwoComponents>
      <VehicleCollateral />
      <Questions />
    </div>
  );
}

export default Home;
