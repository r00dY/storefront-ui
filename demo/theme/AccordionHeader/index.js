import { AccordionHeader$ } from "storefront-ui/AccordionHeader";

import IconExpandMore from "./baseline-expand_more-24px.svg";
import IconExpandLess from "./baseline-expand_less-24px.svg";

import { R, L } from "storefront-ui/Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AccordionHeader = props => (
  <AccordionHeader$
    {...props}
    overrides={{
      Title: {
        style: ({ $theme }) => `${$theme.fonts.body1.css} flex-grow: 1;`
      },
      Root: {
        style: ({ $theme }) => `
        border-bottom: none;
         height: 50px;
         padding: 0;
         ${
           props.hasPaddingOnMobile
             ? `${R.to("sm").css(
                 `${L.margin.css("padding-right")}${L.margin.css(
                   "padding-left"
                 )}`
               )}`
             : ""
         }
         &:hover { color: ${$theme.colors.mono600.css};
         transition: all 150ms;
         }`
      },
      Toggle: ({ $open }) =>
        $open ? (
          <IconExpandLess
            css={css`
              opacity: 0.3;
            `}
          />
        ) : (
          <IconExpandMore
            css={css`
              opacity: 0.3;
            `}
          />
        )
    }}
  />
);

export { AccordionHeader };
