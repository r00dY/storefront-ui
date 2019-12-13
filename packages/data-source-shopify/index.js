import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "cross-fetch";
import "regenerator-runtime/runtime";

import { createApolloGetter } from "@commerce-ui/data-source-helpers/graphql/apolloClient";

global.fetch = fetch;

class ShopifyDataSource {
  constructor(config) {
    const { uri, accessToken } = config;

    this.config = config;

    this.apolloClient = new ApolloClient({
      connectToDevTools: process.browser,
      link: new HttpLink({
        uri: uri, // Server URL (must be absolute)
        headers: {
          "X-Shopify-Storefront-Access-Token": accessToken
        }
      }),
      cache: new InMemoryCache(),
      clientState: { defaults: {}, resolvers: {} }
    });

    this.getData = createApolloGetter(this.apolloClient);
  }
}

export default ShopifyDataSource;
