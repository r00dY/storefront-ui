export default (product, variantId) => {
  const variant = product.node.variants.edges.filter(
    variant => variant.node.id === variantId
  )[0];

  if (!variant) {
    throw Error(`There is no product with id "${variantId}"`);
  }

  const variantColor = variant.node.selectedOptions.filter(
    option => option.name === "Color"
  )[0].value;

  const images = product.node.images.edges
    .filter(image => {
      return image.node.altText.indexOf(variantColor) >= 0;
    })
    .map(image => ({ src: [{ w: 300, h: 400, url: image.node.src }] }));

  return {
    ...variant.node,
    options: product.node.options,
    images,
    price: variant.node.priceV2
  };
};
