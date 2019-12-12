import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "cross-fetch";
import "regenerator-runtime/runtime";

import { getCollectionByHandle } from "./api/collectionByHandle";
import { getCollections } from "./api/collections";
import { getProducts } from "./api/products";
import { getProductByHandle } from "./api/productByHandle";

global.fetch = fetch;

import { flattenEdges } from "@commerce-ui/data-source-helpers/main";

function createDataSource(config) {
  const { uri } = config;

  const apolloClient = new ApolloClient({
    connectToDevTools: process.browser,
    link: new HttpLink({
      uri: uri // Server URL (must be absolute)
    }),
    cache: new InMemoryCache(),
    clientState: { defaults: {}, resolvers: {} }
  });

  return {
    getCollectionByHandle: getCollectionByHandle(apolloClient),
    getCollections: getCollections(apolloClient),
    getProductByHandle: getProductByHandle(apolloClient),
    getProducts: getProducts(apolloClient),
    getData: async data => {
      try {
        const result = await apolloClient.query({
          query: data
        });

        // result.data = flattenEdges(result.data)[queryName];

        return result.data;
      } catch (e) {
        console.error(e);
      }
    }
  };
}

export { createDataSource };
