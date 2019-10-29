import { useQuery } from "@apollo/react-hooks";
import { getProductQuery, productFragmentQuery } from "../queries";

const useProduct = id => {
  let product = null;

  const { loading, error, data, client } = useQuery(getProductQuery, {
    variables: { id }
  });

  const cachedElement = client.readFragment({
    fragment: productFragmentQuery,
    id: `Product:${id}`
  });

  if (cachedElement && !data) {
    product = cachedElement;
  }

  if (data) {
    product = data.node;
  }

  return { product, loading, error };
};

export default useProduct;
