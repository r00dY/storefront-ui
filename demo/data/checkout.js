import products from "./products";
import randomInt from "../utils/randomInt";

const checkoutLineItems = [
  products[0],
  products[1],
  products[2],
  products[3],
  products[4]
].map(product => {
  // select random option
  const sizeValues = product.options.find(x => x.name === "size").values;
  const selectedValue = sizeValues[randomInt(0, sizeValues.length - 1)];

  const productVariant = {
    product: product,
    selectedOptions: {
      name: "size",
      value: selectedValue
    }
  };

  return {
    productVariant: productVariant,
    quantity: randomInt(1, 5)
  };
});

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

console.log("checkout", checkout);

export default checkout;
