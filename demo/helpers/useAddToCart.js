import React, { useState } from "react";
import { showNotification } from "storefront-ui/Notifications";
import Notification from "../components/Notification";

let timeout;

function useAddToCart() {
  const [isLoading, setLoading] = useState(false);

  const addToCart = () => {
    clearTimeout();

    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);

      showNotification(<Notification>Product added to cart!</Notification>);
    }, 500);
  };

  return [addToCart, isLoading];
}

export default useAddToCart;
