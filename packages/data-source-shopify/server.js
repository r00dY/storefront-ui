const { ApolloServer, gql } = require("apollo-server");
const schema = require("@commerce-ui/data-source-helpers/schema");
const typeDefs = gql`
  ${schema}
`;
const resolvers = require("./resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
