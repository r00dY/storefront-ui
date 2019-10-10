import mapProductToMultipleVariants from "./mapProductToMultipleVariants";

export default graphqlProducts =>
  graphqlProducts.edges
    ? graphqlProducts.edges.reduce((products, product) => {
        products.push(...mapProductToMultipleVariants(product));
        return products;
      }, [])
    : graphqlProducts;
