import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import IconFacebook from "../svg/facebook_logo.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TabBar } from "../theme/TabBar";
import { FormControl } from "../theme/FormControl";
import { StatefulInput } from "../theme/Input";
import { Button } from "../theme/Button";
import { Divider } from "../theme/Divider";

const Profile = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  const Panel = props => (
    <div
      css={css`
        ${theme.fonts.body1.css}
        margin-top: ${theme.spacings.s80}px;
      `}
    >
      {props.children}
    </div>
  );

  const tabs = [
    {
      label: "Log in",
      panel: (
        <Panel>
          <FormControl label="Email address">
            <StatefulInput />
          </FormControl>

          <FormControl label="Password">
            <StatefulInput />
          </FormControl>
          <Button
            fitContainer
            css={css`
              margin-top: ${theme.spacings.s80}px;
            `}
          >
            Log In
          </Button>
          <Divider label={"OR"} />
          <Button
            startEnhancer={() => (
              <IconFacebook
                css={css`
                  fill: currentColor;
                `}
              />
            )}
            fitContainer
            kind={"secondary"}
          >
            Log in with Facebook
          </Button>
        </Panel>
      )
    },
    {
      label: "Sign up",
      panel: (
        <Panel>
          <Button
            startEnhancer={() => (
              <IconFacebook
                css={css`
                  fill: currentColor;
                `}
              />
            )}
            fitContainer
            kind={"secondary"}
          >
            Register with Facebook
          </Button>
          <Divider label={"OR"} />

          <FormControl label="Email address">
            <StatefulInput />
          </FormControl>
          <FormControl label="Password">
            <StatefulInput />
          </FormControl>
          <FormControl label="Full Name">
            <StatefulInput />
          </FormControl>

          <div
            css={css`${theme.fonts.caption.css} margin-top: ${
              theme.spacings.s80
            }px; color: ${theme.colors.mono500.css};`}
          >
            By creating an account, you agree to Our{" "}
            <a href="">Privacy Policy and Terms of Use</a>.
          </div>

          <Button
            fitContainer
            css={css`
              margin-top: ${theme.spacings.s80}px;
            `}
          >
            Create account
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
            margin-top: ${theme.spacings.s80}px;
          `}
        >
          Profile
        </div>

        <Grid>
          <GridItem params={{ xs: 24, sm: [8, 8] }}>
            <div
              css={css`
                margin-top: ${theme.spacings.s80}px;
              `}
            >
              <TabBar
                data={tabs}
                active={tab}
                onChange={setTab}
                showPanels={true}
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

Profile.tabbar = 4;

export default Profile;
