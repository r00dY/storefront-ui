import gql from "graphql-tag";

export default gql`
  query query($amount: Int!) {
    collections(first: $amount) {
      edges {
        node {
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
          title
        }
      }
    }
  }
`;
