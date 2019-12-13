function runTests(dataSource, config) {
  const {
    getCollectionByHandle,
    getCollections,
    getProductByHandle,
    getProducts
  } = dataSource;

  const { existingCollectionHandle, existingProductHandle } = config;

  describe("getCollectionsByHandle", () => {
    test("without params", async () => {
      let dataWithQuery = await getCollectionByHandle({
        handle: existingCollectionHandle
      });
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBe(undefined);

      expect(data.handle).toBe(existingCollectionHandle);
    });

    test("with unexisting handle", async () => {
      let dataWithQuery = await getCollectionByHandle({
        handle: "this_handle_doesnt_exist"
      });
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBe(undefined);

      expect(data).toBeNull();
    });
  });

  describe("collections", () => {
    test("works good without params", async () => {
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

    test("works good with products", async () => {
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
  });

  describe("getProductByHandle", () => {
    test("without params", async () => {
      let dataWithQuery = await getProductByHandle({
        handle: existingProductHandle
      });
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBeUndefined();

      expect(data.handle).toBe(existingProductHandle);
    });

    test("with unexisting handle", async () => {
      let dataWithQuery = await getProductByHandle({
        handle: "this_handle_doesnt_exist"
      });
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBeUndefined();

      expect(data).toBeNull();
    });
  });

  describe("products", () => {
    test("works good without params", async () => {
      let dataWithQuery = await getProducts();
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBe(undefined);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(5);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(data[0].variants).toBeUndefined();
    });

    test("works good with variants", async () => {
      let dataWithQuery = await getProducts({
        _fields: { variants: {} }
      });
      let data = dataWithQuery.data;

      expect(dataWithQuery.error).toBe(undefined);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(5);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(Array.isArray(data[0].variants)).toBe(true);

      // TODO: run basic tests for inline products
    });
  });
}

module.exports = runTests;
