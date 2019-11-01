import React from "react";

import products from "./products";

/**
 * This hook fetches products.
 *
 * query will be similar to https://help.shopify.com/en/api/getting-started/search-syntax#search-query-syntax in the future
 *
 */
export default function useProducts({
  first,
  last,
  after,
  before,
  reverse,
  sortKey,
  query
}) {
  // Filter
  // TODO: other filters than by collection and key / value

  let filteredProducts = products;

  query.forEach(({ key, value }) => {
    if (key === "collection") {
      filteredProducts = filteredProducts.filter(
        p => p.collections && p.collections.includes(value)
      );
    } else {
      filteredProducts = filteredProducts.filter(p => p[key] === value);
    }
  });

  // TODO: first, last, after, before, reverse, sortKey

  return {
    products: filteredProducts,
    isFetching: false,
    error: null
  };
}
