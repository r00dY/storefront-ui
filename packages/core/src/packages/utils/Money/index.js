const SYMBOL_MAP = {
  PLN: "zł",
  EUR: "€",
  USD: "$",
  GBP: "£"
};

const Money = {
  getCurrencySymbol: money => {
    return SYMBOL_MAP[money.currencyCode];
  },
  getAmountString: money => {
    return (money.amount / 100).toFixed(2);
  }
};

export default Money;
