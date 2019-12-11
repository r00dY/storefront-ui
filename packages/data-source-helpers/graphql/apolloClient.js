const { useApolloClient, useQuery } = require("@apollo/react-hooks");
const gql = require("graphql-tag");
const { createGetter, flattenEdges } = require("../main");
const { useRef } = require("react");

function createQuery(query) {
  return gql`
    query {
      ${query}
    }
  `;
}

function createApolloGetter(queryName, queryFunction) {
  const fetchFunction = async params => {
    const client = global.APOLLO_CLIENT;

    try {
      console.log(queryFunction(params));

      const result = await client.query({
        query: createQuery(queryFunction(params))
      });

      result.data = flattenEdges(result.data)[queryName];

      return result.data;
    } catch (e) {
      console.error(`[${queryName}]`, e);
    }
  };

  return createGetter(queryName, fetchFunction);
}

function createApolloHook(queryName, queryFunction) {
  return (arg = {}, options = {}) => {
    // Let's validate if QueryWithResult given to the hook is compatible with getter (queryName must agree)
    if (arg._queryWithResult) {
      if (arg.queryName !== queryName) {
        throw new Error("Bad QueryWithData passed to a hook: " + queryName);
      }
    }

    const isFirstRenderRef = useRef(true);
    const client = useApolloClient();

    // If this is the first call, just write content from server-side render to local cache so that useQuery returns immediately
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;

      if (!!arg._queryWithResult && !arg.isEmpty) {
        // TODO: what if error in getInitialProps? We must take it into account
        client.writeQuery({
          query: createQuery(queryFunction(arg.params)),
          data: arg.data
        });
      }
    }

    const useQueryResult = useQuery(
      createQuery(queryFunction(arg._queryWithResult ? arg.params : arg)),
      options
    );

    return {
      ...useQueryResult,
      data: useQueryResult.data
        ? flattenEdges(useQueryResult.data)[queryName]
        : undefined
    };
  };
}

module.exports = {
  createApolloHook,
  createApolloGetter
};
