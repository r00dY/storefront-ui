export default product =>
  Object.values(
    product.node.variants.edges.reduce((accumulated, current) => {
      const currentColor = current.node.selectedOptions.filter(
        option => option.name === "Color"
      )[0].value;
      console.log("product", product);
      if (!accumulated[currentColor]) {
        const image = product.node.images.edges.filter(image => {
          return image.node.altText === `${currentColor}-1`;
        })[0].node;

        accumulated[currentColor] = {
          ...current.node,
          images: [{ src: [{ w: 300, h: 500, url: image.src }], alt: "" }],
          price: current.node.priceV2,
          title: `${product.node.title} / ${currentColor}`
        };
      }

      return accumulated;
    }, {})
  );
