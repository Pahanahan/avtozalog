import type { ReactNode } from "react";
import styles from "./BoxForTwoComponents.module.scss";

interface BoxForTwoComponentsProps {
  title?: string;
  children: ReactNode;
}

function BoxForTwoComponents({ title, children }: BoxForTwoComponentsProps) {
  return (
    <div className={styles["box"]}>
      <div className="small-container">
        <div className={styles["box__inner"]}>
          {title && <h2 className={styles["box__title"]}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
}

export default BoxForTwoComponents;
