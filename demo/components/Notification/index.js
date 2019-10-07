import { Button } from "../Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "@commerce-ui/core/Theme";

const Notification = props => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        padding: 24px;
        background: white;
        color: black;
        box-shadow: ${theme.lighting.shadow500};
      `}
    >
      {props.children}
    </div>
  );
};

export default Notification;
