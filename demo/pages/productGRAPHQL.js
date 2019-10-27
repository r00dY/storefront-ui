import React from "react";
import { useTheme } from "storefront-ui/Theme";
import { showNotification } from "storefront-ui/Notifications";
import { rslin } from "responsive-helpers";
import ProductPageContent from "../components/ProductPageContent";
import useProductVariant from "../graphql/hooks/useProductVariant";
import useProduct from "../graphql/hooks/useProduct";

const ProductComponent = props => {
  const { product, error, loading } = useProduct(
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQwODEzNjEzNTQ4MTY="
  );
  const variant = useProductVariant(product, { size: "XS", color: "Pine" });

  if (error) return `Error! ${error.message}`;

  return loading ? "Loading..." : <ProductPageContent product={variant} />;
};

export default ProductComponent;
