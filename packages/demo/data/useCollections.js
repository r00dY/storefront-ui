import React from "react";

import collections from "./collections";

/**
 * This hook fetches products.
 *
 * query will be similar to https://help.shopify.com/en/api/getting-started/search-syntax#search-query-syntax in the future
 *
 */
export default function useCollections(args = {}) {
  const { first, last, after, before, reverse, sortKey, query } = args;

  // Filter
  // TODO: other filters than by collection and key / value

  let filteredCollections = collections;

  if (query) {
    query.forEach(({ key, value }) => {
      filteredCollections = filteredCollections.filter(p => p[key] === value);
    });
  }

  // TODO: first, last, after, before, reverse, sortKey

  return {
    products: filteredCollections,
    isFetching: false,
    error: null
  };
}
