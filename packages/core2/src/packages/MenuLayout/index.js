import React, {
  useEffect,
  useLayoutEffect as useLayoutEffect_,
  useState,
  useRef,
  useContext
} from "react";
import Box, { styledBox } from "../Box";
import ReactDOM from "react-dom";

import { useTheme } from "../Theme";

import ShowHide from "../ShowHide";
import Grid from "../Grid";
import { jsx } from "../index";

const useLayoutEffect =
  typeof window === "object" ? useLayoutEffect_ : useEffect;

const MenuLayoutContext = React.createContext({});

const MenuBar = ({ open, takesSpace, ...props }) => {
  return <Box {...props} />;
};

function MenuBarSticky({ open = true, ...props }) {
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
          if (open) {
            // if sticky and open
            if (rect.top < menuBottomY) {
              setHeight(rect.height + "px");
              setSticky(true);
            }
          } else {
            // if sticky but NOT open, let it flow behind menu (like it's normally in body content) and THEN fix.
            if (rect.bottom < menuBottomY) {
              setHeight(rect.height + "px");
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
    [sticky, open]
  );

  useEffect(
    () => {
      context.setStickyOpen(open);
    },
    [open]
  );

  const isDisplayedInPortal = sticky && container;

  const state = {
    stuck: isDisplayedInPortal
  };

  let children =
    typeof props.children === "function"
      ? props.children(state)
      : props.children;

  return (
    <div ref={ref} style={{ height }}>
      {isDisplayedInPortal && ReactDOM.createPortal(children, container)}
      {!isDisplayedInPortal && children}
    </div>
  );
}

const MainContainer = styledBox({
  position: "relative",
  zIndex: 0,
  pt: p => p.offset
});

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
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "relative",
            zIndex: 200
          }}
        >
          {contentAbove}
        </div>
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100
          }}
          id={"__menubarsticky__"}
        >
          {/*<Box sx={{position: "absolute", top: 0, width: "100%"}}>*/}
          <MenuBarsContainer bars={fixedBars} />
          {/*</Box>*/}
        </div>
        <MainContainer offset={offset}>{children}</MainContainer>
      </div>
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

const NotificationsContainerTopLeft = styledBox({
  position: "absolute",
  top: "notificationSystemOffset",
  left: "notificationSystemOffset",
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationsContainerTopRight = styledBox({
  position: "absolute",
  top: "notificationSystemOffset",
  right: "notificationSystemOffset",
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationsContainerTopMobile = styledBox({
  position: "absolute",
  top: "notificationSystemOffset",
  right: "notificationSystemOffset",
  left: "notificationSystemOffset",
  width: "notificationSystemWidth",
  display: ["block", null, "none"]
});

const MenuBarsContainer = ({ bars, previousBarTakesSpace = true }) => {
  const theme = useTheme();

  if (!bars || bars.length === 0) {
    return (
      <div id={"__menubottom__"} style={{ position: "relative" }}>
        <NotificationsContainerTopLeft>
          <Grid
            cols={1}
            gap={"notificationSystemSeparator"}
            id={"__notifications-menu-topLeft__"}
          />
        </NotificationsContainerTopLeft>

        <NotificationsContainerTopRight>
          <Grid
            cols={1}
            gap={"notificationSystemSeparator"}
            id={"__notifications-menu-topRight__"}
          />
        </NotificationsContainerTopRight>

        <NotificationsContainerTopMobile>
          <Grid
            cols={1}
            gap={"notificationSystemSeparator"}
            id={"__notifications-menu-topMobile__"}
          />
        </NotificationsContainerTopMobile>
      </div>
    );
  }

  const bar = bars[0];
  const open = isBarOpen(bar);
  const takesSpace = !!bar.props.takesSpace && previousBarTakesSpace;

  return (
    <div
      style={{
        position: takesSpace ? "relative" : "absolute",
        top: takesSpace ? 0 : "100%",
        width: "100%",
        zIndex: -1
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 0,
          width: "100%",

          ...(takesSpace
            ? {}
            : {
                transform: !open ? "translateY(-100%)" : "none",
                transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"
              })
        }}
        className={"__menubar__"}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%", // VERY IMPORTANT!!!! Makes entire container overflow: hidden so that flying content doesn't create horizontal scroll.
            pointerEvents: "none", // VERY IMPORTANT!!!!
            display: "flex",
            justifyContent: "center",
            opacity: 0
          }}
          className={"__menubarshade__"}
        />

        <div
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            // height: "100vh", // VERY IMPORTANT!!!! Makes entire container overflow: hidden so that flying content doesn't create horizontal scroll.
            // overflow: "hidden",
            pointerEvents: "none", // VERY IMPORTANT!!!!
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "100%",
              pointerEvents: "auto"
            }}
            className={"__menulayerstop__"}
          />
        </div>

        <div className={"__menubarcontent__"} style={{ width: "100%" }}>
          {takesSpace && (
            <ShowHide isOpen={open} stickToBottom={true}>
              {bar}
            </ShowHide>
          )}

          {!takesSpace && bar}
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            // height: "100vh", // VERY IMPORTANT!!!! Makes entire container overflow: hidden so that flying content doesn't create horizontal scroll.
            // overflow: "hidden",
            pointerEvents: "none", // VERY IMPORTANT!!!!
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              width: "100%"
            }}
            className={"__menulayers__"}
          />
        </div>

        <MenuBarsContainer
          bars={bars.slice(1)}
          previousBarTakesSpace={takesSpace}
        />
      </div>
    </div>
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

const defaultBackgroundOverlay = {
  color: "black",
  opacity: 0.5,
  animationTime: 0.3,
  animationEase: "linear"
};

function useDialogs({
  items,
  openOnHover = true,
  backgroundStyles = ({ isVisible }) => ({ opacity: isVisible ? 1 : 0 }),
  animationTimeout = 0,
  onChange,
  positionedRelativeToTop = false,
  backgroundOverlay = null
}) {
  const layers = items;

  // let buttons = [];
  // let buttonRefs = useRef(layers.map(_ => React.createRef()));

  const [mounted, setMounted] = useState(false);

  let initState = {};
  layers.forEach((layer, index) => {
    initState[(layer.key || index).toString()] = {
      active: false,
      visible: false,
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

  const hideTimers = useRef({});

  const isAtInitState = !Object.values(state).reduce(
    (acc, val) => acc || val.visible,
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

  const cachedNodes = useRef(null);

  if (mounted && !cachedNodes.current) {
    const menuBar = Object.values(state)[0].buttonRef.current.closest(
      ".__menubar__"
    );

    cachedNodes.current = {
      content: menuBar.querySelector(".__menubarcontent__"),
      portal: menuBar.querySelector(
        positionedRelativeToTop ? ".__menulayerstop__" : ".__menulayers__"
      ), // TODO: could be done better
      shade: menuBar.querySelector(".__menubarshade__")
    };
  }

  const getPosition = key => {
    if (key === null) {
      return;
    }

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

  // 0 -> at init state
  // 1 -> invisible
  // 2 -> visible

  const applyBackgroundStyles = ({
    isVisible,
    width,
    height,
    noTransition = false
  }) => {
    const bs = backgroundStyles({ isVisible });

    // Defaults
    backgroundRef.current.style.width = "100%";
    backgroundRef.current.style.height = "100%";
    backgroundRef.current.style.transition =
      "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

    for (let x in bs) {
      backgroundRef.current.style[x] = bs[x];
    }

    if (width) {
      backgroundRef.current.style.width = width;
    }
    if (height) {
      backgroundRef.current.style.height = height;
    }

    if (noTransition) {
      backgroundRef.current.style.transition = "none";
    }
  };

  const switchLayer = key => {
    if (key === activeKey) {
      return;
    }

    if (isAtInitState) {
      // if coming from empty, we set init state for animation

      // applyBackgroundStyles({
      //   isVisible: false,
      //   noTransition: true
      // });

      // backgroundRef.current.style.width = "100%";
      // backgroundRef.current.style.height = "100%";
      //
      // const bs = backgroundStyles({ isVisible: true });
      // for (let x in bs) {
      //     backgroundRef.current.style[x] = bs[x];
      // }
      //
      // backgroundRef.current.style.transition = "none";

      const pos = getPosition(key);

      // containerRef.current.style.left = `${pos.left}px`;
      // containerRef.current.style.right = `${pos.right}px`;
      // containerRef.current.style.top = `${pos.top}px`;
      // containerRef.current.style.transition = "none";
    } else {
      // const backgroundRect = backgroundRef.current.getBoundingClientRect();
      // applyBackgroundStyles({
      //             //     transition: "none",
      //             //     isVisible: true,
      //             //     width: backgroundRect.width + "px",
      //             //     height: backgroundRect.height + "px"
      //             // });
      // backgroundRef.current.style.width = backgroundRect.width + "px";
      // backgroundRef.current.style.height = backgroundRect.height + "px";
      // backgroundRef.current.style.transition = "none";
    }

    /**
     * relative means that this menu TAKES SPACE (position: relative)
     */

    setState(prevState => {
      let newState = {
        ...prevState
      };

      for (let k in newState) {
        if (k === key) {
          clearTimeout(hideTimers.current[k]);

          newState[k].active = true;
          newState[k].visible = true; // visible might be not active (when hiding animation in progress).
        } else {
          if (k === activeKey && activeKey !== null) {
            // timeout for previous key

            hideTimers.current[activeKey] = setTimeout(() => {
              let count = 0;
              for (let k in state) {
                if (state[k].visible) {
                  count++;
                }
              }

              setState(currentState => {
                const newState = {
                  ...currentState,
                  [activeKey]: {
                    ...currentState[activeKey],
                    visible: false
                  }
                };

                return newState;
              });
            }, animationTimeout);
          }

          newState[k].active = false;
        }
      }

      return newState;
    });

    setSwitchingState(true);

    if (onChange) {
      onChange({
        oldKey: activeKey,
        newKey: key
      });
    }
  };

  useLayoutEffect(
    () => {
      if (!isSwitchingState) {
        return;
      }

      let _ = window.getComputedStyle(backgroundRef.current).height; // force recalculate styles

      if (isAnyActive) {
        // backgroundRef.current.style.width = "100%";
        // backgroundRef.current.style.height = "100%";
        // backgroundRef.current.style.opacity = 1;
        // backgroundRef.current.style.transition =
        //     "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

        const containerRect = containerRef.current.getBoundingClientRect();

        // applyBackgroundStyles({
        //   isVisible: true,
        //   width: containerRect.width + "px", //"100%",
        //   height: containerRect.height + "px" //"100%"
        // });

        const pos = getPosition(activeKey);

        // containerRef.current.style.left = `${pos.left}px`;
        // containerRef.current.style.right = `${pos.right}px`;
        // containerRef.current.style.top = `${pos.top}px`;
        //
        // // containerRef.current.style.left = `${50 * index}px`;
        // containerRef.current.style.transition =
        //   "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

        if (backgroundOverlay) {
          const config = Object.assign(
            defaultBackgroundOverlay,
            backgroundOverlay
          );
          cachedNodes.current.shade.style.transition = `opacity ${
            config.animationTime
          }s ${config.animationEase}`;
          cachedNodes.current.shade.style.backgroundColor = "black";
          cachedNodes.current.shade.style.opacity = config.opacity;
        }
      } else {
        // backgroundRef.current.style.width = "100%";
        // backgroundRef.current.style.height = 0;
        // backgroundRef.current.style.opacity = 0;
        // backgroundRef.current.style.transition =
        //     "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

        // backgroundRef.current.style.width = "100%";
        // backgroundRef.current.style.height = "100%";
        // backgroundRef.current.style.transition = "all 2s linear";// cubic-bezier(0.19, 1, 0.22, 1)";

        // applyBackgroundStyles({
        //   isVisible: false
        // });

        cachedNodes.current.shade.style.opacity = 0;

        // const bs = backgroundStyles({ isVisible: false });
        // for (let x in bs) {
        //     backgroundRef.current.style[x] = bs[x];
        // }
        //
        //

        // timer.current = setTimeout(() => {
        //   // all relative flags must go down to false (which means that isAtInitState will light up).
        //
        //   let newState = {
        //     ...state
        //   };
        //
        //   for (let k in newState) {
        //     newState[k].relative = false;
        //   }
        //
        //   setState(newState);
        // }, 350);
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

  const hoverTimer = useRef(null);

  const onHover = (key, timeout = 100) => {
    clearTimeout(hoverTimer.current);

    if (timeout <= 0) {
      switchLayer(key);
    } else {
      hoverTimer.current = setTimeout(() => {
        switchLayer(key);
      }, timeout);
    }
  };

  // on menu hover!!!

  useEffect(
    () => {
      if (!mounted) {
        return;
      }

      if (!positionedRelativeToTop) {
        return;
      }

      const onMouseOver = () => {
        // onHover(activeKey);
      };

      const onMouseOut = () => {
        // onHover(null);
      };

      cachedNodes.current.content.addEventListener("mouseover", onMouseOver);
      cachedNodes.current.content.addEventListener("mouseout", onMouseOut);

      return () => {
        cachedNodes.current.content.removeEventListener(
          "mouseover",
          onMouseOver
        );
        cachedNodes.current.content.removeEventListener(
          "mouseover",
          onMouseOut
        );
      };
    },
    [mounted, activeKey]
  );

  // on route change!
  useEffect(
    () => {
      const onRouteChange = () => {
        onHover(null, 0);
      };

      if (!window.__cui_onRouteChange) {
        window.__cui_onRouteChange = [];
      }

      window.__cui_onRouteChange.push(onRouteChange);

      return () => {
        window.__cui_onRouteChange = window.__cui_onRouteChange.filter(
          x => x !== onRouteChange
        );
      };
    },
    [activeKey]
  );

  layers.forEach((layer, index) => {
    const key = (layer.key || index).toString();

    const isActive = state[key].active;
    const visible = state[key].visible;

    let button = React.cloneElement(layer.button, {
      onClick: () => {
        if (openOnHover) {
          onHover(key, 0);
        } else {
          onHover(activeKey === key ? null : key, 0);
        }
      },
      onMouseEnter: () => {
        if (!openOnHover) {
          return;
        }

        onHover(key, 100);
      },
      onMouseLeave: () => {
        if (!openOnHover) {
          return;
        }

        onHover(null, 100);
      },
      _ref: state[key].buttonRef,
      selected: isActive,
      key: "button-" + key
    });

    if (mounted) {
      const content =
        typeof layer.content === "function"
          ? layer.content({ isVisible: isActive && !isSwitchingState })
          : layer.content;

      const pos = getPosition(key) || {};

      contents.push(
        <div
          style={{
            position: "absolute",
            // isActive || (activeKey === null && visible)
            //   ? "relative"
            //   : "absolute",
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: pos.width,
            // left: 0,
            zIndex: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
            opacity: visible ? 1 : 0
            // left: position.left,
            // right: position.right,
            // top: offsetY,
            // width: "max-content"
            // width: "max-content",
            // width: "100%"
            // width
          }}
          onMouseEnter={() => {
            if (!openOnHover) {
              return;
            }
            onHover(key);
          }}
          onMouseLeave={() => {
            if (!openOnHover) {
              return;
            }
            onHover(null);
          }}
          key={"portal-" + key}
        >
          {content}
        </div>
      );
    }

    buttons.push(button);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const portal =
    mounted &&
    ReactDOM.createPortal(
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: isAnyActive ? "auto" : "none",
          width: "100%"
        }}
        key={"portal"}
        ref={containerRef}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "0 0",
            zIndex: -1,
            width: "100%"
            // bg: "white",
            // boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)"
          }}
          ref={backgroundRef}
        />

        {contents}
      </div>,
      cachedNodes.current.portal
    );

  buttons[0] = React.cloneElement(buttons[0], { __portals__: portal });

  return {
    buttons,
    hide: () => {
      switchLayer(null);
    },
    isOpen: isAnyActive
  };
}

function Dialog(props) {
  let {
    button,
    children,
    openOnHover,
    backgroundStyles,
    animationTimeout,
    hideOnLinkClick,
    positionedRelativeToTop,
    onChange
  } = props;

  const { buttons, layers } = useDialogs({
    items: [
      {
        button,
        content: children,
        ...props
      }
    ],
    openOnHover,
    backgroundStyles,
    animationTimeout,
    positionedRelativeToTop,
    onChange
  });

  return buttons[0];
}

MenuLayout.Dialog = Dialog;
MenuLayout.useDialogs = useDialogs;
