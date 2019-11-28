import { useContext, useRef, useEffect } from "react";
import { CheckoutContext } from "../../lib/CheckoutContext";
import { createCheckoutMutation } from "../mutations";
import { useMutation } from "@apollo/react-hooks";

const useCheckout = () => {
  const { checkout, setCheckout } = useContext(CheckoutContext);
  const [createCheckoutFunction] = useMutation(createCheckoutMutation);

  const createCheckout = async lineItems => {
    const data = await createCheckoutFunction({
      variables: { input: { lineItems } }
    });
    setCheckout(data.data.checkoutCreate.checkout);

    return data.data.checkoutCreate.checkout;
  };

  return { checkout: checkout ? checkout : null, setCheckout, createCheckout };
};

export default useCheckout;
