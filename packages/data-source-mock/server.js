const { ApolloServer } = require("apollo-server");
const { HttpLink, gql } = require("apollo-boost");
global.fetch = require("cross-fetch");
require("regenerator-runtime/runtime");
const { printSchema } = require("graphql/utilities");
const {
  introspectSchema,
  makeRemoteExecutableSchema,
  makeExecutableSchema,
  transformSchema,
  FilterRootFields,
  FilterTypes,
  RenameTypes,
  ExtractField,
  TransformRootFields
} = require("graphql-tools");

const resolvers = require("./resolvers.js");

async function run(config) {
  const { uri, accessToken } = config;

  const link = new HttpLink({
    uri: uri, // Server URL (must be absolute),
    headers: {
      "X-Shopify-Storefront-Access-Token": accessToken
    }
  });

  // Get schema from Shopify remote
  const shopifySchema = await introspectSchema(link);

  //
  // const executableShopifySchema = makeRemoteExecutableSchema({
  //   schema: shopifySchema,
  //   link
  // });
  //
  // const newExecutableSchema = transformSchema(executableShopifySchema, [
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
  //         // "node"
  //       ].includes(rootField);
  //     }
  //   })
  //   // new FilterTypes(type => {
  //   //   if (type == "Money") {
  //   //     console.log("money!");
  //   //     return false;
  //   //   } // we remove old legacy Money
  //   //   return true;
  //   // }),
  //   // new RenameTypes(name => {
  //   //   if (name === "MoneyV2") {
  //   //     return "Money";
  //   //   }
  //   // })
  //   // new ExtractField('priceV2', 'priceV3')
  // ]);
  //
  // console.log(printSchema(newExecutableSchema));

  const customSchema = makeExecutableSchema({
    typeDefs: gql`
      ${printSchema(shopifySchema)}
    `,
    resolvers
  });

  const server = new ApolloServer({
    schema: customSchema
  });

  server.listen(4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

run({
  uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
  accessToken: "7a415603317462ae8c7e4f98be2c5b5e"
});
