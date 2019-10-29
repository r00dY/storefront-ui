import { createCheckoutMutation } from "../graphql/mutations";

export default async function createEmptyCheckout(client) {
  return await client.mutate({
    mutation: createCheckoutMutation,
    variables: { input: {} }
  });
}
