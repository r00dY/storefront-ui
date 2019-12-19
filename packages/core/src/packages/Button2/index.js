/** @jsx jsx */

import React, { useRef, useState } from "react";
import { jsx } from "../index";
import useHover from "../useHover";

const buttonResetStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal",
  fontSmooth: "inherit",
  appearance: "none",
  ":not(:disabled)": {
    cursor: "pointer"
  }
};

function ButtonRaw_(props) {
  const { css, innerRef, ...restProps } = props;

  return (
    <button css={[buttonResetStyles, css]} {...restProps} ref={innerRef} />
  );
}

const ButtonRaw = React.forwardRef((props, ref) => (
  <ButtonRaw_ {...props} innerRef={ref} />
));

export { ButtonRaw };

/**
 * Button!
 */

let defaults = {
  background: {
    type: "div",
    css: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  },
  content: ({ children }) => ({
    type: "div",
    css: {
      position: "relative",
      pointerEvents: "none"
    },
    children: children
  })
};

function getElem(override = {}, defaults, state, forcedProps = {}) {
  override = typeof override === "function" ? override(state) : override;
  defaults = typeof defaults === "function" ? defaults(state) : defaults;
  forcedProps =
    typeof forcedProps === "function" ? forcedProps(state) : forcedProps;

  return jsx(override.type || defaults.type, {
    ...defaults.props,
    ...override.props,
    ...forcedProps,
    css: [defaults.css, override.css],
    overrides: override.overrides,
    children: override.children || defaults.children,
    type: undefined
  });
}

function Button_(props) {
  const {
    disabled,
    css,
    innerRef,
    overrides: { background, content },
    children,
    fitWidth,
    fitHeight,
    ...restProps
  } = props;

  const [hoverRef, isHovered] = useHover();

  const state = {
    disabled,
    isHovered,
    active: false,
    children
  };

  // TODO: isHovered is going crazy, unless we set pointerEvents: none to background and button.
  // console.log(isHovered);

  // top: -3,
  // left: -3,
  // right: -3,
  // bottom: -3,
  // background: "lightgrey",
  // opacity: isHovered ? 0.2 : 0,
  // transition: "opacity .2s"

  const backgroundElem = getElem(background, defaults.background, state);
  const foregroundElem = getElem(content, defaults.content, state);

  // TODO: css props should be limited to layout ones.
  return (
    <ButtonRaw
      {...restProps}
      css={{
        position: "relative",
        width: fitWidth ? "100%" : "auto",
        height: fitHeight ? "100%" : "auto"
      }}
      ref={hoverRef}
    >
      {backgroundElem}
      {foregroundElem}
    </ButtonRaw>
  );
}

Button_.defaultProps = {
  disabled: false,
  overrides: {}
};

const Button = React.forwardRef((props, ref) => (
  <Button_ innerRef={ref} {...props} />
));

export { Button };

/**
 * Button with loader and enhancers
 */

const ButtonSuper = ({ startEnhancer, endEnhancer, isLoading, ...props }) => (
  <Button {...props} />
);

export { ButtonSuper };

/**
 Three buttons which onClick change label on the button on the right!!!
 */

function ThreeButtons(props) {
  let {
    overrides: { button1, button2, button3 }
  } = props;

  const [label1, setLabel1] = useState("dupa");
  const [label2, setLabel2] = useState("dupa2");
  const [label3, setLabel3] = useState("dupa3");

  const onClick = () => {
    setLabel1(label2);
    setLabel2(label3);
    setLabel3(label1);
  };

  const button1Props = {
    onClick,
    children: label1
  };

  const button2Props = {
    onClick,
    children: label2
  };

  const button3Props = {
    onClick,
    children: label3
  };

  button1 = button1 || (({ buttonProps }) => <Button {...buttonProps} />);
  button2 = button2 || (({ buttonProps }) => <Button {...buttonProps} />);
  button3 = button3 || (({ buttonProps }) => <Button {...buttonProps} />);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div css={{ flex: "1 1" }}>{button1({ buttonProps: button1Props })}</div>
      <div css={{ flex: "1 1" }}>{button2({ buttonProps: button2Props })}</div>
      <div css={{ flex: "1 1" }}>{button3({ buttonProps: button3Props })}</div>
    </div>
  );
}

ThreeButtons.defaultProps = {
  overrides: {}
};

export { ThreeButtons };

/**
 ThreeButtons2 - different API
 **/

/**
 Three buttons which onClick change label on the button on the right!!!
 */

defaults = {
  ...defaults,
  button: ({ label }) => ({
    type: Button,
    children: label
  })
};

function ThreeButtons2(props) {
  let {
    overrides: { button1, button2, button3 }
  } = props;

  const [label1, setLabel1] = useState("dupa");
  const [label2, setLabel2] = useState("dupa2");
  const [label3, setLabel3] = useState("dupa3");

  const onClick = () => {
    setLabel1(label2);
    setLabel2(label3);
    setLabel3(label1);
  };

  // Forced props
  const button1Props = {
    onClick,
    children: label1,
    fitWidth: true,
    fitHeight: true
  };

  const button1State = {
    label: label1
  };

  const button2Props = {
    onClick,
    children: label2,
    fitWidth: true,
    fitHeight: true
  };

  const button2State = {
    label: label2
  };

  const button3Props = {
    onClick,
    children: label3,
    fitWidth: true,
    fitHeight: true
  };

  const button3State = {
    label: label3
  };

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div css={{ flex: "1 1" }}>
        {getElem(button1, defaults.button, button1State, button1Props)}
      </div>
      <div css={{ flex: "1 1" }}>
        {getElem(button2, defaults.button, button2State, button2Props)}
      </div>
      <div css={{ flex: "1 1" }}>
        {getElem(button3, defaults.button, button3State, button3Props)}
      </div>
    </div>
  );
}

ThreeButtons2.defaultProps = {
  overrides: {}
};

export { ThreeButtons2 };
