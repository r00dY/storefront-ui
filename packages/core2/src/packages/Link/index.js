import React from "react";

import Button from "../Button";

// function Link(props) {
//   return <Button {...props} forceLink={true} __minimalLinkStyling={true} />
// }

// const resetStyles = {
//   color: "inherit",
//   textDecoration: "none",
//   boxSizing: "border-box"
// };
//
// function Link(props) {
//   let { children, sx, ...restProps } = props;
//
//   const ref = props._ref || React.createRef();
//   const hovered = useHover(ref);
//
//   const state = { hovered };
//
//   sx = typeof sx === "function" ? sx(state) : sx;
//   children = typeof children === "function" ? children(state) : children;
//
//   return (
//     <Box {...props} as={"a"} sx={{ ...resetStyles, ...sx }} _ref={ref}>
//       {children}
//     </Box>
//   );
// }

export default React.forwardRef((props, ref) => (
  <Button {...props} forceLink={true} __minimalLinkStyling={true} ref={ref} />
));
