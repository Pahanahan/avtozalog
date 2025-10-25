import { useState } from "react";

import { questions } from "../../data/questions";

import arrowBlue from "../../assets/icons/arrow-right-blue.svg";
import styles from "./Questions.module.scss";

function Questions() {
  const [questionState, setQuestionState] = useState<number>(1);

  const handleChangeQuestionState = (id: number) => {
    setQuestionState(id);
  };

  const questionsMap = questions.map((question) => {
    return (
      <div key={question.id} className={styles["questions__item"]}>
        <div
          onClick={() => {
            handleChangeQuestionState(question.id);
          }}
          className={styles["questions__box"]}
        >
          <p className={styles["questions__question"]}>{question.question}</p>
          <img
            className={`${styles["questions__img"]} ${
              question.id === questionState
                ? styles["questions__img--transform"]
                : ""
            }`}
            src={arrowBlue}
            alt="show"
          />
        </div>
        <p
          className={`${styles["questions__answer"]} ${
            question.id === questionState
              ? styles["questions__answer--visible"]
              : ""
          }`}
        >
          {question.answer}
        </p>
      </div>
    );
  });

  return (
    <div className={styles["questions"]}>
      <div className="small-container">
        <div className={styles["questions__inner"]}>
          <h2 className={styles["questions__title"]}>Вопросы</h2>
          {questionsMap}
        </div>
      </div>
    </div>
  );
}

export default Questions;
