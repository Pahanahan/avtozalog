import Refinance from "../../components/Refinance/Refinance";
import BoxForTwoComponents from "../../components/BoxForTwoComponents/BoxForTwoComponents";
import MonthlyRate from "../../components/MonthlyRate/MonthlyRate";
import CarLoanLimit from "../../components/CarLoanLimit/CarLoanLimit";
import LoanCalculator from "../../components/LoanCalculator/LoanCalculator";

import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles["home"]}>
      <Refinance />
      <BoxForTwoComponents>
        <MonthlyRate />
        <CarLoanLimit />
      </BoxForTwoComponents>
      <LoanCalculator />
    </div>
  );
}

export default Home;
