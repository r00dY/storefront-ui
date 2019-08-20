import React from "react";

import { useTheme } from "storefront-ui/Theme";
import Image from "storefront-ui/Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import routerPush from "../../helpers/routerPush";
import ThemeLink from "../ThemeLink";
import Link from "next/link";

const CategoryCardCompact = props => {
  const { image, text, href } = props;
  const theme = useTheme();

  return (
    <Link href={"/category"}>
      <ThemeLink href={"/category"} kind={"secondary"}>
        <div
          css={css`
            position: relative;
            cursor: pointer;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: ${theme.lighting.shadow400};
          `}
          onClick={() => routerPush(href)}
        >
          <Image image={image} />
          <div
            css={css`
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              padding: 12px;

              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

              color: black;
              ${theme.fonts.body1.css}
              font-weight: 700;
            `}
          >
            {text}
          </div>
        </div>
      </ThemeLink>
    </Link>
  );
};

CategoryCardCompact.defaultProps = {
  href: "#"
};

export default CategoryCardCompact;
