import React, { useEffect, useState } from "react";
import ApolloClient, { gql } from "apollo-boost";

export default () => {
  const [value, setValue] = useState(null);

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
      .then(result => {
        console.log(result);
        setValue(result.data.sayHello);
      })
      .catch(error => console.log(error));
  }, []);

  return <div>Value from backend: {value}</div>;
};
