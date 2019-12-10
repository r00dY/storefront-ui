import "./init-test";

import { getCollections } from "../collections";

// TODO: pagination

test("[getCollections] works good without params", async () => {
  let collectionsDataWithQuery = await getCollections();
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(data[0].products).toBeUndefined();
});

test("[getCollections] works good with products", async () => {
  let collectionsDataWithQuery = await getCollections({
    _fields: { products: {} }
  });
  let data = collectionsDataWithQuery.data;

  expect(collectionsDataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(Array.isArray(data[0].products)).toBe(true);

  // TODO: run basic tests for inline products
});
