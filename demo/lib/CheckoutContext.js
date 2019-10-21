import React, { useState } from "react";

const CheckoutContext = React.createContext();

const InjectCheckoutContext = props => {
  const [checkout, setCheckout] = useState(props.checkout);

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export { InjectCheckoutContext, CheckoutContext };
