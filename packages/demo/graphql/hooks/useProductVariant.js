const useProductVariant = (product, attributes) => {
  if (!product) {
    return product;
  }

  const attributesNames = Object.keys(attributes).map(attr =>
    attr.toLowerCase()
  );

  const variant = product.variants.find(variant => {
    return variant.selectedOptions.every(option => {
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

  const variantColor = variant.selectedOptions.filter(
    option => option.name === "Color"
  )[0].value;

  const images = product.images
    .filter(image => {
      return image.altText.indexOf(variantColor) >= 0;
    })
    .map(image => ({ src: [{ w: 300, h: 400, url: image.src }] }));

  return {
    ...variant,
    options: product.options,
    images,
    price: variant.priceV2,
    variants: product.variants.filter(
      variant =>
        variant.selectedOptions.filter(option => option.name === "Color")[0]
          .value === variantColor
    )
  };
};

export default useProductVariant;
