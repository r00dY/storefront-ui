import collections from "./data/collections";
import checkoutData from "./data/checkout";
import stringToHandle from "./utils/stringToHandle";
import ImgixClient from "imgix-core-js";

const IMGIX_DOMAIN_RATIO = "ratio-dev.imgix.net";
const IMGIX_SECRET_RATIO = "T9S4mPu4pDgCetNw";

const imgix = new ImgixClient({
  domain: IMGIX_DOMAIN_RATIO,
  secureURLToken: IMGIX_SECRET_RATIO
});

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

const RESOLUTIONS = [210, 420, 768, 1024, 1366, 1600, 1920];

const resolvers = {
  ImageVariant: {
    srcset(parent, args) {
      // TODO: maxHeight not taken into account
      return RESOLUTIONS.map(width => ({
        src: imgix.buildURL(parent.image.originalSrc, {
          w: width,
          h: width / parent.aspectRatio,
          auto: "compress,format",
          fit: "crop"
        }),
        width: width
      }));
    }
  },

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

export default resolvers;
