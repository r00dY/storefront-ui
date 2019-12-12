const { ApolloClient, InMemoryCache, HttpLink, gql } = require("apollo-boost");
global.fetch = require("cross-fetch");
require("regenerator-runtime/runtime");

class ShopifyDataSource {
  constructor(config) {
    const { uri, accessToken } = config;

    const link = new HttpLink({
      uri: uri, // Server URL (must be absolute),
      headers: {
        "X-Shopify-Storefront-Access-Token": accessToken
      }
    });

    this.client = new ApolloClient({
      connectToDevTools: process.browser,
      link,
      cache: new InMemoryCache(),
      clientState: { defaults: {}, resolvers: {} }
    });
  }

  async getCollections() {
    try {
      const result = await this.client.query({
        query: gql`
          query {
            collections(first: 250) {
              edges {
                node {
                  id
                  handle
                  title
                  description
                  products(first: 250) {
                    edges {
                      node {
                        id
                        handle
                      }
                    }
                  }
                }
              }
            }
          }
        `
      });

      return result.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getCollectionByHandle(handle) {
    try {
      const result = await this.client.query({
        query: gql`
          query {
            collectionByHandle(handle: "${handle}") {
                id
                handle
                title
                description
                products(first: 250) {
                  edges {
                    node {
                      id
                      handle
                    }
                  }
                }
            }
          }
        `
      });

      return result.data;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = ShopifyDataSource;
