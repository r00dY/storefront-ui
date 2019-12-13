const { gqlImageQuery, gqlImagesQuery } = require("../graphql/imagesQuery");

const {
  gqlProductVariantQuery,
  gqlProductVariantsQuery
} = require("../graphql/productVariantsQuery");
const {
  gqlProductQuery,
  gqlProductsQuery
} = require("../graphql/productQuery");
const {
  gqlCollectionQuery,
  gqlCollectionsQuery
} = require("../graphql/collectionQuery");

const gql = require("graphql-tag");

// TODO: automated tests!!! For now, we're checking for parse errors and log visually.

function printTitle(title) {
  console.log(`
    
==========
${title}
==========

    `);
}

function parseQuery(query) {
  return gql`query { ${query} }`;
}

describe("Image queries", function() {
  it("returns correct fields without pagination", () => {
    // const query = gql`query { ${imageQuery()} }`;

    printTitle("image query (no pagination)");
    console.log(gqlImageQuery());

    printTitle("images query (no pagination)");
    console.log(gqlImagesQuery());

    // const imagesSelection = query.definitions[0].selectionSet.selections[0];
    // expect(imagesSelection.name.value).toBe("images");
  });
});

describe("ProductVariant", function() {
  it("returns correct single query", () => {
    printTitle("productVariantQuery");
    const query = gqlProductVariantQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (no pagination)", () => {
    printTitle("productVariantsQuery (no pagination)");
    const query = gqlProductVariantsQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (paginated)", () => {
    printTitle("productVariantsQuery (10 per page, page 2)");
    const query = gqlProductVariantsQuery({
      _pagination: { page: 2, itemsPerPage: 10 }
    });
    const parsedQuery = parseQuery(query);
    console.log(query);
  });
});

describe("Product", function() {
  it("returns correct single query (no extra fields)", () => {
    printTitle("productQuery (no nested variants)");
    const query = gqlProductQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct single query (with nested variants)", () => {
    printTitle("productQuery (nested variants)");
    const query = gqlProductQuery({ _fields: { variants: {} } });
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (no nested variants)", () => {
    printTitle("productsQuery (no nested variants)");
    const query = gqlProductsQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (nested paginated variants + paginated products)", () => {
    printTitle(
      "productsQuery (nested pagianted variants + paginated products)"
    );
    const query = gqlProductsQuery({
      _pagination: { itemsPerPage: 10, page: 2 },
      _fields: { variants: { _pagination: { itemsPerPage: 5, page: 3 } } }
    });
    const parsedQuery = parseQuery(query);
    console.log(query);
  });
});

describe("Collection", function() {
  it("returns correct single query (no extra fields)", () => {
    printTitle("collectionQuery (no nested variants)");
    const query = gqlCollectionQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct single query (with nested products)", () => {
    printTitle("collectionQuery (nested variants)");
    const query = gqlCollectionQuery({ _fields: { products: {} } });
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (no nested products)", () => {
    printTitle("collectionsQuery (no nested products)");
    const query = gqlCollectionsQuery();
    const parsedQuery = parseQuery(query);
    console.log(query);
  });

  it("returns correct collection query (nested paginated products + paginated collections)", () => {
    printTitle(
      "collectionsQuery (nested pagianted products + paginated collections)"
    );
    const query = gqlCollectionsQuery({
      _pagination: { itemsPerPage: 10, page: 2 },
      _fields: { products: { _pagination: { itemsPerPage: 5, page: 3 } } }
    });
    const parsedQuery = parseQuery(query);
    console.log(query);
  });
});
