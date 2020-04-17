import React from "react";
import Box from "../Box";

function MenuBar(props) {
  return <Box>{props.children}</Box>;
}

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

  console.log("--");
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
      >
        <MenuBarsContainer bars={fixedBars} />
        {/*{fixedBars.map(bar => {*/}

        {/*const open = bar.props.open;*/}

        {/*if (typeof open === 'undefined') {*/}
        {/*return bar;*/}
        {/*}*/}

        {/*if (!open) {*/}
        {/*return null;*/}
        {/*}*/}

        {/*return bar;*/}

        {/*})}*/}
      </Box>
      <Box sx={{ pt: offset, position: "relative", zIndex: 0 }}>{children}</Box>
    </Box>
  );
}

MenuLayout.MenuBar = MenuBar;

export default MenuLayout;
