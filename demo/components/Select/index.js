import { Select$, StatefulSelect$ } from "storefront-ui/Select";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Popover } from "../Popover";
import { Modal } from "../Modal";
import { useTheme } from "storefront-ui/Theme";

const overrides = (props, theme) => ({
  Item: ({ option, selected }) => (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding: 0 ${theme.spacings.s40}px;
        background: white;
        &:hover {
          background: ${theme.colors.mono100.css};
        }
        height: ${props.compact ? "42px" : "60px"};
        color: black;

        ${theme.fonts.body2.css}
      `}
    >
      {selected ? <strong>{option}</strong> : option}
    </div>
  ),
  Separator: () => (
    <div
      css={css`
        width: 100%;
        height: 1px;
        background: ${theme.colors.mono100.css};
      `}
    />
  ),
  Root: {
    style: `
                  width: ${props.fitContainer === true ? "100%" : "auto"};
                  height:  ${props.compact ? "42px" : "60px"};
                  box-sizing: border-box;

                `
  },
  Inner: ({ value }) => (
    <div
      css={css`
        color: ${value ? theme.colors.mono900.css : theme.colors.mono500.css};
        ${theme.fonts.body1.css}
      `}
    >
      {value ? value : props.placeholder || "Pick option..."}
    </div>
  ),
  Popover: ({ popoverProps }) => (
    <Popover
      {...popoverProps}
      placement={props.placement || Popover.PLACEMENT.bottomRight}
    />
  ),
  Modal: ({ modalProps }) => (
    <Modal {...modalProps} header={props.placeholder || "Pick option..."} />
  )
});

export const Select = props => {
  const theme = useTheme();

  return <Select$ {...props} overrides={overrides(props, theme)} />;
};

export const StatefulSelect = props => {
  const theme = useTheme();

  return <StatefulSelect$ {...props} overrides={overrides(props, theme)} />;
};
