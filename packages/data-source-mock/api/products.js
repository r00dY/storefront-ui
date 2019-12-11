import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "../../data-source-helpers/graphql/apolloClient";
import { gqlProductsQuery } from "../../data-source-helpers/graphql/productQuery";

export const getProducts = createApolloGetter("products", gqlProductsQuery);
export const useProducts = createApolloHook("products", gqlProductsQuery);
