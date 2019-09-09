import mapProductToMultipleVariants from "./mapProductToMultipleVariants";

export default graphqlProducts =>
  graphqlProducts.edges.reduce((products, product) => {
    products.push(...mapProductToMultipleVariants(product));
    return products;
  }, []);
