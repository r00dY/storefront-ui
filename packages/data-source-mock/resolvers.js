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

  Collection: {
    // images(parent) {
    //   return getPaginationResolver(parent.images);
    // },

    products(parent) {
      return getPaginationResolver(parent.products);
    }
  },

  QueryRoot: {
    productByHandle(parent, args, context) {
      return products.find(x => x.handle === args.handle);
    },

    products(parent, args) {
      return getPaginationResolver(products);
    },

    // checkout() {
    //   const checkout = { ...checkoutData };
    //   checkout.lineItems = getPaginationResolver(checkoutData.lineItems);
    //
    //   return checkout;
    // },

    collections(parent, args) {
      return getPaginationResolver(collections);
    },

    collectionByHandle(parent, args) {
      return collections.find(x => x.handle === args.handle);
    }
  }
};

module.exports = resolvers;
