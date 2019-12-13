import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "cross-fetch";
import "regenerator-runtime/runtime";
import runTests from "@commerce-ui/data-source-helpers/runTests";

import ShopifyDataSource from "../index";

const dataSource = new ShopifyDataSource({
  uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
  accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
});

const testConfig = {
  existingCollectionHandle: "test-collection-1",
  existingProductHandle: "clubknit-polo"
};

runTests(dataSource, testConfig);
