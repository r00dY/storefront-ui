const { ApolloClient, InMemoryCache, HttpLink, gql } = require("apollo-boost");
global.fetch = require("cross-fetch");
require("regenerator-runtime/runtime");

const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require("graphql-tools");

class ShopifyDataSource2 {
  constructor(shopifySchema) {
    this.shopifySchema = shopifySchema;
  }

  // async getCollections() {
  //     try {
  //         const result = await this.client.query({
  //             query: gql`
  //       query {
  //         collections(first: 250) {
  //           edges {
  //             node {
  //               id
  //               handle
  //               title
  //               description
  //               products(first: 250) {
  //                 edges {
  //                   node {
  //                     id
  //                     handle
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //         });
  //
  //         return result.data;
  //     } catch (e) {
  //         console.error(e);
  //     }
  // }
  //
}

async function createShopifyDataSource2(config) {
  const { uri, accessToken } = config;

  const link = new HttpLink({
    uri: uri, // Server URL (must be absolute),
    headers: {
      "X-Shopify-Storefront-Access-Token": accessToken
    }
  });

  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link
  });

  return new ShopifyDataSource2(executableSchema);
}

module.exports = createShopifyDataSource2;
