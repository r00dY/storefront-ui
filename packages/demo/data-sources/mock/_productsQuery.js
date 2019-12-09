import gqlProductVariantFields from "./_productVariantFields";
import gqlImageFields from "./_imageFields";
import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";

const gqlProductFields = params => {
  let variantsFieldQuery = "";

  if (params._fields && params._fields.variants) {
    variantsFieldQuery = `
            variants(${parametersPaginationHelper(
              params._fields.variants._pagination
            )}) {
              edges {
                node {
                    ${gqlProductVariantFields(params._fields.variants)}
                }
              }
            } 
        `;
  }

  let productsFieldQuery = "";

  if (params._fields && params._fields.products) {
    productsFieldQuery = `
            products(first: ${params.productsAmount}) {
                edges {
                  node {
                    ${gqlProductFields(params._fields.products)}
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
              altText
              ${gqlImageFields()}
            }
          }
        }
        ${variantsFieldQuery}
    `;
};

export default gqlProductFields;
