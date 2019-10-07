import React from "react";
import { Button$ } from "@commerce-ui/core/Button";
// import { ThemeProvider } from "../../Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconWrench from "../../../../data/svg/wrench.svg";
import IconAccount from "../../../../data/svg/account.svg";

export default () => (
  <div>
    <p>Standard button</p>

    <Button$>Primary button</Button$>

    <p>Standard button compact</p>

    <Button$ size={"compact"}>Primary compact </Button$>

    <p>Standard button large</p>

    <Button$ size={"large"}>Primary large </Button$>

    <br />
    <br />
    <Button$ kind={"secondary"}>Secondary button</Button$>

    <p>States</p>
    <Button$>No state</Button$>
    <br />
    <br />
    <Button$ isLoading>Primary button</Button$>
    <br />
    <br />
    <Button$ disabled>Disabled</Button$>
    <br />
    <br />

    <p>Enhancers</p>
    <p>
      <Button$ startEnhancer={() => <IconAccount />}>Account</Button$>
    </p>
    <p>
      <Button$ endEnhancer={() => <IconWrench />}>Settings</Button$>
    </p>

    <p>Overrides</p>

    <Button$
      overrides={{
        BaseButton: {
          style: ({ $kind }) => `
                        background-color: ${
                          $kind === "primary" ? "black" : "grey"
                        };
                        border-radius: 0;
                        padding: 16px 28px;
                      `
        }
      }}
    >
      Primary button
    </Button$>
    <br />
    <br />
    <Button$
      kind="secondary"
      overrides={{
        BaseButton: {
          style: ({ $kind }) => `
                        background-color: ${
                          $kind === "primary" ? "black" : "grey"
                        };
                        border-radius: 0;
                        padding: 16px 28px;
                      `
        }
      }}
    >
      Primary button
    </Button$>
    <br />
    <br />

    <p>fit container</p>
    <Button$ fitContainer={true}>Full width button</Button$>
  </div>
);
