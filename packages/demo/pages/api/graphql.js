import { ApolloServer, gql } from "apollo-server-micro";

import schema from "raw-loader!../../api/sdl.gql";

import resolvers from "../../api/mock/resolvers";

// console.log(schema);

// const typeDefs = gql`
//   type Query {
//     sayHello: String
//   }
// `;

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
