const useProductVariant = (product, attributes) => {
  if (!product) {
    return product;
  }

  const attributesNames = Object.keys(attributes);

  const variant = product.variants.edges.find(variant => {
    return variant.node.selectedOptions.every(option => {
      const optionName = option.name.toLowerCase();
      if (attributesNames.includes(optionName)) {
        return option.value === attributes[optionName];
      }
      return true;
    });
  });

  if (!variant) {
    throw Error(
      `There is no variant with given attributes: "${Object.keys(attributes)
        .map(attr => `${attr} => ${attributes[attr]}`)
        .join(", ")}"`
    );
  }

  const variantColor = variant.node.selectedOptions.filter(
    option => option.name === "Color"
  )[0].value;

  const images = product.images.edges
    .filter(image => {
      return image.node.altText.indexOf(variantColor) >= 0;
    })
    .map(image => ({ src: [{ w: 300, h: 400, url: image.node.src }] }));

  return {
    ...variant.node,
    options: product.options,
    images,
    price: variant.node.priceV2,
    variants: product.variants.edges.filter(
      variant =>
        variant.node.selectedOptions.filter(
          option => option.name === "Color"
        )[0].value === variantColor
    )
  };
};

export default useProductVariant;
