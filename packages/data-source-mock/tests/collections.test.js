import { getCollections } from "../collections";
import { getCollectionByHandle } from "../collectionByHandle";

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
const fetch = require("cross-fetch");
require("regenerator-runtime/runtime");

global.fetch = fetch;
global.APOLLO_CLIENT = new ApolloClient({
  connectToDevTools: process.browser,
  // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    // uri: "https://biggest-ecommerce.myshopify.com/api/graphql", // Server URL (must be absolute)
    uri: "http://localhost:4000" // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
  clientState: { defaults: {}, resolvers: {} }
});

// TODO: pagination

test("[getCollections] works good without params", async () => {
  let collectionsDataWithQuery = await getCollections();
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(data[0].products).toBeUndefined();
});

test("[getCollections] works good with products", async () => {
  let collectionsDataWithQuery = await getCollections({
    _fields: { products: {} }
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(Array.isArray(data[0].products)).toBe(true);

  // TODO: run basic tests for inline products
});

test("[getCollectionByHandle] without params", async () => {
  let collectionsDataWithQuery = await getCollectionByHandle({
    handle: "candy"
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(data.handle).toBe("candy");
});

test("[getCollectionByHandle] with unexisting handle", async () => {
  let collectionsDataWithQuery = await getCollectionByHandle({
    handle: "this_handle_doesnt_exist"
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(data).toBeNull();
});

// test('[getCollections] works good with pagination', async () => {
//     let collectionsDataWithQuery = await getCollections({ _pagination: { itemsPerPage: 5, page: 1 }});
//     let data = collectionsDataWithQuery.data;
//
//     expect(collectionsDataWithQuery.queryName).toBe('collections');
//     expect(collectionsDataWithQuery.error).toBe(undefined);
//
//     console.log(data);
//
//     // expect(data.length === 5).toBe(true);
//
//     // // TODO: run basic tests for single collection objects
//     // expect(typeof data[0].handle === 'string').toBe(true);
//     // expect(typeof data[0].title === 'string').toBe(true);
//
// });
