import React, { useEffect, useState, useRef } from "react";
import Box from "../Box";
import ReactDOM from "react-dom";

const MenuLayoutContext = React.createContext({});

const MenuBar = props => <Box {...props} />;

function MenuBarSticky(props) {
  const [height, setHeight] = useState("auto");
  const [sticky, setSticky] = useState(false);

  const ref = useRef(null);

  const container = document.getElementById("__sticky__");

  useEffect(
    () => {
      let onScrollListener = () => {
        const rect = ref.current.getBoundingClientRect();
        const thresholdPassed =
          rect.top <
          document.getElementById("__sticky__").getBoundingClientRect().top; //container.getBoundingClientRect().top;

        if (thresholdPassed && !sticky) {
          // if just got sticky
          setHeight(rect.height);
        } else if (!thresholdPassed && sticky) {
          requestAnimationFrame(() => {
            setHeight("auto");
          });
        }

        setSticky(thresholdPassed);
      };

      window.addEventListener("scroll", onScrollListener, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScrollListener);
      };

      // tell context "I'm here" and pass ref
      // tell context "I'm out" when component dies.

      // MenuBarSticky should know when to "stick"! It should be notified by context.

      // context.registerSticky(ref, (sticky) => { // stickyness changed! })
    },
    [sticky]
  );

  const showInPortal = sticky && container;

  return (
    <Box _ref={ref} sx={{ height }}>
      {showInPortal && ReactDOM.createPortal(props.children, container)}
      {!showInPortal && props.children}
    </Box>
  );
}

function MenuLayout(props) {
  let { offset = 0 } = props;

  let children = [];
  let fixedBars = [];

  React.Children.forEach(props.children, child => {
    if (child.type === MenuBar) {
      fixedBars.push(child);
    } else {
      children.push(child);
    }
  });

  fixedBars.push(<MenuBar id={"__sticky__"} />);

  const [stickyBars, setStickyBars] = useState([]);

  return (
    <MenuLayoutContext.Provider
      value={{
        registerSticky: (ref, callback) => {},
        unregisterSticky: () => {}
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          id={"dupa8"}
          className={"dupa8"}
          sx={{
            position: "fixed",
            top: 150,
            left: 0,
            width: "100%",
            zIndex: 200
          }}
        />
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
    return null;
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
