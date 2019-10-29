import { checkoutCustomerAssociateMutation } from "../graphql/mutations";

export default async function associateCustomerWithCheckout(
  client,
  customerAccessToken,
  checkoutId
) {
  const {
    data: {
      checkoutCustomerAssociate: { checkout }
    }
  } = await client.mutate({
    mutation: checkoutCustomerAssociateMutation,
    variables: {
      checkoutId: checkoutId,
      customerAccessToken: customerAccessToken
    }
  });

  return checkout;
}
