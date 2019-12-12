const paginator = require("./paginator");
const { gqlImageQuery } = require("./imagesQuery");
const { gqlProductsQuery } = require("./productQuery");

const CollectionType = {
  acceptedParams: ["_pagination", "handle"],
  name: "collections",
  fields: {
    simple: ["handle", "title", "description"],
    compound: {
      products: { config: PRODUCT_CONFIG, isArray: true },
      image: { config: IMAGE_CONFIG, isArray: false }
    }
  }
};

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

const gqlCollectionByHandleQuery = (params, name = "collection") => {
  params = params || {};
  return gqlCollectionQuery(
    params,
    `collectionByHandle(handle: "${params.handle}")`
  );
};

const gqlQuery = (params, name) => {};
