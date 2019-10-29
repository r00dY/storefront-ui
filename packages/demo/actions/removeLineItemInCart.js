import { checkoutLineItemsRemove } from "../graphql/mutations";

export default async function removeLineItemInCart(
  client,
  checkoutId,
  lineItemId
) {
  const { data } = await client.mutate({
    mutation: checkoutLineItemsRemove,
    variables: { lineItemIds: [lineItemId], checkoutId }
  });

  return data;
}
