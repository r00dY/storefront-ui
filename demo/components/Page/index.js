import React from "react";
import { GridDebugger } from "storefront-ui/Grid";
import MenuDesktop from "../MenuDesktop";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MenuContent = props => (
  <div
    css={css`
      width: 100%;
      height: 400px;
      padding: 40px 0;
      background-color: lightgrey;
    `}
  >
    <Container>{props.children}</Container>
  </div>
);

const Page = props => (
  <div>
    <MenuDesktop
      data={[
        {
          label: "First",
          content: <MenuContent>Cześć</MenuContent>
        },
        {
          label: "Second",
          content: <MenuContent>Cześć albo nara</MenuContent>
        },
        {
          label: "Third",
          content: <MenuContent>Nara</MenuContent>
        }
      ]}
    />
    <div
      css={css`
        margin-top: 100px;
      `}
    >
      {props.children}
    </div>

    <GridDebugger />
  </div>
);

export default Page;
