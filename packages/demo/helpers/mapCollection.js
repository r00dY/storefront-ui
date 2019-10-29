export default collection => {
  return {
    ...collection,
    image: {
      src: [
        {
          url: collection.image.src,
          w: 2667,
          h: 1000
        }
      ],
      alt: collection.image.altText
    }
  };
};
