import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TabBar } from "../theme/TabBar";
import { FormControl } from "../theme/FormControl";
import { StatefulInput } from "../theme/Input";
import { Button } from "../theme/Button";
const Profile = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  const Panel = props => (
    <div
      css={css`
        ${theme.fonts.body1.css}
        margin-top: 20px;
      `}
    >
      {props.children}
    </div>
  );

  const tabs = [
    {
      label: "Join",
      panel: (
        <Panel>
          <FormControl label="E-mail">
            <StatefulInput />
          </FormControl>

          <FormControl label="Password">
            <StatefulInput />
          </FormControl>
          <FormControl label="Re-type password">
            <StatefulInput />
          </FormControl>
          <Button
            fitContainer
            css={css`
              margin-top: 20px;
            `}
          >
            Join
          </Button>
        </Panel>
      )
    },
    {
      label: "Sign in",
      panel: (
        <Panel>
          <FormControl label="E-mail">
            <StatefulInput />
          </FormControl>

          <FormControl label="Password">
            <StatefulInput />
          </FormControl>
          <Button
            fitContainer
            css={css`
              margin-top: 20px;
            `}
          >
            Sign in
          </Button>
        </Panel>
      )
    }
  ];

  return (
    <div>
      <Container>
        <div
          css={css`
            ${theme.fonts.h4.css}
            margin-top: 20px;
          `}
        >
          Profile
        </div>

        <div
          css={css`
            margin-top: 20px;
            display: flex;
            justify-content: center;
          `}
        >
          <TabBar
            data={tabs}
            active={tab}
            onChange={setTab}
            showPanels={true}
          />
        </div>
      </Container>
    </div>
  );
};

Profile.tabbar = 4;

export default Profile;
