import "./init-test";

import { getProductByHandle } from "../productByHandle";

test("[getProductByHandle] without params", async () => {
  let dataWithQuery = await getProductByHandle({
    handle: "shaped-a-line-cotton-dress30"
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBeUndefined();

  expect(data.handle).toBe("shaped-a-line-cotton-dress30");
});

test("[getProductByHandle] with unexisting handle", async () => {
  let dataWithQuery = await getProductByHandle({
    handle: "this_handle_doesnt_exist"
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBeUndefined();

  expect(data).toBeNull();
});
