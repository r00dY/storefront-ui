import React from "react";
import gql from "graphql-tag";
import { createApolloGetter, createApolloHook } from "../helpers";

import gqlProductFields from "./_productFields";
import gqlImageFields from "./_imageFields";

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
                ${gqlImageFields()}
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
