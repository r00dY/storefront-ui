import React from "react";

import checkout from "./checkout";

export default function useCheckout() {
  return {
    checkout: checkout,
    isFetching: false,
    error: null
  };
}
