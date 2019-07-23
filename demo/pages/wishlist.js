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
        {!noRoot && (
          <>
            <div
              css={css`
                ${theme.fonts.h4.css}
                margin-top: 20px;
              `}
            >
              Your Wishlist
            </div>
            <div
              css={css`
              ${theme.fonts.body2.css}
              color: ${theme.colors.mono600.css};
            `}
            >
              {data.products.length} items
            </div>
          </>
        )}
        <Grid
          gutterVertical={40}
          gutter={40}
          css={css`
            margin-top: 20px;
            padding-bottom: 40px;
          `}
        >
          {data.products.map((product, index) => (
            <GridItem key={index} params={{ xs: 24, sm: 12, lg: 8 }}>
              <ProductRowTheme1
                product={product}
                price={product.price}
                layout={"compact"}
                mode={"wishlist"}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Wishlist.tabbar = 2;

export default Wishlist;
