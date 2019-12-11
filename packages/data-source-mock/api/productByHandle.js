import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "../../data-source-helpers/graphql/apolloClient";
import { gqlProductByHandle } from "../../data-source-helpers/graphql/productQuery";

export const getProductByHandle = createApolloGetter(
  "productByHandle",
  gqlProductByHandle
);
export const useProductByHandle = createApolloHook(
  "productByHandle",
  gqlProductByHandle
);
