import createCustomerAccessToken from "./createCustomerAccessToken";
import associateCustomerWithCheckout from "./associateCustomerWithCheckout";

export default async function loginCustomer(client, input, checkoutId) {
  const data = await createCustomerAccessToken(client, input);

  if (data.customerAccessTokenCreate.customerAccessToken) {
    const customerAccessToken =
      data.customerAccessTokenCreate.customerAccessToken.accessToken;
    associateCustomerWithCheckout(client, customerAccessToken, checkoutId);
  }

  return data;
}
