import { useQuery } from "@apollo/react-hooks";
import getCollection from "../queries/getCollection";
import mapProductsToMultipleVariants from "../../helpers/mapProductsToMultipleVariants";

const useProducts = filters => {
  const collectionName = filters.find(
    filter => filter.name === "collectionName"
  ).value;
  const productsAmount = filters.find(
    filter => filter.name === "productsAmount"
  ).value;

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

export default useProducts;
