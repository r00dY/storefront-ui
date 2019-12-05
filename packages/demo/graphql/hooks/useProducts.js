import React from "react";
import {
  createApolloGetter,
  createApolloHook
} from "../../data-sources/helpers";
import gql from "graphql-tag";
import gqlProductFields from "../../data-sources/mock/_productFields";
import gqlImageFields from "../../data-sources/mock/_imageFields";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";

const gqlProducts = params => {
  let productFields =
    params._fields && params._fields.products
      ? gqlProductFields(params._fields.products)
      : `id
        title
        handle
        availableForSale
        createdAt
        tags
        options {
          name
          values
        }
        images {
          edges {
            node {
              ${gqlImageFields()}
            }
          }
        }
      `;

  return gql`
query {
  products(${parametersPaginationHelper(params._pagination)}) {
        edges {
          cursor
          node {
            ${productFields}          
          }
        }
  }
}
`;
};

export const getProducts = createApolloGetter("products", gqlProducts);
export const useProducts = createApolloHook("products", gqlProducts);
