export default item => {
  return {
    ...item.node,
    price: item.node.variant.priceV2,
    productVariant: {
      ...item.node.variant,
      product: {
        href: "url",
        title: item.node.title,
        images: [
          { src: [{ w: 300, h: 400, url: item.node.variant.image.src }] }
        ]
      }
    }
  };
};
