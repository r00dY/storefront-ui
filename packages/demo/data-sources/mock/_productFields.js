import gqlProductVariantFields from "./_productVariantFields";
import gqlImageFields from "./_imageFields";

const gqlProductFields = params => {
  let variantsFieldQuery = "";

  if (params._fields && params._fields.variants) {
    variantsFieldQuery = `
            variants(first: 200) {
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
              ${gqlImageFields()}
            }
          }
        }
        ${variantsFieldQuery}
    `;
};

export default gqlProductFields;
