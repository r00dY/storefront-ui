import runTests from "@commerce-ui/data-source-helpers/runTests";
import { createDataSource } from "../index";

const dataSource = createDataSource({
  uri: "http://localhost:4000"
});

const config = {
  existingCollectionHandle: "candy",
  existingProductHandle: "transparent-bottle1"
};

runTests(dataSource, config);
