import { memo } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import { formatNumber } from "../../utils/formatNumber";

import styles from "./Input.module.scss";

const MySlider = styled(Slider)({
  padding: "15px 0",
  marginTop: "29px",
  color: "#424242",

  "& .MuiSlider-track": {
    height: "1px",
    backgroundColor: "#424242",
    opacity: 1,
    border: "none",
  },

  "& .MuiSlider-rail": {
    height: "1px",
    backgroundColor: "#424242",
    opacity: 1,
    border: "none",
  },

  "& .MuiSlider-thumb": {
    width: 16,
    height: 16,
    backgroundColor: "#424242",
    borderRadius: "50%",
    transition: "0.2s",
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "none",
    },
    "&::after": {
      width: 30,
      height: 30,
    },
  },

  "@media (max-width: 756px)": {
    marginTop: "15px",

    "& .MuiSlider-thumb": {
      width: 10,
      height: 10,
    },
  },
});

interface InputProps {
  value: string;
  onSetLoanSum?: React.Dispatch<React.SetStateAction<string>>;
  onSetUserName?: React.Dispatch<React.SetStateAction<string>>;
  onSetMonth?: React.Dispatch<React.SetStateAction<string>>;
  onSetPhone?: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  type: string;
  name: string;
  placeholder?: string;
  max?: string;
  min?: string;
  step?: string;
  slider?: boolean;
}

function Input({
  value,
  onSetLoanSum,
  onSetUserName,
  onSetMonth,
  onSetPhone,
  title,
  placeholder,
  type,
  name,
  max,
  min,
  step,
  slider,
}: InputProps) {
  const handleChange = (e: Event, newValue: number | number[]) => {
    const valueString = Array.isArray(newValue)
      ? String(newValue[0])
      : String(newValue);

    if (name === "sum" && onSetLoanSum) onSetLoanSum(valueString);
    if (name === "month" && onSetMonth) onSetMonth(valueString);
  };

  const styleNumber = formatNumber(name, value);

  return (
    <label className={styles["input"]}>
      <h4 className={styles["input__title"]}>{title}</h4>
      {slider ? (
        <>
          <MySlider
            size="small"
            defaultValue={Number(min)}
            aria-label="Small"
            step={Number(step)}
            min={Number(min)}
            max={Number(max)}
            onChange={handleChange}
          />

          <div className={styles["input__min"]}>
            {Number(min).toLocaleString("ru-RU")}
          </div>
          <div className={styles["input__max"]}>
            {Number(max).toLocaleString("ru-RU")}
          </div>
          <div className={styles["input__value"]}>{styleNumber}</div>
        </>
      ) : (
        <input
          onChange={(e) => {
            if (name === "name" && onSetUserName) onSetUserName(e.target.value);
            if (name === "phone" && onSetPhone) onSetPhone(e.target.value);
          }}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      )}
    </label>
  );
}

export default memo(Input);
