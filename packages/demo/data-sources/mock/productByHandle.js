import React from "react";
import { createApolloGetter, createApolloHook } from "../helpers";

import { getProductByHandleQuery } from "../../graphql/queries";

const gqlCollectionByHandle = params => {
  return getProductByHandleQuery(params.handle);
};

export const getProductByHandle = createApolloGetter(
  "productByHandle",
  gqlCollectionByHandle
);
export const useProductByHandle = createApolloHook(
  "productByHandle",
  gqlCollectionByHandle
);
