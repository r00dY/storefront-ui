import "./init-test";

import { getCollections } from "../collections";

// TODO: pagination

test("[getCollections] works good without params", async () => {
  let dataWithQuery = await getCollections();
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(5);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(data[0].products).toBeUndefined();
});

test("[getCollections] works good with products", async () => {
  let dataWithQuery = await getCollections({
    _fields: { products: {} }
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(5);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(Array.isArray(data[0].products)).toBe(true);

  // TODO: run basic tests for inline products
});
