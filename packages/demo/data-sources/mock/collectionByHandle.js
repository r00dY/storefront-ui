import React from "react";
import gql from "graphql-tag";
import { createApolloGetter, createApolloHook } from "../helpers";

import gqlProductFields from "./_productFields";
import gqlImageFields from "./_imageFields";

const gqlCollectionByHandle = params => {
  let productsFieldQuery = "";

  if (params._fields && params._fields.products) {
    productsFieldQuery = `
            products(first: ${params.productsAmount}) {
                edges {
                  node {
                    ${gqlProductFields(params._fields.products)}
                  }
                }
              }
        `;
  }

  return gql`
      query {
        collectionByHandle(handle: "${params.handle}") {
          handle
          title
          description
          image {
            ${gqlImageFields()}
          }
          ${productsFieldQuery}
          
        }
      }
    `;
};

export const getCollectionByHandle = createApolloGetter(
  "collectionByHandle",
  gqlCollectionByHandle
);
export const useCollectionByHandle = createApolloHook(
  "collectionByHandle",
  gqlCollectionByHandle
);
