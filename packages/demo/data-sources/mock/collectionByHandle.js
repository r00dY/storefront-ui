import React, { useState, useEffect, useRef } from "react";
import gql from "graphql-tag";
import { createApolloClient } from "../../lib/init-apollo";
import { createGetter, flattenEdges } from "../helpers";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

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

const gqlQuery = params => {
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

export async function fetchCollectionByHandle(params = {}) {
  const client = createApolloClient();

  try {
    const result = await client.query({
      query: gqlQuery(params)
    });

    return result.data;
  } catch (e) {
    console.error("[fetchCollectionByHandle]", e);
  }
}

export const getCollectionByHandle = createGetter(
  fetchCollectionByHandle,
  "collectionByHandle"
);

export function useCollectionByHandle(arg = {}, options = {}) {
  const isFirstRenderRef = useRef(true);
  const client = useApolloClient();

  // If this is the first call, just write content fetched during SSR to cache and return result.
  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;

    if (!!arg._queryWithResult && !arg.isEmpty) {
      client.writeQuery({ query: gqlQuery(arg.params), data: arg.data });
    }
  }

  const useQueryResult = useQuery(
    gqlQuery(arg._queryWithResult ? arg.params : arg),
    options
  );

  return {
    ...useQueryResult,
    data: useQueryResult.data
      ? flattenEdges(useQueryResult.data.collectionByHandle)
      : undefined
  };
}
