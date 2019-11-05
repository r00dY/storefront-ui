import collections from "./data/collections";

const resolvers = {
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

      return collection;
    }
  }
};

export default resolvers;
