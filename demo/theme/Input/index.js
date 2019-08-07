import { StatefulInput$, Input$ } from "storefront-ui/Input";
import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconSearch from "../../svg/search.svg";

const overrides = (props, theme) => {
  let After;
  let Before;

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
  } else if (props.search) {
    Before = () => (
      <div
        css={css`
          align-self: center;
          margin-left: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.mono500.css};
        `}
      >
        <IconSearch />
      </div>
    );
  }

  return {
    After,
    Before
  };
};

export const StatefulInput = props => {
  const theme = useTheme();

  return <StatefulInput$ overrides={overrides(props, theme)} {...props} />;
};

export const Input = props => {
  const theme = useTheme();

  return <Input$ overrides={overrides(props, theme)} {...props} />;
};
