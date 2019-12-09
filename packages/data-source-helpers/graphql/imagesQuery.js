const paginator = require("./paginator");

const gqlImageQuery = (params, name = "image") => {
  return `
    ${name} {
      altText
      variants {
        name
        srcset {
          src
          width
        }
        aspectRatio
      }
    }
  `;
};

const gqlImagesQuery = (params, name = "images") => {
  return `
    ${name}(${paginator(params)}) {
      edges {
        ${gqlImageQuery({}, "node")}
      }
    }
  `;
};

module.exports = {
  gqlImagesQuery,
  gqlImageQuery
};
