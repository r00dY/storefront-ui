import { useContext } from "react";
import { CheckoutContext } from "../../lib/CheckoutContext";

const useCheckout = () => {
  const { checkout } = useContext(CheckoutContext);

  return {
    checkout
  };
};

export default useCheckout;
