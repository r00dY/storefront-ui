import { Select$ } from "storefront-ui/Select";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Popover } from "../Popover";
import { Modal } from "../Modal";
import { useTheme } from "storefront-ui/Theme";

export const Select = props => {
  const theme = useTheme();

  return (
    <Select$
      {...props}
      overrides={{
        Item: ({ option, selected }) => (
          <div
            css={css`
              display: flex;
              align-items: center;
              padding: 0 ${theme.spacings.s40}px;
              &:hover {
                background: ${theme.colors.mono200.css};
              }
              height: 40px;
              color: ${selected
                ? theme.colors.primary.css
                : theme.colors.mono500.css};
              ${theme.fonts.body2.css}
            `}
          >
            {option}
          </div>
        ),
        Separator: () => (
          <div
            css={css`
              width: 100%;
              height: 1px;
              background: lightgrey;
            `}
          />
        ),
        Root: {
          style: `
                  width: auto;
                `
        },
        Inner: ({ value }) => (
          <div
            css={css`
              color: ${value
                ? theme.colors.mono900.css
                : theme.colors.mono500.css};
              ${theme.fonts.body2.css}
            `}
          >
            {value ? value : "Pick option..."}
          </div>
        ),
        Popover: ({ popoverProps }) => (
          <Popover
            {...popoverProps}
            placement={Popover.PLACEMENT.bottomRight}
          />
        ),
        Modal: ({ modalProps }) => <Modal {...modalProps} header={"Sort by"} />
      }}
    />
  );
};
