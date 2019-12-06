import React from "react";
import gql from "graphql-tag";
import {
  createApolloGetter,
  createApolloHook
} from "../../data-sources/helpers";
import gqlProductFields from "../../data-sources/mock/_productFields";
import gqlImageFields from "../../data-sources/mock/_imageFields";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";

const gqlCollectionByHandle = params => {
  let productsFieldQuery = "";

  if (params._fields && params._fields.products) {
    productsFieldQuery = `
            products(${parametersPaginationHelper(
              params._fields.products._pagination
            )}) {
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
