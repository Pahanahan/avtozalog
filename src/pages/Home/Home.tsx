import Refinance from "../../components/Refinance/Refinance";
import BoxForTwoComponents from "../../components/BoxForTwoComponents/BoxForTwoComponents";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import CarLoanLimit from "../../components/CarLoanLimit/CarLoanLimit";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles["home"]}>
      <Refinance />
      <BoxForTwoComponents>
        <MonthlyRate />
        <CarLoanLimit />
      </BoxForTwoComponents>
    </div>
  );
}

export default Home;
