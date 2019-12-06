import React from "react";
import gql from "graphql-tag";
import {
  createApolloGetter,
  createApolloHook
} from "../../data-sources/helpers";

import gqlProductFields from "../../data-sources/mock/_productFields";
import gqlImageFields from "../../data-sources/mock/_imageFields";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";

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
        collections(${parametersPaginationHelper(params._pagination)}) {
          edges {
            node {
              id
              handle
              title
              description
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
