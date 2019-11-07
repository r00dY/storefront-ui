import React from "react";

import { useTheme } from "@commerce-ui/core/Theme";
import { Image } from "../Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import routerPush from "../../helpers/routerPush";

const CollectionCard = props => {
  const { collection } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        position: relative;
        cursor: pointer;
        border-radius: 12px;
        overflow: hidden;
      `}
      onClick={() => routerPush("/collection")}
    >
      <Image image={collection.image} />
      <div
        css={css`
          position: absolute;
          width: 60%;
          height: 100%;
          top: 0;
          left: 0;
          padding: ${theme.spacings.s80}px;
          color: ${theme.colors.mono800.css};
          ${theme.fonts.body1.css}
          display: flex;
          align-items: center;
        `}
      >
        <strong>{collection.title}</strong>
      </div>
    </div>
  );
};

CollectionCard.defaultProps = {};

export default CollectionCard;
