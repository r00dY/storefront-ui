import { useMutation } from "@apollo/react-hooks";
import { addVariantToCartMutation } from "../mutations";
import { showNotification } from "storefront-ui/Notifications";
import React from "react";

const useAddToCart = (checkoutId, productVariant) => {
  const [addVariantToCart, { loading }] = useMutation(addVariantToCartMutation);

  const addToCart = async quantity => {
    return await addVariantToCart({
      variables: {
        checkoutId,
        lineItems: [{ variantId: productVariant.id, quantity }]
      }
    });
  };

  return [addToCart, loading];
};

export default useAddToCart;
