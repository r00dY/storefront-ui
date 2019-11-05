import collections from "./data/collections";
import stringToHandle from "./utils/stringToHandle";

// TODO: ImageVariant resolver should be here, not in images.js

// TODO: this is mock so far
const getPaginationResolver = function(items) {
  items = items || [];

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
    handle(parent) {
      return stringToHandle(parent.title);
    },

    availableForSale() {
      return true;
    },

    images(parent) {
      return getPaginationResolver(parent.images);
    },

    tags(parent) {
      return parent.tags || [];
    },

    createdAt() {
      return new Date();
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

    collectionByHandle(parent, args, context) {
      const collection = collections.find(x => x.handle === args.handle);
      const products = collection.products;

      // TODO: implement pagination!
      collection.products = getPaginationResolver(products);

      return collection;
    }
  }
};

export default resolvers;
