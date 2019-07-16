import React, { useState } from "react";
import { GridDebugger } from "storefront-ui/Grid";
import MenuDesktop from "../../theme/MenuDesktop";
import Container from "storefront-ui/Container";
import Device from "storefront-ui/Device";
import MainTabBar from "../../theme/MainTabBar";

import Link from "next/link";

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

const tabs = [
  {
    label: "home"
  },
  {
    label: "menu"
  },
  {
    label: "favs"
  },
  {
    label: "user"
  }
];

const Page = props => {
  const [tab, setTab] = useState(props.active || 0);

  return (
    <div>
      <Device mobile>
        <div
          css={css`
            ${tab === 0 ? "" : "display: none;"}
          `}
        >
          First tab
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </div>

        <div
          css={css`
            ${tab === 1 ? "" : "display: none;"}
          `}
        >
          Second tab
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        <div
          css={css`
            ${tab === 2 ? "" : "display: none;"}
          `}
        >
          Third tab
        </div>

        <div
          css={css`
            ${tab === 3 ? "" : "display: none;"}
          `}
        >
          Fourth tab
        </div>

        <div
          css={css`
            position: fixed;
            bottom: 0;
            width: 100%;
          `}
        >
          <MainTabBar
            data={tabs}
            active={tab}
            onChange={setTab}
            scrollable={false}
            align={"fit"}
          />
        </div>
      </Device>

      <Device desktop>
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
              label: "Empty"
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
      </Device>

      <GridDebugger />
    </div>
  );
};

export default Page;
