import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "@commerce-ui/data-source-helpers/graphql/apolloClient";
import { gqlCollectionByHandleQuery } from "@commerce-ui/data-source-helpers/graphql/collectionQuery";

export const getCollectionByHandle = createApolloGetter(
  "collectionByHandle",
  gqlCollectionByHandleQuery
);
export const useCollectionByHandle = createApolloHook(
  "collectionByHandle",
  gqlCollectionByHandleQuery
);
