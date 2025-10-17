import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  width?: string;
}

function Button({ children, type }: ButtonProps) {
  return (
    <button type={type} className={styles["button"]}>
      {children}
    </button>
  );
}

export default Button;
