import "./init-test";

import { getCollectionByHandle } from "../collectionByHandle";

test("[getCollectionByHandle] without params", async () => {
  let dataWithQuery = await getCollectionByHandle({
    handle: "candy"
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(data.handle).toBe("candy");
});

test("[getCollectionByHandle] with unexisting handle", async () => {
  let dataWithQuery = await getCollectionByHandle({
    handle: "this_handle_doesnt_exist"
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(data).toBeNull();
});
