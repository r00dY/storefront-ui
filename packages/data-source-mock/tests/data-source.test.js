import runTests from "@commerce-ui/data-source-helpers/runTests";
import { createDataSource } from "../index";
import { gql } from "apollo-boost";

const dataSource = createDataSource({
  uri: "http://localhost:4000"
});

const config = {
  existingCollectionHandle: "candy",
  existingProductHandle: "transparent-bottle1"
};

runTests(dataSource, config);
//
// describe("getData", () => {
//   test("without params", async () => {
//
//     const dataWithQuery = await dataSource.getData(gql`
//       query {
//         collectionByHandle(handle: "candy") {
//           id
//           handle
//         }
//       }
//     `);
//
//     const data = dataWithQuery.data;
//
//     console.log(data);
//
//     // let dataWithQuery = await getCollectionByHandle({
//     //   handle: existingCollectionHandle
//     // });
//     // let data = dataWithQuery.data;
//     //
//     // expect(dataWithQuery.error).toBe(undefined);
//     //
//     // expect(data.handle).toBe(existingCollectionHandle);
//     //
//   });
// });
//
