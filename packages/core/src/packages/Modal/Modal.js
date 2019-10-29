import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

import { rm, rs } from "responsive-helpers";
import Ease from "../Ease";
import Color from "../Color";

import { getOverrides } from "../base/helpers/overrides";

import { BodyStyled, RootStyled } from "./styled-components";

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import StorefrontUIContext, { getAppearance } from "../StorefrontUIContext";
import {
  DescriptionStyled,
  TitleStyled
} from "../FormHeader/styled-components";

const globalDefaults = {
  animationTime: 0.3,
  animationEase: Ease.expoOut,
  backgroundColor: new Color("rgba(0, 0, 0, 0.5)")
};

const defaults = {
  center: {
    mode: "center",
    width: {
      0: "90%",
      720: "50%"
    },
    height: "auto"
  },
  left: {
    mode: "left",
    width: {
      0: "90%",
      720: "35%"
    },
    height: "100%"
  },
  right: {
    mode: "right",
    width: {
      0: "90%",
      720: "35%"
    },
    height: "100%"
  },
  top: {
    mode: "top",
    width: "100%",
    height: {
      0: "90%",
      720: "35%"
    }
  },
  bottom: {
    mode: "bottom",
    width: "100%",
    height: {
      0: "90%",
      720: "35%"
    }
  }
};

const centered = (width, height, time, ease, backgroundColor) => ({
  backgroundColor: backgroundColor,
  position: `
        ${rs(width).css("width")}
        ${height === "auto" ? "height: auto;" : rs(height).css("height")}
    `,
  animation: {
    content: {
      before: "opacity: 0;",
      after: "opacity: 1;"
    },
    background: {
      before: "opacity: 0;",
      after: "opacity: 1;"
    },
    time: time,
    ease: ease
  }
});

const slide = (
  width,
  height,
  time,
  ease,
  backgroundColor,
  axis,
  fromStart
) => ({
  backgroundColor: backgroundColor,
  position: `
        position: absolute;
        top: ${(axis === "Y" && fromStart) || axis === "X" ? 0 : "auto"};
        bottom: ${axis === "Y" && !fromStart ? 0 : "auto"};
        left: ${(axis === "X" && fromStart) || axis === "Y" ? 0 : "auto"};
        right: ${axis === "X" && !fromStart ? 0 : "auto"};

        ${width === "auto" ? "auto" : rs(width).css("width")}
        ${height === "auto" ? "auto" : rs(height).css("height")}
    `,
  animation: {
    content: {
      before: `transform: translate${axis}(${fromStart ? "-" : ""}100%);`,
      after: "transform: none;"
    },
    background: {
      before: "opacity: 0;",
      after: "opacity: 1;"
    },
    time: time,
    ease: ease
  }
});

function Modal(props) {
  const {
    isOpen,
    onRequestClose,
    onAfterOpen,
    overrides: {
      Header: header,
      Footer: footer,
      Body: BodyOverrides,
      Root: RootOverrides
    },
    config,
    children
  } = props;

  const [Body, bodyProps] = getOverrides(BodyOverrides, BodyStyled);
  const [Root, rootProps] = getOverrides(RootOverrides, RootStyled);

  let configs = rm(config || defaults.center);

  let rawConfigs = {};

  let closeTimeout = 0;

  configs.forEach((config, range) => {
    config.mode = config.mode || "center";
    config = Object.assign({}, defaults[config.mode], globalDefaults, config);

    if (config.animationTime > closeTimeout) {
      closeTimeout = config.animationTime;
    }

    switch (config.mode) {
      case "center":
        rawConfigs[range.from] = centered(
          config.width,
          config.height,
          config.animationTime,
          config.animationEase,
          config.backgroundColor
        );
        break;
      case "left":
        rawConfigs[range.from] = slide(
          config.width,
          "100%",
          config.animationTime,
          config.animationEase,
          config.backgroundColor,
          "X",
          true
        );
        break;
      case "right":
        rawConfigs[range.from] = slide(
          config.width,
          "100%",
          config.animationTime,
          config.animationEase,
          config.backgroundColor,
          "X",
          false
        );
        break;
      case "top":
        rawConfigs[range.from] = slide(
          "100%",
          config.height,
          config.animationTime,
          config.animationEase,
          config.backgroundColor,
          "Y",
          true
        );
        break;
      case "bottom":
        rawConfigs[range.from] = slide(
          "100%",
          config.height,
          config.animationTime,
          config.animationEase,
          config.backgroundColor,
          "Y",
          false
        );
        break;
    }
  });

  let styles = rm(rawConfigs);

  const sharedProps = {
    close: onRequestClose
  };

  const content = (
    <Root {...rootProps} {...sharedProps}>
      <div
        css={css`
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
        `}
      >
        {header && (
          <div
            css={css`
              flex-shrink: 0;
              flex-grow: 0;
            `}
          >
            {header(sharedProps)}
          </div>
        )}

        <div
          css={css`
            position: relative;
            flex-grow: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          `}
        >
          <Body {...bodyProps} {...sharedProps}>
            {children}
          </Body>
        </div>

        {footer && (
          <div
            css={css`
              flex-shrink: 0;
              flex-grow: 0;
            `}
          >
            {footer(sharedProps)}
          </div>
        )}
      </div>
    </Root>
  );

  return (
    <ReactModal
      overlayClassName={{
        base: "Overlay",
        afterOpen: `Overlay--opened`,
        beforeClose: `Overlay--before-close`
      }}
      className={{
        base: "Modal",
        afterOpen: `Modal--opened`,
        beforeClose: `Modal--before-close`
      }}
      style={{
        overlay: {
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "transparent"
        },
        content: {
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }}
      isOpen={isOpen}
      closeTimeoutMS={closeTimeout * 1000}
      onRequestClose={onRequestClose}
      onAfterOpen={onAfterOpen}
      parentSelector={() => document.getElementById("__layers__")}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;

          ${styles.css(
            style => `
              background-color: ${style.backgroundColor.css};
              transition: all ${style.animation.time}s ${
              style.animation.ease.css
            };

              ${style.animation.background.before}
              .Modal--opened:not(.Modal--before-close) & {
                  ${style.animation.background.after}
              }
          `
          )}
        `}
        onClick={onRequestClose}
        key={"background"}
      />

      <div
        css={css`
          ${styles.css(style => style.position)}
        `}
      >
        <div
          css={css`
            ${styles.css(
              style => `
              position: relative;
              width: 100%;
              height: 100%;

              transition: all ${style.animation.time}s ${
                style.animation.ease.css
              };
              ${style.animation.content.before}
              .Modal--opened:not(.Modal--before-close) & {
                  ${style.animation.content.after}
              }
          `
            )}
          `}
        >
          {content}
        </div>
      </div>
    </ReactModal>
  );
}

Modal.setAppElement = function(appElement) {
  ReactModal.setAppElement(appElement);
};

Modal.propTypes = {
  config: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func
};

Modal.defaultProps = {
  overrides: {}
};

function ModalContainer({ className, style }) {
  useEffect(() => {
    Modal.setAppElement("#__storefrontUI__modalContainer");
  });

  return (
    <>
      <Global
        styles={css`
          body.ReactModal__Body--open {
            overflow-y: hidden;
          }
        `}
      />
      <div
        style={style}
        className={className}
        id={"__storefrontUI__modalContainer"}
      />
    </>
  );
}

export default Modal;
export { ModalContainer };
