const gqlProductVariantFields = params => {
  return `
      id
      sku
      price {
        amount
        currencyCode
      }
      title
      selectedOptions {
        name
        value
      }
    `;
};

export default gqlProductVariantFields;
