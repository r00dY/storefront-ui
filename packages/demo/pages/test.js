import React, { useEffect, useState } from "react";

import {
  getCollectionByHandle,
  useCollectionByHandle
} from "../graphql/hooks/useCollectionByHandle";
import Link from "next/link";
import { getProducts, useProducts } from "../graphql/hooks/useProducts";
import {
  getCollections,
  useCollections
} from "../graphql/hooks/useCollections";
import {
  getProductByHandle,
  useProductByHandle
} from "../graphql/hooks/useProductByHandle";
import useCheckoutLineItemsModification from "../graphql/hooks/useCheckoutLineItemsModification";
import useProductVariant from "../graphql/hooks/useProductVariant";
import { getCheckout, useCheckout } from "../graphql/hooks/useCheckout";

const TestPage = ({
  collectionQueryWithData,
  productsQueryWithData,
  collectionsQueryWithData,
  productQueryWithData,
  checkoutQueryWithData
}) => {
  const { data, loading, error } = useCollectionByHandle(
    collectionQueryWithData
  );

  const { data: productsData } = useProducts(productsQueryWithData);
  const { data: collectionData } = useCollections(collectionsQueryWithData);
  const { data: productHandleData } = useProductByHandle(productQueryWithData);
  const { data: checkout } = useCheckout(checkoutQueryWithData);
  const variant = useProductVariant(productHandleData, {
    size: "XS",
    color: "Pine"
  });

  const { add, update, removeAll, remove } = useCheckoutLineItemsModification(
    variant
  );

  console.log("checkout===============", checkout);
  // console.log('productsData ', productsData );
  // console.log("render", data ? data.title : undefined);

  return (
    <div>
      <div>
        <h1>Test</h1>
        <p>
          <code>skipInBrowser=true</code>
        </p>
        <button onClick={() => add(2)}>add to cart</button> <br />
        <button onClick={() => update(13)}>
          update items amount in cart
        </button>{" "}
        <br />
        <button onClick={() => remove(2)}>delete items in cart</button> <br />
        <button onClick={() => removeAll()}>
          delete all items in cart
        </button>{" "}
        <br />
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
      _fields: {
        products: {
          _pagination: { first: 100 },
          _fields: { variants: { _pagination: {} } }
        }
      }
    },
    { skipInBrowser: true }
  );

  let productsQueryWithData = await getProducts(
    {
      _pagination: { first: 100 }
    },
    { skipInBrowser: true }
  );

  let collectionsQueryWithData = await getCollections({
    _pagination: { first: 100 }
  });

  let productQueryWithData = await getProductByHandle({
    handle: "clubknit-polo",
    _fields: {
      product: {
        _pagination: {},
        _fields: { variants: { _pagination: {} } }
      }
    }
  });

  let checkoutQueryWithData = await getCheckout({
    id:
      "Z2lkOi8vc2hvcGlmeS9DaGVja291dC8yNDdmYThlMzZhYzlhNDA0Y2YwNWMyNmU0NDdkNGQ4ND9rZXk9ZjFjMzAyZDIyODhmMDMyMWQwMTAwZjQ0NDBhODk2N2U=",
    _fields: {
      lineItems: {
        _pagination: { first: 100 }
      }
    }
  });

  return {
    productQueryWithData,
    collectionQueryWithData,
    productsQueryWithData,
    collectionsQueryWithData,
    checkoutQueryWithData
  };
};

export default TestPage;
