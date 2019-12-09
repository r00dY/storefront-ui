import { useApolloClient, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { createGetter, flattenEdges } from "../main";
import React, { useRef } from "react";

export function createApolloGetter(queryName, queryFunction) {
  const fetchFunction = async params => {
    const client = global.APOLLO_CLIENT;

    try {
      const result = await client.query({
        query: queryFunction(params)
      });

      return result.data;
    } catch (e) {
      console.error("[fetchCollectionByHandle]", e);
    }
  };

  return createGetter(queryName, fetchFunction);
}

export function createApolloHook(queryName, queryFunction) {
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
        client.writeQuery({ query: queryFunction(arg.params), data: arg.data });
      }
    }

    const useQueryResult = useQuery(
      queryFunction(arg._queryWithResult ? arg.params : arg),
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
