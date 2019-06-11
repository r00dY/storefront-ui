import { StatefulInput$, Input$ } from "storefront-ui/Input";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const overrides = props => ({
  // After: () => <div css={css`
  //   align-self: center;
  //   color: grey;
  //   margin-right: 6px;
  //
  // `}>zł</div>
});

export const StatefulInput = props => (
  <StatefulInput$ overrides={overrides(props)} {...props} />
);
export const Input = props => (
  <Input$ overrides={overrides(props)} {...props} />
);
