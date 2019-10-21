import React from "react";
import useGetProduct from "../graphql/hooks/useGetProduct";
import { useTheme } from "storefront-ui/Theme";
import { showNotification } from "storefront-ui/Notifications";
import { rslin } from "responsive-helpers";
import ProductPageContent from "../components/ProductPageContent";

const ProductComponent = props => {
  const productId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQwODEzNjEzNTQ4MTY=";
  const variantId =
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDAyMzk4MzIwMjM2OA==";
  const { product, loading, cache, error } = useGetProduct(
    productId,
    variantId
  );

  if (error) return `Error! ${error.message}`;

  /*
    /:productId
   */

  return loading ? (
    cache ? (
      <ProductPageContent product={cache} />
    ) : (
      "Loading..."
    )
  ) : (
    <ProductPageContent product={product} />
  );
};

export default ProductComponent;
