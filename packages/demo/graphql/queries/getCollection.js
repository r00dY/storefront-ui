import gql from "graphql-tag";

export default gql`
  query query($collectionName: String!, $productsAmount: Int!) {
    productTypes(first: 20) {
      edges {
        node
      }
    }
    productTags(first: 20) {
      edges {
        node
      }
    }

    collectionByHandle(handle: $collectionName) {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        id
        originalSrc
        src
        transformedSrc
      }
      products(first: $productsAmount) {
        edges {
          cursor
          node {
            availableForSale
            description
            descriptionHtml
            handle
            id
            images(first: 100) {
              edges {
                cursor
                node {
                  altText
                  id
                  originalSrc
                  src
                  transformedSrc
                }
              }
            }
            onlineStoreUrl
            productType
            publishedAt
            tags
            title
            updatedAt
            variants(first: 200) {
              edges {
                cursor
                node {
                  available
                  availableForSale
                  id
                  image {
                    altText
                    id
                    originalSrc
                    src
                    transformedSrc
                  }
                  price
                  priceV2 {
                    amount
                    currencyCode
                  }
                  requiresShipping
                  sku
                  title
                  weight
                  weightUnit
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
            }
            vendor
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
      title
      updatedAt
    }
  }
`;
