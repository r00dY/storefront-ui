import { useMutation } from "@apollo/react-hooks";
import { createCustomerMutation } from "../mutations";

const useRegisterCustomer = () => {
  const [registerMutation, { loading }] = useMutation(createCustomerMutation);

  const register = async input => {
    const { data } = await registerMutation({ variables: { input } });

    return data;
  };

  return [register, loading];
};

export default useRegisterCustomer;
