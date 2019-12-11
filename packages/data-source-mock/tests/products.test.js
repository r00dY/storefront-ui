import "./init-test";

import { getProducts } from "../products";

// TODO: pagination

test("[getProducts] works good without params", async () => {
  let dataWithQuery = await getProducts();
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(data[0].variants).toBeUndefined();
});

test("[getProducts] works good with variants", async () => {
  let dataWithQuery = await getProducts({
    _fields: { variants: {} }
  });
  let data = dataWithQuery.data;

  expect(dataWithQuery.error).toBe(undefined);

  expect(Array.isArray(data) && data.length > 5).toBe(true);

  // TODO: run basic tests for single collection objects
  expect(typeof data[0].handle === "string").toBe(true);
  expect(typeof data[0].title === "string").toBe(true);
  expect(Array.isArray(data[0].variants)).toBe(true);

  // TODO: run basic tests for inline products
});
