import React from "react";

import checkout from "./checkout";

/**
 * This hook fetches checkout.
 *
 * isFetching (Bool)
 *
 * true when backend is fetching new checkout in the background
 *
 * isPotentiallyInvalid
 *
 * true when we are updating the cart (like adding / removing products from basket). In such case we might want to show loader in checkout total price to suggest that current price might not be the current one, but we still don't know which is current one.
 * It's different from isFetching. isFetching is true always when fetch is being in progress (like sync when we return to the tab with ecommerce), this fetch doesn't have to mean that checkout total price etc is potentially invalid
 *
 */
export default function useCheckout() {
  return {
    checkout: checkout,
    isFetching: false,
    isPotentiallyInvalid: false,
    error: null
  };
}
