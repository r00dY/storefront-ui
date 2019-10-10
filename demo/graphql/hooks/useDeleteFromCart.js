import { useMutation } from "@apollo/react-hooks";
import { checkoutLineItemsRemove } from "../mutations";
import React from "react";

const useDeleteFromCart = () => {
  const [deleteFromCartMutation, { loading }] = useMutation(
    checkoutLineItemsRemove
  );

  const deleteFromCart = async (checkoutId, ids) => {
    return await deleteFromCartMutation({
      variables: {
        checkoutId,
        lineItemIds: Array.isArray(ids) ? ids : [ids]
      }
    });
  };

  return [deleteFromCart, loading];
};

export default useDeleteFromCart;
