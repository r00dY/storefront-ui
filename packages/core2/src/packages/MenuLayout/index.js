import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useContext
} from "react";
import Box from "../Box";
import ReactDOM from "react-dom";

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
    if (child.type === MenuBar) {
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
        />
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

function Layer(props) {
  const {
    open = false,
    posX = "left",
    posY,
    offsetX = 0,
    offsetY = 0,
    anchoredTo = "window",
    animationTime = 1000
  } = props;

  const [mounted, setMounted] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const [layerRect, setLayerRect] = useState(null);
  const [isDisplayed, setDisplayed] = useState(false);

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
        window.getComputedStyle(ref.current).opacity;
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

  return ReactDOM.createPortal(
    <Box
      sx={
        position.center
          ? { position: "relative" }
          : {
              position: "absolute",
              left: position.left,
              right: position.right,
              top: offsetY
            }
      }
      _ref={ref}
    >
      {children}
    </Box>,
    document.querySelector(".__menulayers__")
  );
}

MenuLayout.Layer = Layer;
