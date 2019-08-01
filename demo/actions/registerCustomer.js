import { createCustomerMutation } from "../graphql/mutations";

export default async function registerCustomer(client, input) {
  const { data } = await client.mutate({
    mutation: createCustomerMutation,
    variables: { input }
  });

  return data;
}
