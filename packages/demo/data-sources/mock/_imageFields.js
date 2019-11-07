const gqlImageFields = params => {
  return `
        variants {
          name
          srcset {
            src
            width
          }
          aspectRatio
        }
    `;
};

export default gqlImageFields;
