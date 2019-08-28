import { ItemListAccordion$ } from "storefront-ui/ItemListAccordion";
import { ListItem } from "../ListItem";
import { Button } from "../Button";
import { R, L } from "storefront-ui/Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

import IconPlus from "../../svg/plus.svg";
import IconMinus from "../../svg/minus.svg";

const ItemListAccordion = props => {
  const theme = useTheme();
  return (
    <ItemListAccordion$
      {...props}
      overrides={{
        ToggleButton: ({ open, onClick }) => (
          <Button
            kind={"minimal"}
            size="compact"
            onClick={onClick}
            css={css`
              transition: all 150ms;
              color: ${theme.colors.mono500.css};
              ${props.hasPaddingOnMobile
                ? R.to("sm").css(`${L.margin.divide(2).css("padding-left")}`)
                : ""}
              &:hover {
                color: ${theme.colors.mono700.css};
              }
              &:focus {
                color: ${theme.colors.mono500.css};
              }
              svg {
                fill: currentColor;
                width: 20px;
                height: 20px;
                margin-right: 4px;
              }
            `}
          >
            {open && (
              <>
                <IconMinus /> less
              </>
            )}
            {!open && (
              <>
                <IconPlus /> show more
              </>
            )}
          </Button>
        ),
        ListItem: props => <ListItem {...props} hasPaddingOnMobile />
      }}
    />
  );
};

export { ItemListAccordion };
