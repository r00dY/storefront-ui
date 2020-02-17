import React from "react";

import MenuDesktop from "../demo/components/MenuDesktop";
import LoremIpsum from "../docs-utils/LoremIpsum";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MenuContent = props => (
  <div
    css={css`
      width: 100%;
      height: 200px;
      padding: 40px 0;
      background-color: lightgrey;
    `}
  >
    <Container>{props.children}</Container>
  </div>
);

export default () => (
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

    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
    <br />
    <LoremIpsum />
  </div>
);
