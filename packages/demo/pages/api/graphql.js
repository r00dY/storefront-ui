import { ApolloServer, gql } from "apollo-server-micro";

import schema from "raw-loader!../../api/sdl.gql";

import resolvers from "../../api/mock/resolvers";

const typeDefs = gql`
  ${schema}
`;

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
