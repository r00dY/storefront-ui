import React from "react";
import gql from "graphql-tag";
import { createApolloGetter, createApolloHook } from "../helpers";

const gqlProductVariantFields = params => {
  return `
      id
      sku
      price {
        amount
        currencyCode
      }
      title
      selectedOptions {
        name
        value
      }
    `;
};

const gqlProductFields = params => {
  let variantsFieldQuery = "";

  if (params._fields && params._fields.variants) {
    variantsFieldQuery = `
            variants {
              edges {
                node {
                    ${gqlProductVariantFields(params._fields.variants)}
                }
              }
            } 
        `;
  }

  return `
        id
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
              originalSrc
              variants {
                name
                aspectRatio
                src
              }
            }
          }
        }
        ${variantsFieldQuery}
    `;
};

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
