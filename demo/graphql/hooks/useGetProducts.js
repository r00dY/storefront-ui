import { useQuery } from "@apollo/react-hooks";
import getCollection from "../queries/getCollection";
import mapProductsToMultipleVariants from "../../helpers/mapProductsToMultipleVariants";

// może obiekt OPTIONS, z kluczami:
// collectionName, productsAmount, mapper,
const useGetProducts = (collectionName, productsAmount) => {
  const { data, loading } = useQuery(getCollection, {
    variables: { collectionName, productsAmount }
  });

  if (!data) {
    return [data, loading];
  }

  const { collectionByHandle } = data;

  const mappedProducts = mapProductsToMultipleVariants(
    collectionByHandle && collectionByHandle.products
      ? collectionByHandle.products
      : []
  );

  return [mappedProducts, loading];
};

export default useGetProducts;
