import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useRouter } from "next/router";
import NavBarMobile from "../theme/NavBarMobile";

const Cart = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;

  return (
    <div>
      {noRoot && <NavBarMobile title={"Cart"} />}
      Cart.
    </div>
  );
};

Cart.tabbar = 3;

export default Cart;
