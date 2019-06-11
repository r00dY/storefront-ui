import { StatefulInput$, Input$ } from "storefront-ui/Input";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const overrides = props => {
  let After;
  if (props.unit) {
    After = () => (
      <div
        css={css`
          align-self: center;
          color: grey;
          margin-right: 6px;
        `}
      >
        {props.unit}
      </div>
    );
  }

  return {
    After
  };
};

export const StatefulInput = props => (
  <StatefulInput$ overrides={overrides(props)} {...props} />
);
export const Input = props => (
  <Input$ overrides={overrides(props)} {...props} />
);
