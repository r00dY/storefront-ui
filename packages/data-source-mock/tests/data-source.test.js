import runTests from "@commerce-ui/data-source-helpers/runTests";

import MockDataSource from "../index";

const dataSource = new MockDataSource({
  uri: "http://localhost:4000"
});

const testConfig = {
  existingCollectionHandle: "candy",
  existingProductHandle: "transparent-bottle1"
};

runTests(dataSource, testConfig);
