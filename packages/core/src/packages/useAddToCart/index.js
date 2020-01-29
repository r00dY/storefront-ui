import React, { useState, useRef } from "react";

function useAddToCart({ productVariant, quantity = 1, onSuccess }) {
  const timer = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const buttonProps = {
    onClick: () => {
      if (isLoading) {
        return;
      }
      clearTimeout(timer.current);

      setLoading(true);
      timer.current = setTimeout(() => {
        setLoading(false);

        if (onSuccess) {
          onSuccess();
        }
      }, 1000);
    },
    isLoading,
    "aria-label": "Add to cart"
  };

  const notificationProps = {
    role: "alert",
    "aria-label": "Product added"
  };

  return { buttonProps, notificationProps };
}

export default useAddToCart;
