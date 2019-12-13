const { ApolloServer } = require("apollo-server");
// const resolvers = require("./resolvers.js");
// const ShopifyDataSource = require("./shopifyDataSource");
// const createShopifyDataSource2 = require("./shopifyDataSource2");

const { ApolloClient, InMemoryCache, HttpLink, gql } = require("apollo-boost");
global.fetch = require("cross-fetch");
require("regenerator-runtime/runtime");
const {
  introspectSchema,
  makeRemoteExecutableSchema,
  transformSchema,
  FilterRootFields,
  FilterTypes,
  RenameTypes,
  ExtractField,
  TransformRootFields
} = require("graphql-tools");

async function run(config) {
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

  const newSchema = executableSchema;

  // const newSchema = transformSchema(executableSchema, [
  //   // new TransformRootFields((operation, fieldName) => {
  //   //     console.log(operation, fieldName);
  //   //     return null;
  //   // }),
  //   new FilterRootFields((operation, rootField) => {
  //     if (operation === "Mutation") return true;
  //
  //     if (operation === "Query") {
  //       return [
  //         "collections",
  //         "collectionByHandle",
  //         "products",
  //         "productByHandle",
  //         "node"
  //       ].includes(rootField);
  //     }
  //   }),
  //   new FilterTypes(type => {
  //     if (type == "Money") {
  //       console.log("money!");
  //       return false;
  //     } // we remove old legacy Money
  //     return true;
  //   }),
  //   new RenameTypes(name => {
  //     if (name === "MoneyV2") {
  //       return "Money";
  //     }
  //   })
  //   // new ExtractField('priceV2', 'priceV3')
  // ]);

  const server = new ApolloServer({
    schema: newSchema
  });

  server.listen(4001).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

run({
  uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
  accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
});

// const server = new ApolloServer({
//     typeDefs: gql`
//     ${schema}
//   `,
//     resolvers,
//     dataSources: () => ({
//         shopify: new ShopifyDataSource({
//             uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
//             accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
//         }),
//         shopify2: createShopifyDataSource2({
//             uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
//             accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
//         })
//     })
// });
//
// server.listen(4001).then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });
