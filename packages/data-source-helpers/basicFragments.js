const gql = require("graphql-tag");

const imageStandardFields = gql`
  fragment imageStandardFields on Image {
    id
    altText
    originalSrc
  }
`;

const collectionStandardFields = gql`
  fragment collectionStandardFields on Collection {
    id
    handle
    title
    description
    image {
      imageStandardsFields
    }
  }
`;
//
// const allStandardFragments = gql`
//     ${imageStandardsFields}
//     ${collectionStandardsFields}
// `;

module.exports = { collectionStandardFields, imageStandardFields };
