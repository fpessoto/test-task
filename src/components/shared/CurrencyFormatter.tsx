import CurrencyFormat from 'react-currency-format';

interface PropTypes {
  value: number;
  decimalScale: number;
  thousandSeparator: boolean;
  suffix: string;
  prefix: string;
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
