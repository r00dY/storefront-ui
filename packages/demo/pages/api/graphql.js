import { ApolloServer, gql } from "apollo-server-micro";

import schema from "raw-loader!../../graphql/sdl.gql";

console.log(schema);

// const typeDefs = gql`
//   type Query {
//     sayHello: String
//   }
// `;

const typeDefs = gql`
  ${schema}
`;

const resolvers = {
  QueryRoot: {
    sayHello(parent, args, context) {
      return "Ty bulwo!";
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
