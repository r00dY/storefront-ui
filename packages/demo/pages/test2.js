import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  getCollectionByHandle,
  useCollectionByHandle
} from "../data-sources/mock/collectionByHandle";

const TestPage = ({ collectionQueryWithData }) => {
  const { data, loading, error } = useCollectionByHandle(
    collectionQueryWithData
  );

  console.log("render", data ? data.title : undefined);

  return (
    <div>
      <h1>Test 2</h1>
      <p>
        <code>skipInBrowser=false</code>
      </p>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <span>Test page collection title: {data.title}</span>
        )}
      </div>
      <Link href={"/test"}>
        <a>Link to /test</a>
      </Link>{" "}
      (<code>skipInBrowser=true</code>)
    </div>
  );
};

TestPage.getInitialProps = async ({ req }) => {
  let collectionQueryWithData = await getCollectionByHandle(
    { handle: "bars", _fields: { products: { _fields: { variants: {} } } } },
    { skipInBrowser: false }
  );
  return { collectionQueryWithData };
};

export default TestPage;
