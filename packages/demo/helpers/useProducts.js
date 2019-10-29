import React, { useState, useRef } from "react";
import data from "../data";
import shuffle from "../utils/shuffle";

function useProducts() {
  const [products, setProducts] = useState(data.products);
  const [isLoading, setLoading] = useState(false);

  const timeout = useRef(null);

  const query = callback => {
    setLoading(true);
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setProducts([...shuffle(products)]);
      setLoading(false);

      if (callback) {
        callback();
      }
    }, 500);
  };

  return {
    products,
    isLoading,
    query
  };
}

export default useProducts;
