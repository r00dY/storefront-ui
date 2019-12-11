import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "@commerce-ui/data-source-helpers/graphql/apolloClient";
import { gqlProductsQuery } from "@commerce-ui/data-source-helpers/graphql/productQuery";

export const getProducts = createApolloGetter("products", gqlProductsQuery);
export const useProducts = createApolloHook("products", gqlProductsQuery);
