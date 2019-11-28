import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

export function createApolloClient(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      // uri: "https://biggest-ecommerce.myshopify.com/api/graphql", // Server URL (must be absolute)
      uri: "http://localhost:4000", // Server URL (must be absolute)
      headers: {
        "X-Shopify-Storefront-Access-Token": "7a415603317462ae8c7e4f98be2c5b5e"
      }
    }),
    cache: new InMemoryCache().restore(initialState || {}),
    clientState: { defaults: {}, resolvers: {} }
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
