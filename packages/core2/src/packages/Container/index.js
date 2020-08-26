import React from "react";
import Box, { styledBox } from "../Box";
// import { useTheme } from "../Theme";
// import { responsiveValueTransformScales } from "../index";

function styledContainer({ margin = 0 }) {
  return styledBox({
    position: "relative",
    pl: margin,
    pr: margin
  });
}

// Dynamic <Container />
const Container = styledContainer({ margin: "containerMargin" });
const ContainerDynamic = styledContainer({ margin: p => p.margin });

Container.styled = styledContainer;

export default Container;
export { ContainerDynamic };

//
// const Container = ({ margin = "containerMargin" })
//
//
// const Container = ({ sx = {}, margin = "containerMargin", ...restProps }) => {
//   const theme = useTheme();
//
//   // margin =
//   //   responsiveValueTransformScales(
//   //     margin,
//   //     theme,
//   //     "containerMargins",
//   //     "space"
//   //   ) || "10vw";
//
//   return (
//     <Box
//       sx={{
//         ...sx,
//         position: "relative",
//         pl: margin,
//         pr: margin
//       }}
//       {...restProps}
//     />
//   );
// };
