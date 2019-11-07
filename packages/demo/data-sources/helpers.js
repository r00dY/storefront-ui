import { useApolloClient, useQuery, useLazyQuery } from "@apollo/react-hooks";
import { useRef } from "react";
import { createApolloClient } from "../lib/init-apollo";

export class QueryWithResult {
  constructor(queryName, params, data, error) {
    this.queryName = queryName;
    this.params = params;
    this.data = data;
    this.error = error;

    this._queryWithResult = true;
  }

  get isEmpty() {
    return !this.data && !this.error;
  }
}

export function createGetter(queryName, fetchFunction) {
  const fun = async (params = {}, options = {}) => {
    options.skipInBrowser = options.skipInBrowser || false;

    if (!process.browser || (process.browser && !options.skipInBrowser)) {
      try {
        const data = await fetchFunction(params);
        return new QueryWithResult(queryName, params, data, undefined);
      } catch (e) {
        return new QueryWithResult(queryName, params, undefined, e);
      }
    }
    return new QueryWithResult(queryName, params, undefined, undefined);
  };

  return fun;
}

export function flattenEdges(data) {
  let ret = {};

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof Object && value.edges) {
      ret[key] = value.edges.map(x => flattenEdges(x.node));
    } else {
      ret[key] = value;
    }
  });

  return ret;
}

export function createApolloGetter(queryName, queryFunction) {
  const fetchFunction = async params => {
    const client = createApolloClient();

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
