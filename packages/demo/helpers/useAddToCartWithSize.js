import React, { useState } from "react";
import useAddToCart from "./useAddToCart";

export default function useAddToCartWithSize(product) {
  const [addToCart, isLoading] = useAddToCart(product);
  const [size, setSize] = useState(null);
  const [isAddToBasketPending, setAddToBasketPending] = useState(false);
  const [sizeSelectOpen, setSizeSelectOpen] = useState(false);

  const onAddToCartClick = () => {
    if (size) {
      addToCart();
    } else {
      setAddToBasketPending(true);
      setSizeSelectOpen(true);
    }
  };

  const buttonProps = {
    onClick: onAddToCartClick,
    isLoading: isLoading
  };

  const selectProps = {
    options: product.options.find(x => x.name === "Size").values,
    value: size,
    onChange: val => {
      setSize(val);

      if (isAddToBasketPending) {
        setAddToBasketPending(false);
        addToCart();
      }
    },
    placeholder: "Select size",
    open: sizeSelectOpen,
    onRequestClose: () => {
      setSizeSelectOpen(false);
    },
    onClick: () => {
      setSizeSelectOpen(!sizeSelectOpen);
    }
  };

  return {
    buttonProps,
    selectProps
  };
}
