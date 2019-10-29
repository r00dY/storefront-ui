import { customerAccessTokenCreateMutation } from "../graphql/mutations";

export default async function createCustomerAccessToken(client, input) {
  const { data } = await client.mutate({
    mutation: customerAccessTokenCreateMutation,
    variables: { input }
  });

  return data;
}
