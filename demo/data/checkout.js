import products from "./products";
import randomInt from "../utils/randomInt";

const checkoutLineItems = [
  products[0],
  products[1],
  products[2],
  products[3],
  products[4]
].map(product => ({
  product: product,
  quantity: randomInt(1, 3),
  selectedOptions: {
    name: "size",
    value: product.options.find(x => x.name === "size").values[0]
  }
}));

const checkout = {
  lineItems: checkoutLineItems,
  subtotalPrice: {
    amount: 12900,
    currencyCode: "USD"
  },
  totalTax: {
    amount: 3000,
    currencyCode: "USD"
  },
  totalPrice: {
    amount: 15900,
    currencyCode: "USD"
  }
};

export default checkout;
