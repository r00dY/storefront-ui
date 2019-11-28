import React, { useState } from "react";

const CheckoutContext = React.createContext([{}, () => {}]);

const InjectCheckoutContext = props => {
  const [state, setState] = useState({
    checkout: props.checkout,
    checkoutId: props.checkoutId
  });

  const setCheckout = checkout => {
    setState(prev => {
      return { ...prev, checkout };
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutId: state.checkoutId,
        checkout: state.checkout,
        setCheckout
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

export { InjectCheckoutContext, CheckoutContext };
