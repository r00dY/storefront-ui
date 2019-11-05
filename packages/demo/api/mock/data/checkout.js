import products from "./products";

const checkout = {
  lineItems: [
    {
      id: 1,
      quantity: 1,
      title: products[0].variants[0].title,
      variant: products[0].variants[0]
    },
    {
      id: 2,
      quantity: 1,
      title: products[1].variants[1].title,
      variant: products[1].variants[1]
    },
    {
      id: 3,
      quantity: 2,
      title: products[2].variants[2].title,
      variant: products[2].variants[2]
    }
  ],
  appliedGiftCards: [],
  availableShippingRates: [],
  completedAt: null,
  createdAt: Date.now(),
  currencyCode: "USD",

  subtotalPrice: {
    amount: "129.00",
    currencyCode: "USD"
  },
  shippingLine: null,
  totalPrice: {
    amount: "129.00",
    currencyCode: "USD"
  }
};

export default checkout;
