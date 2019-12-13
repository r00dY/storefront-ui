import { ApolloClient, InMemoryCache, HttpLink, gql } from "apollo-boost";
import fetch from "cross-fetch";
import "regenerator-runtime/runtime";

import { getCollectionByHandle } from "./api/collectionByHandle";
import { getCollections } from "./api/collections";
import { getProducts } from "./api/products";
import { getProductByHandle } from "./api/productByHandle";

global.fetch = fetch;

import {
  flattenEdges,
  createGetter
} from "@commerce-ui/data-source-helpers/main";
// import basicFragments from "@commerce-ui/data-source-helpers/basicFragments";

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
    getData: createGetter(async query => {
      try {
        const result = await apolloClient.query({
          query: gql`
            ${query}
          `
        });

        return result.data;
      } catch (e) {
        console.log("============ DUPA ========");
        console.error(e);
      }
    })
  };
}

export { createDataSource };
