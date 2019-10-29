import { checkoutLineItemsUpdate } from "../graphql/mutations";

export default async function updateLineItemInCart(
  client,
  checkoutId,
  lineItemId,
  quantity
) {
  const { data } = await client.mutate({
    mutation: checkoutLineItemsUpdate,
    variables: {
      checkoutId,
      lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
    }
  });

  return data;
}
