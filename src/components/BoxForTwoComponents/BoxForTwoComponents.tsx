import type { ReactNode } from "react";
import styles from "./BoxForTwoComponents.module.scss";

interface BoxForTwoComponentsProps {
  children: ReactNode;
}

function BoxForTwoComponents({ children }: BoxForTwoComponentsProps) {
  return <div className={styles["box"]}>{children}</div>;
}

export default BoxForTwoComponents;
