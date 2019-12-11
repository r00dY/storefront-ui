const collections = require("@commerce-ui/data-mock/collections");
const checkoutData = require("@commerce-ui/data-mock/checkout");
const products = require("@commerce-ui/data-mock/products");

// TODO: this is mock so far
const getPaginationResolver = function(items) {
  items = [...items] || [];

  return {
    edges: items.map(item => ({
      cursor: "imacursor",
      node: item
    })),
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false
    }
  };
};

const resolvers = {
  Product: {
    images(parent) {
      return getPaginationResolver(parent.images);
    },

    variants(parent) {
      return getPaginationResolver(parent.variants);
    }
  },

  QueryRoot: {
    productByHandle(parent, args, context) {
      const productByHandle = products.find(x => x.handle === args.handle);

      if (!productByHandle) {
        return;
      }

      const product = { ...productByHandle };
      const variants = product.variants;

      // TODO: implement pagination!
      product.variants = getPaginationResolver(variants);

      return product;
    },

    checkout() {
      const checkout = { ...checkoutData };
      checkout.lineItems = getPaginationResolver(checkoutData.lineItems);

      return checkout;
    },

    collections(parent, args) {
      return getPaginationResolver(
        collections.map(c => {
          const collection = { ...c };
          const products = c.products;
          collection.products = getPaginationResolver(products);
          return collection;
        })
      );
    },

    collectionByHandle(parent, args) {
      const collectionByHandle = collections.find(
        x => x.handle === args.handle
      );

      if (!collectionByHandle) {
        return;
      }

      const collection = { ...collectionByHandle };
      const products = collection.products;

      // TODO: implement pagination!
      collection.products = getPaginationResolver(products);

      return collection;
    }
  }
};

module.exports = resolvers;
