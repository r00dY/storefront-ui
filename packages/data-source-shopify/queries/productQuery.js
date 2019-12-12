const { gqlProductVariantsQuery } = require("./productVariantsQuery");
const { gqlImagesQuery } = require("./imagesQuery");
const paginator = require("./paginator");

const gqlProductQuery = (params, name = "product") => {
  params = params || {};
  params._fields = params._fields || {};
  params._fields.images = params._fields.images || {}; // enable images by default!!

  return `
      ${name} {
        id
        title
        handle
        availableForSale
        createdAt
        tags
        options {
          name
          values
        }
        ${
          params._fields.variants
            ? gqlProductVariantsQuery(params._fields.variants)
            : ""
        }
        ${gqlImagesQuery()}
      }
  `;
};

const gqlProductsQuery = (params, name = "products") => {
  params = params || {};
  params._fields = params._fields || {};

  return `
  ${name} (${paginator(params._pagination)}) {
    edges {
      ${gqlProductQuery(params, "node")}
    }
  }
  `;
};

const gqlProductByHandle = params => {
  params = params || {};

  return gqlProductQuery(params, `productByHandle(handle: "${params.handle}")`);
};

module.exports = {
  gqlProductsQuery,
  gqlProductQuery,
  gqlProductByHandle
};
