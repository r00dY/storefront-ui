import { useMutation } from "@apollo/react-hooks";
import { addVariantToCartMutation } from "../mutations";
import { showNotification } from "storefront-ui/Notifications";
import React from "react";

const useAddToCart = () => {
  const [addVariantToCart, { loading }] = useMutation(addVariantToCartMutation);

  const addToCart = async (checkoutId, lineItems) => {
    return await addVariantToCart({
      variables: {
        checkoutId,
        lineItems
      }
    });
  };

  return [addToCart, loading];
};

export default useAddToCart;
