import { ApolloServer, gql } from "apollo-server-micro";

import schema from "raw-loader!../../graphql/sdl.gql";

// console.log(schema);

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
    },

    productByHandle(parent, args, context) {
      return {
        id: "1233567",
        handle: "Super produkt",
        availableForSale: true,
        description: "Super product i to jest jego opis.",
        descriptionHtml: "<p>Super product i to jest jego opis.</p>",
        collections: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        },
        images: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        },
        options: [],
        tags: [],
        variants: {
          edges: [],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          }
        }
      };
    },

    testByHandle(parent, args, context) {
      console.log(parent, args, context);
      return "Test!!!";
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
