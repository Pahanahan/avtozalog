export const formatNumber = (name: string, value?: string) => {
  if (!value) return "";

  if (name === "sum") {
    return Number(value).toLocaleString("ru-RU");
  }

  if (name === "month") {
    const month = Number(value);
    if (month < 1 || month > 36) return `${month} месяцев`;

    let suffix = " месяцев";
    if (month % 10 === 1 && month !== 11) {
      suffix = " месяц";
    } else if (
      [2, 3, 4].includes(month % 10) &&
      ![12, 13, 14].includes(month)
    ) {
      suffix = " месяца";
    }

    return `${month}${suffix}`;
  }

  return value;
};
