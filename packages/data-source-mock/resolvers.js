const collections = require("@commerce-ui/data-mock/collections");
const checkoutData = require("@commerce-ui/data-mock/checkout");

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
      return {
        id: "1233567",
        handle: "Super produkt",
        availableForSale: true,
        description: "Super product i to jest jego opis.",
        collections: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        },
        images: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        },
        options: [],
        tags: [],
        variants: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        }
      };
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
      const collection = { ...collections.find(x => x.handle === args.handle) };
      const products = collection.products;

      // TODO: implement pagination!
      collection.products = getPaginationResolver(products);

      return collection;
    }
  }
};

module.exports = resolvers;
