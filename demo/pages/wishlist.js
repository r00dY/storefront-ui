import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import { useRouter } from "next/router";
import NavBarMobile from "../theme/NavBarMobile";
import data from "../data";
import PageTitle from "../theme/PageTitle";
import { ProductCardTheme1 } from "../theme/ProductCard";
import { Button } from "../theme/Button";

const Wishlist = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;
  const theme = useTheme();

  return (
    <div>
      {noRoot && <NavBarMobile title={"Wishlist"} />}
      <Container>
        {!noRoot && (
          <PageTitle
            title={"Your Wishlist"}
            subtitle={`${data.products.length} items`}
          />
        )}
        <Grid>
          <GridItem params={{ xs: 24, lg: [20, 2], xl: [16, 4] }}>
            <Grid gutterVertical={50} colNumber={{ xs: 24, lg: 20, xl: 16 }}>
              {data.products.map((product, index) => (
                <GridItem
                  key={index}
                  params={{ xs: 12, sm: 8, md: 6, lg: 5, xl: 4 }}
                  css={css`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <ProductCardTheme1 product={product} />
                  <div
                    css={css`
                      flex-grow: 1;
                      display: flex;
                      align-items: flex-end;
                      margin-top: ${theme.spacings.s40}px;
                    `}
                  >
                    <Button fitContainer>Add to cart</Button>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

Wishlist.tabbar = 2;

export default Wishlist;
