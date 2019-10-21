import { useContext } from "react";
import { CheckoutContext } from "../../lib/CheckoutContext";

const useCheckout = () => {
  const { checkout, setCheckout } = useContext(CheckoutContext);

  return [checkout, setCheckout];
};

export default useCheckout;
