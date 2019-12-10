import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
const fetch = require("cross-fetch");
require("regenerator-runtime/runtime");

global.fetch = fetch;
global.APOLLO_CLIENT = new ApolloClient({
  connectToDevTools: process.browser,
  link: new HttpLink({
    uri: "http://localhost:4000" // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
  clientState: { defaults: {}, resolvers: {} }
});
