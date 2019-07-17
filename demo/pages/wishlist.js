import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import { useRouter } from "next/router";
import NavBarMobile from "../theme/NavBarMobile";
import data from "../data";
import { ProductRowTheme1 } from "../theme/ProductRow";

const Wishlist = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;
  const theme = useTheme();

  return (
    <div>
      {noRoot && <NavBarMobile title={"Wishlist"} />}
      <Container>
        <div
          css={css`
            ${theme.fonts.h4.css}
            margin-top: 20px;
            margin-bottom: 20px;
          `}
        >
          Your Wishlist
        </div>
        <div
          css={css`
            padding-bottom: 40px;
            & > div:not(:first-of-type) {
              margin-top: 10px;
            }
          `}
        >
          {data.products.map((product, index) => (
            <ProductRowTheme1
              product={product}
              price={product.price}
              mode={"compact"}
              editable
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

Wishlist.tabbar = 2;

export default Wishlist;
