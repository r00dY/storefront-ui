import { addVariantToCartMutation } from "../graphql/mutations";

export default async function addVariantToCart(
  client,
  variantId,
  quantity,
  checkoutId
) {
  return await client.mutate({
    mutation: addVariantToCartMutation,
    variables: {
      checkoutId: checkoutId,
      lineItems: [{ variantId, quantity: parseInt(quantity, 10) }]
    }
  });
}
