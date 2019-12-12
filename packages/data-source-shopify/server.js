const { ApolloServer, gql } = require("apollo-server");
const schema = require("@commerce-ui/data-source-helpers/schema");
const resolvers = require("./resolvers.js");
const ShopifyDataSource = require("./shopifyDataSource");

const server = new ApolloServer({
  typeDefs: gql`
    ${schema}
  `,
  resolvers,
  dataSources: () => ({
    shopify: new ShopifyDataSource({
      uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
      accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
    })
  })
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
