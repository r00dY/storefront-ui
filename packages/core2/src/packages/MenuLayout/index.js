import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useContext
} from "react";
import Box from "../Box";
import ReactDOM from "react-dom";

import { useDebounce } from "use-debounce";

import ShowHide from "../ShowHide";

const MenuLayoutContext = React.createContext({});

const MenuBar = ({ open, takesSpace, ...props }) => {
  return <Box {...props} />;
};

function MenuBarSticky(props) {
  const [height, setHeight] = useState("auto");
  const [sticky, setSticky] = useState(false);

  const ref = useRef(null);

  const context = useContext(MenuLayoutContext);

  const container = document.getElementById("__sticky__");

  useEffect(
    () => {
      let onScrollListener = () => {
        const rect = ref.current.getBoundingClientRect();

        const menuBottomY = document
          .getElementById("__menubottom__")
          .getBoundingClientRect().top;
        const stickyBarY = document
          .getElementById("__sticky__")
          .getBoundingClientRect().top;

        /**
         * IMPORTANT!
         *
         * There's assymetry here. Depending on open / not open state of bar, we differently pick the moment it becomes sticky. if not opened it becomes sticky "behind the curtains" (when totally covered by menu). If opened, then standard sticky.
         */
        if (!sticky) {
          if (props.open) {
            // if sticky and open
            if (rect.top < menuBottomY) {
              setHeight(rect.height);
              setSticky(true);
            }
          } else {
            // if sticky but NOT open, let it flow behind menu (like it's normally in body content) and THEN fix.
            if (rect.bottom < menuBottomY) {
              setHeight(rect.height);
              setSticky(true);
            }
          }
        } else {
          if (rect.top >= stickyBarY) {
            setHeight("auto");
            setSticky(false);
          }
        }
      };

      window.addEventListener("scroll", onScrollListener, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScrollListener);
      };
    },
    [sticky, props.open]
  );

  useEffect(
    () => {
      context.setStickyOpen(props.open);
    },
    [props.open]
  );

  const isDisplayedInPortal = sticky && container;

  return (
    <Box _ref={ref} sx={{ height }}>
      {isDisplayedInPortal && ReactDOM.createPortal(props.children, container)}
      {!isDisplayedInPortal && props.children}
    </Box>
  );
}

function MenuLayout(props) {
  let { offset = 0, contentAbove } = props;

  let children = [];
  let fixedBars = [];

  const [stickyOpen, setStickyOpen] = useState(true);

  React.Children.forEach(props.children, child => {
    if (child && child.type === MenuBar) {
      fixedBars.push(child);
    } else {
      children.push(child);
    }
  });

  fixedBars.push(
    <MenuBar id={"__sticky__"} open={stickyOpen} takesSpace={false} />
  );

  return (
    <MenuLayoutContext.Provider
      value={{
        setStickyOpen: open => {
          setStickyOpen(open);
        }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 200
          }}
        >
          {contentAbove}
        </Box>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100
          }}
        >
          {/*<Box sx={{position: "absolute", top: 0, width: "100%"}}>*/}
          <MenuBarsContainer bars={fixedBars} />
          {/*</Box>*/}
        </Box>
        <Box sx={{ pt: offset, position: "relative", zIndex: 0 }}>
          {children}
        </Box>
      </Box>
    </MenuLayoutContext.Provider>
  );
}

MenuLayout.MenuBar = MenuBar;
MenuLayout.MenuBarSticky = MenuBarSticky;

export default MenuLayout;

const isBarOpen = bar => {
  let open = bar.props.open;
  if (typeof open === "undefined") {
    open = true;
  } else {
    open = !!open;
  }

  return open;
};

/**
 * Version with recursion and with ShowHide
 */
const MenuBarsContainer = ({ bars, previousBarTakesSpace = true }) => {
  if (!bars || bars.length === 0) {
    return <Box id={"__menubottom__"} />;
  }

  const bar = bars[0];
  const open = isBarOpen(bar);
  const takesSpace = !!bar.props.takesSpace && previousBarTakesSpace;

  const dialogs = bar.props.dialogs;

  return (
    <Box
      sx={{
        position: takesSpace ? "relative" : "absolute",
        top: takesSpace ? 0 : "100%",
        width: "100%",
        zIndex: -1
      }}
    >
      <Box
        sx={
          takesSpace
            ? {}
            : {
                transform: !open ? "translateY(-100%)" : "none",
                transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"
              }
        }
      >
        {takesSpace && (
          <ShowHide isOpen={open} stickToBottom={true}>
            {bar}
          </ShowHide>
        )}

        <Box
          className={"__menulayers__"}
          sx={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            className={"__menulayersbackground__"}
            sx={{
              position: "absolute",
              pointerEvents: "none",
              zIndex: -1,
              top: 0,
              left: 0,
              width: 1,
              height: 1,
              transformOrigin: "0 0"
            }}
          >
            <Box
              className={"__menulayersbackgroundinside__"}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bg: "black"
              }}
            />
          </Box>
        </Box>
        {/*{*/}
        {/*dialogs && <Box sx={{position: "absolute", zIndex: 1}}>{ dialogs[0] }</Box>*/}
        {/*}*/}

        {!takesSpace && bar}

        <MenuBarsContainer
          bars={bars.slice(1)}
          previousBarTakesSpace={takesSpace}
        />
      </Box>
    </Box>
  );
};

/**
 * Version with recursion + margin-top
 */
// const MenuBarsContainer = ({ bars, isPreviousOpen = true }) => {
//   if (!bars || bars.length === 0) {
//     return <Box id={"__menubottom__"} />;
//   }
//
//   const bar = bars[0];
//   const open = isBarOpen(bar);
//
//   return (
//     <Box sx={{ position: "relative" }}>
//       <Box
//         sx={{
//           transform: !open ? "translateY(-100%)" : "none",
//           transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"
//         }}
//       >
//         {bar}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "100%",
//             width: "100%",
//             zIndex: -1
//           }}
//         >
//           <MenuBarsContainer bars={bars.slice(1)} />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

/**
 * Version without recursion with margin-top
 */
// const MenuBarsContainer = ({bars}) => {
//     return (
//         <Box sx={{position: "relative"}}>
//             {bars.map((bar, index) => {
//
//                 const open = isBarOpen(bar);
//                 console.log('open', open);
//
//                 return <Box sx={{
//                     position: "relative",
//                     zIndex: 100 - index,
//                 }}>
//                     <Box sx={{
//                         // transform: !open ? "translateY(-100%)" : 0,
//                         marginTop: !open ? "-100%" : 0,
//                         transition: "all .35s cubic-bezier(0.19, 1, 0.22, 1)"
//                     }}>
//                     {bar}
//                     </Box>
//                 </Box>
//             })}
//             <Box id={"__menubottom__"}/>
//         </Box>
//     );
// };

/**
 * Version without recursion and with ShowHide
 */
// const MenuBarsContainer = ({bars}) => {
//     return (
//         <Box sx={{position: "relative"}}>
//             {bars.map((bar, index) => {
//
//                 const open = isBarOpen(bar);
//
//                 return <Box sx={{
//                     position: "relative",
//                       transform: !open ? "translateY(-100%)" : "none",
//                       transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)",
//                     zIndex: 100 - index
//
//                 }}>
//                     <ShowHide isOpen={/*open*/true} sx={{zIndex: 100 - index}} stickToBottom={true}>
//                         {bar}
//                     </ShowHide>
//                 </Box>
//             })}
//             <Box id={"__menubottom__"}/>
//         </Box>
//     );
// };

/**
 * Version with recursion + translate only
 */
// const MenuBarsContainer = ({ bars, isPreviousOpen = true }) => {
//   if (!bars || bars.length === 0) {
//     return <Box id={"__menubottom__"} />;
//   }
//
//   const bar = bars[0];
//   const open = isBarOpen(bar);
//
//   return (
//     <Box sx={{ position: "relative" }}>
//       <Box
//         sx={{
//           transform: !open ? "translateY(-100%)" : "none",
//           transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"
//         }}
//       >
//         {bar}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "100%",
//             width: "100%",
//             zIndex: -1
//           }}
//         >
//           <MenuBarsContainer bars={bars.slice(1)} />
//         </Box>
//       </Box>
//     </Box>
//   );
//
//   /**
//    * Below prototype is responsible for being able to hide 2 bars at the same time without harmonica effect.
//    *
//    * This has couple of problems:
//    * 1. Sometimes it's not animated (because of jumping from absolute to relative animation doest fire
//    * 2. If C is animating under B and then suddenly B becomes hidden too how do we do it without jank?
//    * 3. Also what happens during resizing of bars?
//    *
//    *
//    */
//   // const open = isBarOpen(bar);
//   // const nextBarOpen = bars.length > 1 && isBarOpen(bars[1]);
//   //
//   // return <Box sx={{position: "relative"}}>
//   //     <Box sx={{transform: !open && isPreviousOpen ? "translateY(-100%)" : "none", transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"}}>
//   //         { bar }
//   //         <Box sx={{
//   //             position: !open && !nextBarOpen ? "relative" : "absolute",
//   //             top: !open && !nextBarOpen ? 0 : "100%",
//   //             width: "100%",
//   //             zIndex: -1}}>
//   //             <MenuBarsContainer bars={bars.slice(1)} isPreviousOpen={open} />
//   //         </Box>
//   //     </Box>
//   // </Box>
// };

//
// function useLayer(props) {
//     let {
//         open,
//         anchoredTo = "window",
//         animationTime = 1000,
//         openOnHover = true,
//         onMount,
//         onMount2
//     } = props;
//
//     const [anchorRect, setAnchorRect] = useState(null);
//     const [isDisplayed, setDisplayed] = useState(false);
//     const [internalOpen, setInternalOpen] = useState(false);
//
//     const buttonRef = useRef(null);
//
//     // TODO: make it possible to steer Layer from hook AND from button. For now, with Layer+button we have only "uncontrolled state". Most frequently used!
//     if (button) {
//         button = React.cloneElement(button, {
//             onClick: () => {
//                 if (openOnHover) {
//                     setInternalOpen(true);
//                 } else {
//                     setInternalOpen(!internalOpen);
//                 }
//             },
//             onMouseEnter: () => {
//                 if (!openOnHover) {
//                     return;
//                 }
//
//                 setInternalOpen(true);
//             },
//             onMouseOut: () => {
//                 if (!openOnHover) {
//                     return;
//                 }
//
//                 setInternalOpen(false);
//             },
//             _ref: buttonRef
//         });
//
//         anchoredTo = buttonRef;
//
//         const [debouncedOpen] = useDebounce(internalOpen, 100);
//         open = debouncedOpen;
//     }
//
//     const ref = useRef(null);
//     const timeout = useRef(null);
//
//     useLayoutEffect(
//         () => {
//             clearTimeout(timeout.current);
//
//             if (open) {
//                 if (onMount) { onMount(ref.current.getBoundingClientRect())}
//
//                 window.getComputedStyle(ref.current).opacity; // recalculate styles
//
//                 if (onMount2) { onMount(ref.current.getBoundingClientRect())}
//
//                 setDisplayed(true);
//
//             } else {
//                 timeout.current = setTimeout(() => {
//                     setDisplayed(false);
//                 }, animationTime);
//             }
//         },
//         [open]
//     );
//
// }

/**
 * For now only uncontrolled (button + layer)
 */
function useLayers(layers = []) {
  // let buttons = [];
  // let buttonRefs = useRef(layers.map(_ => React.createRef()));

  const [mounted, setMounted] = useState(false);

  let initState = {};
  layers.forEach((layer, index) => {
    initState[(layer.key || index).toString()] = {
      active: false,
      relative: false,
      buttonRef: React.createRef(),
      layer
    };
  });

  const anchorRects = useRef({}); // we cache anchor rects for now, not to call getBoundingClientRect every render

  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  const [state, setState] = useState(initState);
  const [isSwitchingState, setSwitchingState] = useState(false);

  const timer = useRef(null);

  let buttons = [];
  let contents = [];

  const isAtInitState = !Object.values(state).reduce(
    (acc, val) => acc || val.relative,
    false
  ); // init state means that all layers are fully closed (not closing).
  const isAnyActive = Object.values(state).reduce(
    (acc, val) => acc || val.active,
    false
  ); // init state means that all layers are fully closed (not closing).

  let activeKey = null;
  Object.entries(state).forEach(([key, val]) => {
    if (val.active) {
      activeKey = key;
    }
  });

  const getPosition = key => {
    let { offsetX = 0, offsetY = 0, width, anchoredTo, posX = "left" } = state[
      key
    ].layer;

    if (!anchorRects.current[key]) {
      anchorRects.current[key] = state[
        key
      ].buttonRef.current.getBoundingClientRect();
    }

    const anchorRect = anchorRects.current[key];

    let position = {};

    if (anchoredTo === "window") {
      switch (posX) {
        case "center":
          position.center = true;
          break;
        case "left":
          position.left = offsetX;
          position.right = "auto";
          break;
        case "right":
          position.left = "auto";
          position.right = offsetX;
          break;
      }
    } else {
      switch (posX) {
        case "center":
        // todo: center
        case "right":
          position.left = "auto";
          position.right = offsetX + (window.innerWidth - anchorRect.right);
          break;
        case "left-outside":
          position.left = "auto";
          position.right = offsetX + (window.innerWidth - anchorRect.left);
          break;
        case "right-outside":
          position.left = offsetX + anchorRect.right;
          position.right = "auto";
          break;
        case "left":
          position.left = offsetX + anchorRect.left;
          position.right = "auto";
      }
    }

    position.top = offsetY;
    position.width = width;
    position.anchoredTo = anchoredTo;

    return position;
  };

  const switchLayer = key => {
    if (key !== null) {
      clearTimeout(timer.current);
    }

    if (isAtInitState) {
      // if coming from empty, we set init state for animation
      backgroundRef.current.style.width = "100%";
      backgroundRef.current.style.height = 0;
      backgroundRef.current.style.opacity = 0;
      backgroundRef.current.style.transition = "none";

      const pos = getPosition(key);

      containerRef.current.style.left = `${pos.left}px`;
      containerRef.current.style.right = `${pos.right}px`;
      containerRef.current.style.top = `${pos.top}px`;
      containerRef.current.style.transition = "none";
    } else {
      const backgroundRect = backgroundRef.current.getBoundingClientRect();

      backgroundRef.current.style.width = backgroundRect.width + "px";
      backgroundRef.current.style.height = backgroundRect.height + "px";
      backgroundRef.current.style.transition = "none";
    }

    /**
     * relative means that this menu TAKES SPACE (position: relative)
     */
    let newState = {
      ...state
    };

    for (let k in newState) {
      if (k === key) {
        newState[k].active = true;
        newState[k].relative = true;
      } else {
        if (key === null && newState[k].active) {
          // If hiding, let's keep relative == true;
          newState[k].relative = true;
        } else {
          newState[k].relative = false;
        }

        newState[k].active = false;
      }
    }

    setState(newState);
    setSwitchingState(true);
  };

  useLayoutEffect(
    () => {
      if (!isSwitchingState) {
        return;
      }

      let _ = window.getComputedStyle(backgroundRef.current).height; // force recalculate styles

      if (isAnyActive) {
        backgroundRef.current.style.width = "100%";
        backgroundRef.current.style.height = "100%";
        backgroundRef.current.style.opacity = 1;
        backgroundRef.current.style.transition =
          "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

        const pos = getPosition(activeKey);

        containerRef.current.style.left = `${pos.left}px`;
        containerRef.current.style.right = `${pos.right}px`;
        containerRef.current.style.top = `${pos.top}px`;

        // containerRef.current.style.left = `${50 * index}px`;
        containerRef.current.style.transition =
          "all .35s cubic-bezier(0.19, 1, 0.22, 1)";
      } else {
        backgroundRef.current.style.width = "100%";
        backgroundRef.current.style.height = 0;
        backgroundRef.current.style.opacity = 0;
        backgroundRef.current.style.transition =
          "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

        timer.current = setTimeout(() => {
          // all relative flags must go down to false (which means that isAtInitState will light up).

          let newState = {
            ...state
          };

          for (let k in newState) {
            newState[k].relative = false;
          }

          setState(newState);
        }, 350);
      }

      setSwitchingState(false);

      // setContent(
      //     content.map(item =>
      //         item.active
      //             ? { ...item, isVisible: true }
      //             : { ...item, isVisible: false }
      //     )
      // );
      // setStatus(0);
    },
    [isSwitchingState]
  );

  layers.forEach((layer, index) => {
    const key = (layer.key || index).toString();

    const isActive = state[key].active;
    const relative = state[key].relative;

    let button = React.cloneElement(layer.button, {
      onClick: () => {
        switchLayer(key);

        // if (openOnHover) {
        //     setInternalOpen(true);
        // } else {
        //     setInternalOpen(!internalOpen);
        // }
      },
      // onMouseEnter: () => {
      //     if (!openOnHover) {
      //         return;
      //     }
      //
      //     setInternalOpen(true);
      // },
      // onMouseLeave: () => {
      //     if (!openOnHover) {
      //         return;
      //     }
      //
      //     setInternalOpen(false);
      // },
      _ref: state[key].buttonRef,
      selected: isActive
    });

    if (mounted) {
      const position = getPosition(key);
      //
      // let {
      //     offsetX = 0,
      //     offsetY = 0,
      //     width,
      //     anchoredTo,
      //     posX = "left"
      // } = layer;
      //
      // if (!anchorRects.current[key]) {
      //     anchorRects.current[key] = state[
      //         key
      //         ].buttonRef.current.getBoundingClientRect();
      // }
      //
      // const anchorRect = anchorRects.current[key];
      //
      // let position = {};
      //
      // if (anchoredTo === "window") {
      //     switch (posX) {
      //         case "center":
      //             position.center = true;
      //             break;
      //         case "left":
      //             position.left = offsetX;
      //             position.right = "auto";
      //             break;
      //         case "right":
      //             position.left = "auto";
      //             position.right = offsetX;
      //             break;
      //     }
      // } else {
      //     switch (posX) {
      //         case "center":
      //         // todo: center
      //         case "right":
      //             position.left = "auto";
      //             position.right = offsetX + (window.innerWidth - anchorRect.right);
      //             break;
      //         case "left-outside":
      //             position.left = "auto";
      //             position.right = offsetX + (window.innerWidth - anchorRect.left);
      //             break;
      //         case "right-outside":
      //             position.left = offsetX + anchorRect.right;
      //             position.right = "auto";
      //             break;
      //         case "left":
      //             position.left = offsetX + anchorRect.left;
      //             position.right = "auto";
      //     }
      // }

      const content =
        typeof layer.content === "function"
          ? layer.content({ isVisible: isActive && !isSwitchingState })
          : layer.content;

      contents.push(
        <Box
          sx={{
            position: relative ? "relative" : "absolute",
            zIndex: relative ? 1 : 0,
            pointerEvents: isActive ? "default" : "none",
            // left: position.left,
            // right: position.right,
            // top: offsetY,
            // width: "max-content"
            width: "max-content"
            // width
          }}
          // _ref={ref}
          // onMouseEnter={() => {
          //     if (!openOnHover) {
          //         return;
          //     }
          //     setInternalOpen(true);
          // }}
          // onMouseOut={() => {
          //     if (!openOnHover) {
          //         return;
          //     }
          //     setInternalOpen(false);
          // }}
          key={"portal-" + key}
        >
          {content}
        </Box>
      );
    }

    buttons.push(button);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    buttons,
    layers:
      mounted &&
      ReactDOM.createPortal(
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0
          }}
          // _ref={ref}
          // onMouseEnter={() => {
          //     if (!openOnHover) {
          //         return;
          //     }
          //     setInternalOpen(true);
          // }}
          // onMouseOut={() => {
          //     if (!openOnHover) {
          //         return;
          //     }
          //     setInternalOpen(false);
          // }}
          key={"portal"}
          _ref={containerRef}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "0 0",
              zIndex: -1,
              bg: "coral"
            }}
            _ref={backgroundRef}
          />

          {contents}
        </Box>,
        document.querySelector(".__menulayers__")
      ),
    hide: () => {
      switchLayer(null);
    }
  };
}

function Layer(props) {
  let {
    open = false,
    posX = "left",
    posY,
    offsetX = 0,
    offsetY = 0,
    anchoredTo,
    animationTime = 1000,
    button,
    width,
    openOnHover = true,
    onMount,
    controller
  } = props;

  // if (!controller) {
  //     controller = useLayers();
  // }
  //
  // const idRef = useRef(null);
  // useEffect(() => {
  //     idRef.current = Math.random().toString();
  // }, []);
  //
  // const id = idRef.current;

  const [mounted, setMounted] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const [isDisplayed, setDisplayed] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);

  const buttonRef = useRef(null);

  // TODO: make it possible to steer Layer from hook AND from button. For now, with Layer+button we have only "uncontrolled state". Most frequently used!
  if (button) {
    const [debouncedOpen] = useDebounce(internalOpen, 100);
    open = debouncedOpen;

    button = React.cloneElement(button, {
      onClick: () => {
        if (openOnHover) {
          setInternalOpen(true);
        } else {
          setInternalOpen(!internalOpen);
        }
      },
      onMouseEnter: () => {
        if (!openOnHover) {
          return;
        }

        setInternalOpen(true);
      },
      onMouseLeave: () => {
        if (!openOnHover) {
          return;
        }

        setInternalOpen(false);
      },
      _ref: buttonRef,
      selected: open
    });

    if (anchoredTo === undefined) {
      anchoredTo = buttonRef;
    }
  }

  if (!anchoredTo) {
    anchoredTo = "window";
  }

  const ref = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (anchoredTo && anchoredTo.current) {
      setAnchorRect(anchoredTo.current.getBoundingClientRect());
    }
  }, []);

  useLayoutEffect(
    () => {
      // if (!open) {
      //     setLayerRect(null);
      // }
      // else {
      //     setLayerRect(ref.getBoundingClientRect())
      // }
      clearTimeout(timeout.current);

      if (open) {
        window.getComputedStyle(ref.current).opacity; // recalculate styles

        setDisplayed(true);
      } else {
        timeout.current = setTimeout(() => {
          setDisplayed(false);
        }, animationTime);
      }
    },
    [open]
  );

  if ((!open && !isDisplayed) || !mounted) {
    // If not displayed or mounted, just button
    if (button) {
      return button;
    }

    return null;
  }

  let position = {};

  if (anchoredTo === "window") {
    switch (posX) {
      case "center":
        position.center = true;
        break;
      case "left":
        position.left = offsetX;
        position.right = "auto";
        break;
      case "right":
        position.left = "auto";
        position.right = offsetX;
        break;
    }
  } else {
    switch (posX) {
      case "center":
      // todo: center
      case "right":
        position.left = "auto";
        position.right = offsetX + (window.innerWidth - anchorRect.right);
        break;
      case "left-outside":
        position.left = "auto";
        position.right = offsetX + (window.innerWidth - anchorRect.left);
        break;
      case "right-outside":
        position.left = offsetX + anchorRect.right;
        position.right = "auto";
        break;
      case "left":
        position.left = offsetX + anchorRect.left;
        position.right = "auto";
    }
  }

  const state = {
    open,
    before: (open && !isDisplayed) || (!open && isDisplayed),
    anchorRect
  };

  const children =
    typeof props.children === "function"
      ? props.children(state)
      : props.children;

  /**
   * button
   */

  const portal = ReactDOM.createPortal(
    <Box
      sx={{
        position: "absolute",
        left: position.left,
        right: position.right,
        top: offsetY,
        width
      }}
      _ref={ref}
      onMouseEnter={() => {
        if (!openOnHover) {
          return;
        }
        setInternalOpen(true);
      }}
      onMouseOut={() => {
        if (!openOnHover) {
          return;
        }
        setInternalOpen(false);
      }}
      key={"portal"}
    >
      {open && children}
    </Box>,
    document.querySelector(".__menulayers__")
  );

  if (button) {
    return [button, portal];
  }
  return portal;
}

MenuLayout.Layer = Layer;
MenuLayout.useLayers = useLayers;
