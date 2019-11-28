import React, { useEffect, useState } from "react";

import {
  getCollectionByHandle,
  useCollectionByHandle
} from "../data-sources/mock/collectionByHandle";
import Link from "next/link";
import useAddToCartAndShowNotificatiion from "../graphql/hooks/useAddToCartAndShowNotification";

const TestPage = ({ collectionQueryWithData }) => {
  const { data, loading, error } = useCollectionByHandle(
    collectionQueryWithData
  );

  console.log("render", data ? data.title : undefined);

  return (
    <div>
      <div>
        <h1>Test</h1>
        <p>
          <code>skipInBrowser=true</code>
        </p>

        {loading ? (
          "Loading..."
        ) : (
          <span>Test page collection title: {data.title}</span>
        )}
      </div>
      <Link href={"/test2"}>
        <a>Link to /test2</a>
      </Link>{" "}
      (<code>skipInBrowser=false</code>)
    </div>
  );
};

TestPage.getInitialProps = async ({ req }) => {
  let collectionQueryWithData = await getCollectionByHandle(
    {
      handle: "frontpage",
      productsAmount: 100,
      _fields: {
        products: {
          _pagination: {},
          _fields: { variants: { _pagination: {} } }
        }
      }
    },
    { skipInBrowser: true }
  );
  return { collectionQueryWithData };
};

export default TestPage;
