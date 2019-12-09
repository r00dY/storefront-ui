const paginator = require("./paginator");

const gqlProductVariantQuery = (params, name = "variant") => {
  return `
      ${name} {
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
      }
  `;
};

const gqlProductVariantsQuery = (params, name = "variants") => {
  params = params || {};

  return `
  ${name} (${paginator(params._pagination)}) {
    edges {
      ${gqlProductVariantQuery({}, "node")}
    }
  }
  `;
};

module.exports = {
  gqlProductVariantsQuery,
  gqlProductVariantQuery
};
