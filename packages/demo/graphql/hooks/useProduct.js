import { useQuery } from "@apollo/react-hooks";
import { getProductByHandleQuery, productFragmentQuery } from "../queries";

const useProduct = handle => {
  let product = null;

  const { loading, error, data, client } = useQuery(getProductByHandleQuery, {
    variables: { handle }
  });

  const cachedElement = client.readFragment({
    fragment: productFragmentQuery,
    id: `Product:${handle}`
  });

  if (cachedElement && !data) {
    product = cachedElement;
  }

  if (data) {
    product = data.productByHandle;
  }

  return { product, loading, error };
};

export default useProduct;
