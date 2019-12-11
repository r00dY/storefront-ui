import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "../../data-source-helpers/graphql/apolloClient";
import { gqlCollectionsQuery } from "../../data-source-helpers/graphql/collectionQuery";

export const getCollections = apolloClient =>
  createApolloGetter("collections", gqlCollectionsQuery, apolloClient);
export const useCollections = createApolloHook(
  "collections",
  gqlCollectionsQuery
);
