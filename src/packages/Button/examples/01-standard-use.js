import React from "react";
import { Button, KIND } from "storefront-ui/Button";

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
    <Button kind={KIND.secondary}>Secondary button</Button>
    <br />
    <br />
    <Button kind={KIND.tertiary}>Tertiary button</Button>
    <br />
    <br />
    <Button kind={KIND.minimal}>Minimal button</Button>
    <br />
    <br />

    <p>States</p>
    <Button>No state</Button>
    <br />
    <br />
    <Button isLoading>Loading</Button>
    <br />
    <br />
    <Button isSelected>Selected</Button>
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
  </div>
);
