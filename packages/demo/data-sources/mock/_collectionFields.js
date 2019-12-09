import parametersPaginationHelper from "../../helpers/parametersPaginationHelper";
import gqlProductFields from "./_productFields";
import gqlImageFields from "./_imageFields";

const gqlCollectionFields = params => {
  let productsFieldQuery = "";

  if (params._fields && params._fields.products) {
    productsFieldQuery = `
            products(${parametersPaginationHelper(
              params._fields.products._pagination
            )}) {
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
            ${gqlImageFields()}
          }
          ${productsFieldQuery}
          
        }
      }
    `;
};

export default gqlCollectionFields;
