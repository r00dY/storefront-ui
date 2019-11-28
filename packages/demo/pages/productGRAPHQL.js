import React from "react";
import { rslin } from "responsive-helpers";
import useProductVariant from "../graphql/hooks/useProductVariant";
import useProduct from "../graphql/hooks/useProduct";
import PageContent from "./helpers/pageContent";
import {
  getProductByHandle,
  useProductByHandle
} from "../data-sources/mock/productByHandle";

const ProductComponent = ({ productQueryWithData }) => {
  const { data: product, error, loading } = useProductByHandle(
    productQueryWithData
  );

  const variant = useProductVariant(product, { size: "XS", color: "Pine" });

  if (error) return `Error! ${error.message}`;

  return loading ? "Loading..." : <PageContent variant={variant} />;
};

ProductComponent.getInitialProps = async ({ req }) => {
  let productQueryWithData = await getProductByHandle({
    handle: "clubknit-polo"
  });

  return { productQueryWithData };
};

export default ProductComponent;
