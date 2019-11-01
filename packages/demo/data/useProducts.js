import React, { useEffect, useState } from "react";

import products from "./products";

// temporarily here
class QueryBundle {
  constructor(args, data, error, isEmpty = false) {
    this.args = args;
    this.data = data;
    this.error = error;
    this.isEmpty = isEmpty;
    this._queryBundle = true;
  }
}

export function fetchProducts(args = {}) {
  const { first, last, after, before, sortKey, reverse, query } = args;

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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filteredProducts);
    }, 1000);
  });
}

export async function getProducts(args, onlyOnServer = false) {
  if (onlyOnServer && typeof window === "object") {
    return new QueryBundle(args, undefined, undefined, true); // return "empty" QueryBundle (never called)
  }

  try {
    const data = await fetchProducts(args);
    return new QueryBundle(args, data, undefined);
  } catch (e) {
    return new QueryBundle(args, undefined, e);
  }
}

/**
 * This hook fetches products.
 *
 * query will be similar to https://help.shopify.com/en/api/getting-started/search-syntax#search-query-syntax in the future
 *
 */
export function useProducts(arg) {
  console.log(arg);
  const [products, setProducts] = useState(
    arg._queryBundle ? arg.data : undefined
  );
  const [error, setError] = useState(arg._queryBundle ? arg.error : undefined);
  const [isFetching, setFetching] = useState(arg._queryBundle && arg.isEmpty);

  // In other case let's approach this normally
  useEffect(() => {
    if (!products) {
      setFetching(true);
      fetchProducts(arg._queryBundle ? arg.args : arg).then(products => {
        setProducts(products);
        setFetching(false);
      });
    }
  }, []); // temporarily called only once, in future this will be called every time but cache will be changed

  return {
    products,
    isFetching,
    error
  };
}
