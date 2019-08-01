import React from "react";

import { useTheme } from "storefront-ui/Theme";
import Image from "storefront-ui/Image";
import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CategoryCard = props => {
  const { image, text, href } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Link href={href}>
        <a>
          <Image image={image} />
          <div
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              padding: ${theme.spacings.s80}px;
              color: ${theme.colors.mono800.css};
              ${theme.fonts.body1.css}
            `}
          >
            {text}
          </div>
        </a>
      </Link>
    </div>
  );
};

CategoryCard.defaultProps = {
  href: "#"
};

export default CategoryCard;
