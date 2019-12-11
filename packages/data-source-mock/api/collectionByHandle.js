import React from "react";

import {
  createApolloGetter,
  createApolloHook
} from "../../data-source-helpers/graphql/apolloClient";
import { gqlCollectionByHandleQuery } from "../../data-source-helpers/graphql/collectionQuery";

export const getCollectionByHandle = apolloClient =>
  createApolloGetter(
    "collectionByHandle",
    gqlCollectionByHandleQuery,
    apolloClient
  );

export const useCollectionByHandle = () =>
  createApolloHook("collectionByHandle", gqlCollectionByHandleQuery);
