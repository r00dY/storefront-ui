import gqlProductVariantFields from "./_productVariantFields";

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

export default gqlProductFields;
