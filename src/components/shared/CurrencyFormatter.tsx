import CurrencyFormat from "react-currency-format";

interface PropTypes {
  value: number;
  decimalScale: number | undefined;
  thousandSeparator: boolean | undefined;
  suffix: string | undefined;
  prefix: string | undefined;
}

export default function CurrencyFormatter({
  value,
  decimalScale,
  suffix = "",
  prefix = "",
  thousandSeparator = false,
}: PropTypes) {
  return (
    <CurrencyFormat
      value={value}
      displayType={"text"}
      thousandSeparator={thousandSeparator}
      decimalScale={decimalScale}
      suffix={suffix}
      prefix={prefix}
    />
  );
}
