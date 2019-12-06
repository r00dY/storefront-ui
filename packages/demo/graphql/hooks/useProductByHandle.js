import React from "react";
import {
  createApolloGetter,
  createApolloHook
} from "../../data-sources/helpers";
import gqlProductFields from "../../data-sources/mock/_productFields";
import gql from "graphql-tag";
import gqlImageFields from "../../data-sources/mock/_imageFields";
import gqlProductVariantFields from "../../data-sources/mock/_productVariantFields";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";

const gqlProductByHandle = params => {
  const fields =
    params._fields && params._fields.product
      ? gqlProductFields(params._fields.product)
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
        variants(${parametersPaginationHelper(
          params._fields.product._fields.variants._pagination
        )}) {
          edges {
            node {
                ${gqlProductVariantFields(
                  params._fields.product._fields.variants
                )}
            }
          }
        } 
      `;

  return gql`query {
    productByHandle(handle: "${params.handle}") {
      ${fields}
    }
  }
  `;
};

export const getProductByHandle = createApolloGetter(
  "productByHandle",
  gqlProductByHandle
);
export const useProductByHandle = createApolloHook(
  "productByHandle",
  gqlProductByHandle
);
