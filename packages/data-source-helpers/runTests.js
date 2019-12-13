const gql = require("graphql-tag");
const { collectionStandardFields } = require("./basicFragments");

function runTests(dataSource, config) {
  const { getData } = dataSource;

  const { existingCollectionHandle, existingProductHandle } = config;

  describe("getCollectionsByHandle", () => {
    test("without params", async () => {
      let dataWithQuery = await getData(gql`
        query {
          collectionByHandle(handle: "${existingCollectionHandle}") {
            id
            handle
          }
        }
      `);

      let data = dataWithQuery.data["collectionByHandle"];

      expect(dataWithQuery.error).toBe(undefined);
      expect(data.handle).toBe(existingCollectionHandle);
    });

    test("with unexisting handle", async () => {
      let dataWithQuery = await getData(gql`
        query {
          collectionByHandle(handle: "this_handle_does_not_exist") {
            id
            handle
          }
        }
      `);

      let data = dataWithQuery.data["collectionByHandle"];

      expect(dataWithQuery.error).toBe(undefined);

      expect(data).toBeNull();
    });
  });

  describe("collections", () => {
    test("works good with basic fields", async () => {
      let dataWithQuery = await getData(gql`
        query {
          collections(first: 250) {
            edges {
              node {
                id
                handle
                title
              }
            }
          }
        }
      `);

      let data = dataWithQuery.data["collections"].edges.map(x => x.node);

      expect(dataWithQuery.error).toBe(undefined);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(3);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(data[0].products).toBeUndefined();
    });

    test("works good with products", async () => {
      let dataWithQuery = await getData(gql`
        query {
          collections(first: 250) {
            edges {
              node {
                id
                handle
                title
                products(first: 250) {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `);

      let data = dataWithQuery.data["collections"].edges.map(x => x.node);

      expect(dataWithQuery.error).toBe(undefined);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(3);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(Array.isArray(data[0].products.edges)).toBe(true);

      // TODO: run basic tests for inline products
    });
  });

  describe("getProductByHandle", () => {
    test("without params", async () => {
      let dataWithQuery = await getData(gql`
        query {
          productByHandle(handle: "${existingProductHandle}") {
            id
            title
            handle
          }
        }
      `);

      let data = dataWithQuery.data["productByHandle"];

      expect(dataWithQuery.error).toBeUndefined();

      expect(data.handle).toBe(existingProductHandle);
    });

    test("with unexisting handle", async () => {
      let dataWithQuery = await getData(gql`
        query {
          productByHandle(handle: "this_handle_doesnt_exist") {
            id
            title
            handle
          }
        }
      `);

      let data = dataWithQuery.data["productByHandle"];
      expect(dataWithQuery.error).toBeUndefined();

      expect(data).toBeNull();
    });
  });

  describe("products", () => {
    test("works good with basic fields", async () => {
      let dataWithQuery = await getData(gql`
        query {
          products(first: 250) {
            edges {
              node {
                id
                handle
                title
              }
            }
          }
        }
      `);

      expect(dataWithQuery.error).toBe(undefined);

      let data = dataWithQuery.data["products"].edges.map(x => x.node);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(1);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(data[0].variants).toBeUndefined();
    });

    test("works good with variants", async () => {
      let dataWithQuery = await getData(gql`
        query {
          products(first: 250) {
            edges {
              node {
                id
                handle
                title
                variants(first: 250) {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `);

      expect(dataWithQuery.error).toBe(undefined);

      let data = dataWithQuery.data["products"].edges.map(x => x.node);

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(1);

      // TODO: run basic tests for single collection objects
      expect(typeof data[0].handle === "string").toBe(true);
      expect(typeof data[0].title === "string").toBe(true);
      expect(Array.isArray(data[0].variants.edges)).toBe(true);

      // TODO: run basic tests for inline products
    });
  });
}

module.exports = runTests;
