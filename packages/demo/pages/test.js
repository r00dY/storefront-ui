import React, { useEffect } from "react";
import ApolloClient, { gql } from "apollo-boost";

export default () => {
  useEffect(() => {
    const client = new ApolloClient({
      uri: "/api/graphql"
    });

    client
      .query({
        query: gql`
          {
            sayHello
          }
        `
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }, []);

  return <div>Hello world!</div>;
};
