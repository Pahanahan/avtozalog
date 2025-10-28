import Refinace from "../../components/Refinance/Refinance";
import BoxForTwoComponents from "../../components/BoxForTwoComponents/BoxForTwoComponents";
import PromotionBlockProps from "../../components/PromotionBlock/PromotionBlock";
import { refinanceData } from "../../data/refinanceData";

import percent from "../../assets/images/percent.png";
import twoPercent from "../../assets/images/two-percent.png";

function BuyAuto() {
  return (
    <>
      <Refinace
        title={refinanceData[1].title}
        titleColor={refinanceData[1].titleColor}
        div={refinanceData[1].div}
        divColor={refinanceData[1].divColor}
        text={refinanceData[1].text}
        textColor={refinanceData[1].textColor}
        img={refinanceData[1].img}
      />
      <BoxForTwoComponents>
        <PromotionBlockProps
          title="Без кредитной истории"
          ul={[
            "Ваша история не важна – мы работаем с каждым",
            "Независимо от цены – найдем лучший вариант",
          ]}
          img={twoPercent}
          blue={true}
          orange={false}
        />
        <PromotionBlockProps
          title="Татарстан"
          img={percent}
          ul={[
            "Доступно для всех – где бы вы ни находились в Татарстане",
            "Экспресс-процесс – ваша машина уже близко",
          ]}
          blue={false}
          orange={true}
        />
      </BoxForTwoComponents>
      <BoxForTwoComponents title="Нет нужной машины?">
        <PromotionBlockProps
          title="Сделаем всё за вас!"
          text="Ничего страшного — подберём и выкупим авто под ваши пожелания"
          img={percent}
          blue={false}
          orange={true}
        />
      </BoxForTwoComponents>
    </>
  );
}

export default BuyAuto;
