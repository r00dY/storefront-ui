import gql from "graphql-tag";
import { CheckoutFragment } from "./mutations";

export const productFragmentQuery = gql`
  fragment product on Product {
    id
    title
    options {
      id
      name
      values
    }
    images(first: 250) {
      edges {
        node {
          id
          src
          altText
        }
      }
    }

    variants(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          selectedOptions {
            name
            value
          }
          image {
            src
            altText
          }
          price
          priceV2 {
            currencyCode
            amount
          }
        }
      }
    }
  }
`;

const getSort = filters => {
  switch (filters.sort[0].id) {
    case "newest":
      return "sortKey: CREATED_AT, reverse: true";
    case "price-asc":
      return "sortKey: PRICE";
    case "price-desc":
      return "sortKey: PRICE, reverse: true";
    case "most-popular":
      return "sortKey: BEST_SELLING, reverse: true";
  }
};

const getFilterQuery = filters =>
  Object.keys(filters).map(filterName => {
    if (!filters[filterName].length) return;

    switch (filterName) {
      case "productTags":
        return `tag:${filters[filterName].map(tag => tag.id).join(" OR ")}`;
      case "productType":
        return `product_type:${filters[filterName]
          .map(tag => tag.id)
          .join(" OR ")}`;
      case "price":
        return `variants.price:${
          filters[filterName].from
            ? filters[filterName].to
              ? ">" +
                filters[filterName].from +
                " AND variants.price:<" +
                filters[filterName].to
              : ">" + filters[filterName].from
            : "<" + filters[filterName].to
        }`;
    }
  });

export const getProductsQuery = (filters = []) => {
  let filterQuery = `query:"${getFilterQuery(filters)}"`;

  if (filters.sort && filters.sort.length) {
    filterQuery += `, ${getSort(filters)}`;
  }

  return gql`
        query query {
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
        shop {
            name
            description
            products(first: 20, ${filterQuery}) {
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                edges {
                    node {
                        ...product
                    }
                }
            }
        }
    }
    
        ${productFragmentQuery}
    `;
};

export const getProductQuery = gql`
  query Product($id: ID!) {
    node(id: $id) {
      ...product
    }
  }
  ${productFragmentQuery}
`;

export const getCheckoutQuery = gql`
  query Checkout($id: ID!) {
    node(id: $id) {
      ...CheckoutFragment
    }
  }
  ${CheckoutFragment}
`;
