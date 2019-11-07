import React from "react";
import gql from "graphql-tag";
import { createApolloGetter, createApolloHook } from "../helpers";

import gqlProductFields from "./_productFields";

const gqlCollectionByHandle = params => {
  let productsFieldQuery = "";

  if (params._fields && params._fields.products) {
    productsFieldQuery = `
            products {
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
            id
            originalSrc
            altText
            variants {
              name
              aspectRatio
              src
            }
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
