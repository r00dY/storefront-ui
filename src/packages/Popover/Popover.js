import React, { useState } from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Index, { getAppearance } from "../StorefrontUIContext";

const defaultPopupStyles = `
    background-color: white;
    box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const popupSizeDefault = {
  small: {
    width: 200,
    maxHeight: 350
  },
  medium: {
    width: 250,
    maxHeight: 400
  },
  large: {
    width: 300,
    maxHeight: 500
  }
};

popupSizeDefault.default = popupSizeDefault.medium;

function Popover({
  className,
  style,
  open,
  stateless,
  appearance,
  ...appearanceProps
}) {
  const [open2, setOpen2] = useState(false);

  return (
    <Index.Consumer>
      {({ Popup, PopupSize }) => {
        // Get canonical traits
        let { trigger, children, size, spacing, styles } = getAppearance(
          appearance,
          appearanceProps,
          Popup
        );

        size = size || "medium";
        styles =
          styles ||
          `
                background-color: white;
                box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
            `;
        spacing = spacing || 10;

        // Let's apply size
        if (typeof size === "string") {
          const popupSizes = Object.assign({}, popupSizeDefault, PopupSize);
          size = popupSizes[size];
        }

        let triggerProps;
        let isOpen;

        if (stateless) {
          triggerProps = {
            popupOpened: open
          };
          isOpen = open;
        } else {
          triggerProps = {
            popupOpened: open2,
            onClick: e => {
              setOpen2(!open2);

              if (trigger.props.onClick) {
                trigger.props.onClick(e);
              }
            }
          };
          isOpen = open2;
        }
        let triggerCloned = React.cloneElement(trigger, triggerProps);

        let content =
          typeof children === "function"
            ? children(() => setOpen2(false))
            : children;

        return (
          <div className={className} style={style}>
            <div
              css={css`
                position: relative;
              `}
            >
              <div css={css``}>{triggerCloned}</div>

              <div
                css={css`
                  padding: 0;
                  overflow-y: auto;

                  ${styles}

                  position: absolute;

                  ${rs(size.width).css("width")}
                  ${rs(size.maxHeight).css(
                    "max-height"
                  )}
                  height: auto;

                  top: calc(100% + 10px);
                  left: 0;

                  z-index: 1000;

                  transition: all 100ms;
                  opacity: ${isOpen ? 1 : 0};
                  visibility: ${isOpen ? "visible" : "hidden"};
                `}
              >
                {content}
              </div>
            </div>
          </div>
        );
      }}
    </Index.Consumer>
  );
}

Popover.defaultProps = {
  stateless: false
};

export default Popover;
