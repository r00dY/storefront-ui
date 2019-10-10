export default checkout => {
  return [
    {
      label: "Subtotal",
      value: `${checkout.subtotalPrice} ${checkout.currencyCode}`
    },
    {
      label: "Tax",
      value: `${checkout.totalTax} ${checkout.currencyCode}`
    },
    {
      label: "Total",
      isTotal: true,
      value: `${checkout.totalPrice} ${checkout.currencyCode}`
    }
  ];
};
