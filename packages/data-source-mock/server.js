const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const schema = fs.readFileSync("./sdl.gql", "utf8");
const typeDefs = gql`
  ${schema}
`;
const resolvers = require("./resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
