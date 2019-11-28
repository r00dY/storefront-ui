import gql from "graphql-tag";

export const createCustomerMutation = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
      }
    }
  }
`;

export const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    subtotalPrice {
      amount
      currencyCode
    }
    currencyCode
    totalTax {
      amount
      currencyCode
    }
    totalPrice {
      amount
      currencyCode
    }
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            selectedOptions {
              name
              value
            }
            title
            image {
              id
              altText
              originalSrc
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
`;

export const checkoutCustomerAssociateMutation = gql`
  mutation checkoutCustomerAssociate(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociate(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const customerAccessTokenCreateMutation = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

export const createCheckoutMutation = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const addVariantToCartMutation = gql`
  mutation checkoutLineItemsAdd(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsUpdate = gql`
  mutation checkoutLineItemsUpdate(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
  ) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsRemove = gql`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsReplace = gql`
  mutation checkoutLineItemsReplace(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsReplace(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
