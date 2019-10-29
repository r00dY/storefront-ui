import { useMutation } from "@apollo/react-hooks";
import { checkoutLineItemsUpdate } from "../mutations";
import { showNotification } from "storefront-ui/Notifications";
import React from "react";

const useUpdateCartItemQuantity = () => {
  const [updateCartItemQuantityMutation, { loading }] = useMutation(
    checkoutLineItemsUpdate
  );

  const updateCartItemQuantity = async (checkoutId, lineItemId, quantity) => {
    return await updateCartItemQuantityMutation({
      variables: {
        checkoutId,
        lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
      }
    });
  };

  return [updateCartItemQuantity, loading];
};

export default useUpdateCartItemQuantity;
