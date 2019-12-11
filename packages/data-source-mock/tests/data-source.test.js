import "./init-test";
import runTests from "./tests";

import { getCollectionByHandle } from "../collectionByHandle";
import { getCollections } from "../collections";
import { getProducts } from "../products";
import { getProductByHandle } from "../productByHandle";

const dataSource = {
  getCollectionByHandle,
  getCollections,
  getProductByHandle,
  getProducts
};

const config = {
  existingCollectionHandle: "candy",
  existingProductHandle: "transparent-bottle1"
};

runTests(dataSource, config);
