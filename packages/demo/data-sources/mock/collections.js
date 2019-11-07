import React from "react";
import gql from "graphql-tag";
import { createApolloGetter, createApolloHook } from "../helpers";

import gqlProductFields from "./_productFields";

const gqlCollections = params => {
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
        collections {
          edges {
            node {
              id
              handle
              title
              description
              tags
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
        }
      }
    `;
};

export const getCollections = createApolloGetter("collections", gqlCollections);
export const useCollections = createApolloHook("collections", gqlCollections);
