import useCheckout from "../../graphql/hooks/useCheckout";
import useCheckoutLineItemsModification from "../../graphql/hooks/useCheckoutLineItemsModification";

export default ({ variant }) => {
  const { update, removeAll, add } = useCheckoutLineItemsModification(variant);

  // const { checkout } = useCheckout();

  return (
    <div>
      <button onClick={() => add(3)}>add to cart</button>
      <button onClick={() => update(1)}>update</button>
      <button onClick={() => removeAll()}>removeAll</button>
    </div>
  );
};
