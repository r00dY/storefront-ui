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

function mergeCss(a, b) {
  let ret = [];

  if (Array.isArray(a)) {
    ret = [...a];
  } else {
    ret = [a];
  }

  if (Array.isArray(b)) {
    ret = [...ret, ...b];
  } else {
    ret = [...ret, b];
  }

  return ret;
}

function getElem(override = {}, defaults, state, forcedProps = {}) {
  override = typeof override === "function" ? override(state) : override;
  defaults = typeof defaults === "function" ? defaults(state) : defaults;
  forcedProps =
    typeof forcedProps === "function" ? forcedProps(state) : forcedProps;

  const type = override.type || defaults.type || "div";

  return jsx(type, {
    ...defaults.props,
    ...override.props,
    ...forcedProps,
    css: mergeCss(defaults.css, override.css),
    overrides: override.overrides,
    children: override.children || defaults.children,
    type: undefined
  });
}

function getOverride(override = {}, defaults, state, forcedProps = {}) {
  override = typeof override === "function" ? override(state) : override;
  defaults = typeof defaults === "function" ? defaults(state) : defaults;
  forcedProps =
    typeof forcedProps === "function" ? forcedProps(state) : forcedProps;

  const type = override.type || defaults.type;

  return {
    ...defaults.props,
    ...override.props,
    ...forcedProps,
    css: mergeCss(defaults.css, override.css),
    overrides: override.overrides,
    children: override.children || defaults.children,
    type: type
  };
}

// function useButtonState(props) {
//     const {
//         disabled,
//         children,
//         label,
//         ...restProps
//     } = props;
//
//     const [hoverRef, isHovered] = useHover();
//
//     const state = {
//         disabled,
//         children,
//         isHovered,
//     };
//
//     const buttonProps = {
//         ref: hoverRef,
//         disabled,
//         onClick: (...args) => { console.log('siemaaa'); if (props.onClick) { props.onClick(...args) } },
//     };
//
//     return { state, buttonProps };
//
//     // TODO: isHovered is going crazy, unless we set pointerEvents: none to background and button.
//     // console.log(isHovered);
//
//     // top: -3,
//     // left: -3,
//     // right: -3,
//     // bottom: -3,
//     // background: "lightgrey",
//     // opacity: isHovered ? 0.2 : 0,
//     // transition: "opacity .2s"
// }

// function ButtonStateless(props) {
//     const {
//         overrides: {background, content},
//         fitWidth,
//         fitHeight,
//         __state: { state, buttonProps },
//         ...restProps
//     } = props;
//
//     const backgroundElem = getElem(background, defaults.background, state);
//     const contentElem = getElem(content, defaults.content, state);
//
//     return <ButtonRaw
//         {...restProps}
//         css={{
//             position: "relative",
//             width: fitWidth ? "100%" : "auto",
//             height: fitHeight ? "100%" : "auto"
//         }}
//         {...buttonProps}
//     >
//         {backgroundElem}
//         {contentElem}
//     </ButtonRaw>
// }
//
// function Button_(props) {
//     const state = useButtonState(props);
//     return <ButtonStateless {...props} __state={state} />;
// }

// Types:
// ButtonState
//

function Button_(props) {
  // const button = useButton(props); // semantics

  // look
  let {
    disabled,
    children,
    label,
    overrides, //: {background, content},
    fitWidth,
    fitHeight,
    ...restProps
  } = props;

  const [hoverRef, isHovered] = useHover();

  const state = {
    disabled,
    children,
    isHovered
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

  /** Overrides **/
  overrides = typeof overrides === "function" ? overrides(state) : overrides;

  const backgroundElem = getElem(
    overrides.background,
    defaults.background,
    state
  );
  const contentElem = getElem(overrides.content, defaults.content, state);

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
      disabled={disabled}
    >
      {backgroundElem}
      {contentElem}
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

function getElem2() {}

function mergeStates() {}

// function useButton() {
// };
//
// function createElem2() {
// };

const Dupa = {
  useDupa: () => {
    console.log("hook");
    const [a, setA] = useState(10);
    return a;
  }
};

const ButtonSuper = props => {
  const {
    overrides: {
      startEnhancer: startEnhancerOverride,
      endEnhancer: endEnhancerOverride,
      content: contentOverride,
      background: backgroundOverride
    },
    startEnhancer,
    endEnhancer,
    isLoading,
    ...restProps
  } = props;

  // const newState = {
  //     ...
  // }
  //
  // const button = useButtonState(restProps);
  //
  // console.log('button state', button.state);
  //
  // // TODO: create enhancer which can be function of old state and new state
  //
  // // TODO: create Button instance with overrides
  //
  // const state = {
  //     ...button.state,
  //     isLoading,
  //     disabled: button.state.disabled || isLoading
  // };
  //
  // console.log(state)
  //

  //
  //
  //
  // const startEnhancerElem = startEnhancer && getElem2(startEnhancerOverride, ({endEnhancer}) => ({
  //     children: endEnhancer
  // })); // div without any defaults
  //
  // const content = getElem2(contentOverride, ({ children, startEnhancer, endEnhancer }) => ({
  //     css: {
  //         display: "flex",
  //         flexDirection: "row"
  //     },
  //     children: <>
  //         {startEnhancer}
  //         {children}
  //         {endEnhancer}
  //     </>
  // }));
  //
  // const newState = {
  //     isLoading
  // };
  //
  // const overrides = (oldState) => {
  //     const state = {
  //         ...oldState,
  //         ...newState
  //     };
  //
  //     return {
  //         content: content(state),
  //         startEnhancer: startEnhancerElem(state),
  //     }
  // };

  //
  // const startEnhancerElem = startEnhancer && getElem2(startEnhancerOverride, ({children}) => ({
  //     children: children
  // })); // div without any defaults
  //
  // const endEnhancerElem = endEnhancer && getElem2(endEnhancerOverride, ({children}) => ({
  //     children: children
  // })); // div without any defaults
  //
  //
  // const overrides = {
  //     content: ({children}) => ({
  //         css: {
  //             display: "flex",
  //             flexDirection: "row"
  //         },
  //         children: <>
  //             {startEnhancer}
  //             {children}
  //             {endEnhancer}
  //         </>
  //     })
  // };
  //
  //
  // const state = {
  //     isLoading,
  //     startEnhancer: startEnhancerElem,
  //     endEnhancer: endEnhancerElem
  // };
  //
  //
  // const Button = useButton(props, overrides);
  //
  //
  // // state.startEnhancer = {
  // //     children: startEnhancer && startEnhancerElem
  // // };
  //

  const overrides = buttonState => {
    const state = {
      ...buttonState
    };

    const startEnhancerElem =
      startEnhancer &&
      getElem(startEnhancerOverride, { children: startEnhancer }, state); // returns function
    const endEnhancerElem =
      endEnhancer &&
      getElem(endEnhancerOverride, { children: endEnhancer }, state); // returns function

    // const contentOverride = getElem(contentOverride, )

    const content = getOverride(
      contentOverride,
      ({ children, endEnhancer, startEnhancer }) => ({
        css: {
          display: "flex",
          flexDirection: "row"
        },
        children: (
          <>
            {startEnhancer}
            {children}
            {endEnhancer}
          </>
        )
      }),
      {
        ...state,
        startEnhancer: startEnhancerElem,
        endEnhancer: endEnhancerElem
      }
    );

    return {
      content,
      background: backgroundOverride
      // content: ({ children }) => ({
      //     css: {
      //         display: "flex",
      //         flexDirection: "row"
      //     },
      //     children: <>
      //         {startEnhancerElem}
      //         {children}
      //         {endEnhancerElem}
      //     </>
      // })
    };
  };

  return <Button {...restProps} overrides={overrides} />;

  // return <div>Dupa</div>
};

ButtonSuper.defaultProps = {
  overrides: {}
};

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
