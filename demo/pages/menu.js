import React, { useState } from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { Accordion } from "../theme/Accordion";
import { StatefulInput } from "../theme/Input";
import Router from "next/dist/client/router";
import { useTheme } from "storefront-ui/Theme";
import { Button } from "../theme/Button";
import { FiltersColumn } from "../theme/Filters";
import { Modal } from "../theme/Modal";

const ItemTmp = styled.div`
  padding: 10px;
`;

const Menu = () => {
  const theme = useTheme();

  console.log(theme);
  // const [open, setOpen] = useState(false);

  return (
    <div>
      <Container>
        <div
          css={css`
            text-align: center;
            margin-top: 28px;
            margin-bottom: 28px;
            ${theme.fonts.h4}
          `}
        >
          SUPER STORE
        </div>

        <div
          css={css`
            text-align: center;
            margin-top: 28px;
            margin-bottom: 28px;
            ${theme.fonts.h4}
          `}
        >
          <StatefulInput
            placeholder={"What you're looking for?"}
            onFocus={() => {
              Router.push("/search");
            }}
          />
        </div>
      </Container>

      {/*<Modal*/}
      {/*config={{*/}
      {/*mode: "right",*/}
      {/*height: "90%"*/}
      {/*}}*/}
      {/*isOpen={open}*/}
      {/*onRequestClose={() => setOpen(false)}*/}
      {/*header={"Category"}*/}
      {/*>*/}
      {/*{[...Array(20)].map((e, i) => <ItemTmp>Subcategory {i}</ItemTmp>)}*/}
      {/*</Modal>*/}

      {/*{[...Array(20)].map((e, i) => <ItemTmp onClick={() => { setOpen(true) }}>Category {i}</ItemTmp>)}*/}

      {[...Array(20)].map((e, i) => (
        <Accordion
          title={`Category ${i}`}
          openAtInit={false}
          animated={false}
          scrollTopAtOpen={true}
        >
          {[...Array(10)].map((e, j) => (
            <ItemTmp>Subcategory {i}</ItemTmp>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

Menu.tabbar = 1;

export default Menu;
