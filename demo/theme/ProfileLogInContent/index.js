import React, { useState } from "react";

import { TabBar } from "../TabBar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FormControl } from "../FormControl";
import { StatefulInput } from "../Input";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { useTheme } from "storefront-ui/Theme";

import { Grid, GridItem } from "storefront-ui/Grid";

import IconFacebook from "./facebook_logo.svg";

const ProfileLogInContent = props => {
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
          <Grid gutterVertical={8}>
            <GridItem>
              <FormControl label="Email address">
                <StatefulInput />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl label="Password">
                <StatefulInput />
              </FormControl>
            </GridItem>
          </Grid>

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
            kind={"facebook"}
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
            kind={"facebook"}
          >
            Register with Facebook
          </Button>
          <Divider label={"OR"} />

          <Grid gutterVertical={8}>
            <GridItem>
              <FormControl label="Email address">
                <StatefulInput />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl label="Password">
                <StatefulInput />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl label="Full Name">
                <StatefulInput />
              </FormControl>
            </GridItem>
          </Grid>

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
    <TabBar
      data={tabs}
      active={tab}
      onChange={setTab}
      showPanels={true}
      align={"fit"}
      scrollable={false}
    />
  );
};

export default ProfileLogInContent;
