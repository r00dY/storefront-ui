import "./init-test";

import { getCollectionByHandle } from "../collectionByHandle";

test("[getCollectionByHandle] without params", async () => {
  let collectionsDataWithQuery = await getCollectionByHandle({
    handle: "candy"
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(data.handle).toBe("candy");
});

test("[getCollectionByHandle] with unexisting handle", async () => {
  let collectionsDataWithQuery = await getCollectionByHandle({
    handle: "this_handle_doesnt_exist"
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(data).toBeNull();
});
