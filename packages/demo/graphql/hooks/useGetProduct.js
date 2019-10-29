import mapProductToSingleVariant from "../../helpers/mapProductToSingleVariant";
import { useQuery } from "@apollo/react-hooks";
import { getProductQuery, productFragmentQuery } from "../queries";
const useGetProduct = (productId, variantId) => {
  const { loading, error, data, client } = useQuery(getProductQuery, {
    variables: { id: productId }
  });

  let product = null;

  const cachedElement = client.readFragment({
    fragment: productFragmentQuery,
    id: `Product:${productId}`
  });

  if (cachedElement && !data) {
    product = mapProductToSingleVariant(cachedElement, variantId);
  }

  if (data) {
    product = mapProductToSingleVariant(data, variantId);
  }

  return { product, loading, error };
};

export default useGetProduct;
