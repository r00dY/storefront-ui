import gql from "graphql-tag";

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

export default filters => {
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

      collectionByHandle(handle: "frontpage") {
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
        products(first: 30) {
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
};
