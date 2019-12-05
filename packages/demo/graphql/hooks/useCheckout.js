import React, { useContext } from "react";
import gql from "graphql-tag";
import {
  createApolloGetter,
  createApolloHook
} from "../../data-sources/helpers";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";
import { CheckoutContext } from "../../lib/CheckoutContext";

const gqlCheckout = params => {
  return gql`
      query {
        checkout(id: "${params.id}") {
            id
            webUrl
            subtotalPrice {
              currencyCode
              amount
            }
            totalPrice {
              amount
              currencyCode
            } 
            totalTax {
              amount
              currencyCode
            } 
            lineItems(${parametersPaginationHelper(
              params._fields.lineItems._pagination
            )}) {
              edges {
                node {
                  id
                  title
                  variant {
                    selectedOptions {
                      name
                      value
                    } 
                    id
                    title
                    image {
                      altText
                      variants {
                        srcset {
                          width
                          src
                        }
                        aspectRatio
                        name
                      }
                    }
                    price {
                      amount
                      currencyCode
                    } 
                  }
                  quantity
                }
              }
            }
        }
      }
    `;
};

export const getCheckout = createApolloGetter("checkout", gqlCheckout);
// export const useCheckout = createApolloHook("checkout", gqlCheckout);

export const useCheckout = () => {
  const { checkout } = useContext(CheckoutContext);

  return { data: checkout };
};
