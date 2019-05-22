import React from "react";
import { Button } from "storefront-ui/Button";
import { ThemeProvider } from "../../Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconWrench from "../../../../data/svg/wrench.svg";
import IconAccount from "../../../../data/svg/account.svg";

export default () => (
  <div>
    <p>Standard button</p>

    <Button>Primary button</Button>

    <br />
    <br />
    <Button appearance={"secondary"}>Secondary button</Button>

    <p>States</p>
    <Button>No state</Button>
    <br />
    <br />
    <Button isLoading>Loading</Button>
    <br />
    <br />
    <Button disabled>Disabled</Button>
    <br />
    <br />

    <p>Enhancers</p>
    <p>
      <Button startEnhancer={() => <IconAccount />}>Account</Button>
    </p>
    <p>
      <Button endEnhancer={() => <IconWrench />}>Settings</Button>
    </p>

    <p>Overrides</p>

    <ThemeProvider
      theme={{
        Button: {
          primary: {
            overrides: {
              BaseButton: {
                style: `
                    background-color: black;
                            border-radius: 0;
                            padding: 16px 28px;
                  `
              }
            }
          },
          secondary: {
            overrides: {
              BaseButton: {
                style: `
                    background-color: grey;
                    color: white;
                    border-radius: 0;
                    padding: 16px 28px;
                  `
              }
            }
          }
        }
      }}
    >
      <Button>Primary button</Button>
      <br />
      <br />
      <Button appearance={"primary"}>Primary button</Button>
      <br />
      <br />
      <Button appearance={"secondary"}>Primary button</Button>
    </ThemeProvider>
  </div>
);
