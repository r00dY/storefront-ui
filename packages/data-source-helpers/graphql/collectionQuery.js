const paginator = require("./paginator");
const { gqlImageQuery } = require("./imagesQuery");
const { gqlProductsQuery } = require("./productQuery");

const gqlCollectionQuery = (params, name = "collection") => {
  params = params || {};
  params._fields = params._fields || {};

  return `
      ${name} {
            handle
            title
            description
            ${gqlImageQuery()}
            ${
              params._fields.products
                ? gqlProductsQuery(params._fields.products)
                : ""
            }
      }
  `;
};

const gqlCollectionsQuery = (params, name = "collections") => {
  params = params || {};
  params._fields = params._fields || {};

  return `
      ${name} (${paginator(params._pagination)}) {
        edges {
          ${gqlCollectionQuery(params, "node")}
        }
      }
  `;
};

module.exports = {
  gqlCollectionsQuery,
  gqlCollectionQuery
};
