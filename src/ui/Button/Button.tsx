import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  width?: string;
  onClick?: () => void;
}

function Button({ children, type, width, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ width: width }}
      type={type}
      className={styles["button"]}
    >
      {children}
    </button>
  );
}

export default Button;
