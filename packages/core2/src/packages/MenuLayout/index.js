import React, { useEffect, useState, useRef, useContext } from "react";
import Box from "../Box";
import ReactDOM from "react-dom";

const MenuLayoutContext = React.createContext({});

const MenuBar = props => <Box {...props} />;

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
  let { offset = 0 } = props;

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

  fixedBars.push(<MenuBar id={"__sticky__"} open={stickyOpen} />);

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
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100
          }}
        >
          <MenuBarsContainer bars={fixedBars} />
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

const MenuBarsContainer = ({ bars, isPreviousOpen = true }) => {
  if (!bars || bars.length === 0) {
    return <Box id={"__menubottom__"} />;
  }

  const bar = bars[0];
  const open = isBarOpen(bar);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          transform: !open ? "translateY(-100%)" : "none",
          transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"
        }}
      >
        {bar}
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            width: "100%",
            zIndex: -1
          }}
        >
          <MenuBarsContainer bars={bars.slice(1)} />
        </Box>
      </Box>
    </Box>
  );

  /**
   * Below prototype is responsible for being able to hide 2 bars at the same time without harmonica effect.
   *
   * This has couple of problems:
   * 1. Sometimes it's not animated (because of jumping from absolute to relative animation doest fire
   * 2. If C is animating under B and then suddenly B becomes hidden too how do we do it without jank?
   * 3. Also what happens during resizing of bars?
   *
   *
   */
  // const open = isBarOpen(bar);
  // const nextBarOpen = bars.length > 1 && isBarOpen(bars[1]);
  //
  // return <Box sx={{position: "relative"}}>
  //     <Box sx={{transform: !open && isPreviousOpen ? "translateY(-100%)" : "none", transition: "transform .35s cubic-bezier(0.19, 1, 0.22, 1)"}}>
  //         { bar }
  //         <Box sx={{
  //             position: !open && !nextBarOpen ? "relative" : "absolute",
  //             top: !open && !nextBarOpen ? 0 : "100%",
  //             width: "100%",
  //             zIndex: -1}}>
  //             <MenuBarsContainer bars={bars.slice(1)} isPreviousOpen={open} />
  //         </Box>
  //     </Box>
  // </Box>
};
