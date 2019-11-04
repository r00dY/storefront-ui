import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return "Hello World!";
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
