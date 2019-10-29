import { useMutation } from "@apollo/react-hooks";
import {
  checkoutCustomerAssociateMutation,
  customerAccessTokenCreateMutation
} from "../mutations";

const useLoginCustomer = checkoutId => {
  const [loginMutation, { loading }] = useMutation(
    customerAccessTokenCreateMutation
  );
  let checkout;

  // @TODO - zebrać errory z jednej i drugiej mutacji i zwrócić jako ostatni argument
  const login = async input => {
    const { data } = await loginMutation({
      variables: {
        input
      }
    });

    if (data.customerAccessTokenCreate.customerAccessToken) {
      const { data } = await client.mutate({
        mutation: checkoutCustomerAssociateMutation,
        variables: {
          checkoutId: checkoutId,
          customerAccessToken:
            data.customerAccessTokenCreate.customerAccessToken
        }
      });

      checkout = data.checkoutCustomerAssociate.checkout;
    }
  };

  return [login, loading, checkout];
};

export default useLoginCustomer;
