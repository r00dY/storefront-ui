import { getCheckoutQuery } from "../graphql/queries";

export default async function fetchCheckout(client, checkoutId) {
  return await client.query({
    query: getCheckoutQuery,
    variables: { id: checkoutId }
  });
}
