import { useMutation } from "@apollo/react-hooks";
import { addVariantToCartMutation } from "../mutations";
import React from "react";
import useCheckout from "./useCheckout";

const useAddToCart = productVariant => {
  const [checkout] = useCheckout();
  const [addVariantToCart, { loading }] = useMutation(addVariantToCartMutation);

  const addToCart = async quantity => {
    return await addVariantToCart({
      variables: {
        checkoutId: checkout.id,
        lineItems: [{ variantId: productVariant.id, quantity }]
      }
    });
  };

  return [addToCart, loading];
};

export default useAddToCart;
