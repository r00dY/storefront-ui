import useAddToCart from "./useAddToCart";
import React from "react";
import { showNotification } from "storefront-ui/Notifications";
import Notification from "../../components/Notification";

const useAddToCartAndShowNotificatiion = (checkoutId, setCheckout) => {
  const [addToCartMutation, loading] = useAddToCart();

  const addToCart = async lineItems => {
    try {
      const result = await addToCartMutation(checkoutId, lineItems);

      showNotification(({ close }) => (
        <Notification>Product successfuly added to cart</Notification>
      ));

      setCheckout(result.data.checkoutLineItemsAdd.checkout);
    } catch (error) {
      showNotification(({ close }) => (
        <Notification>
          There was some error while adding product to cart
        </Notification>
      ));
    }
  };

  return [addToCart, loading];
};

export default useAddToCartAndShowNotificatiion;
