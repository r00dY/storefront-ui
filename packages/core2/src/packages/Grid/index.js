import React from "react";
import Box, { styledBox } from "../Box";
import { useTheme } from "../Theme";
import { responsiveValueMap, responsiveValueTransformScales } from "../index";

function getGridCSS(props, theme) {
  let { cols = 12, gap = "gridGap", rowGap, minItemWidth } = props;

  if (typeof rowGap === "undefined" || rowGap === null) {
    rowGap = gap;
  }

  let gridTemplateColumns = responsiveValueMap(
    cols,
    x => (typeof x === "number" ? `repeat(${x}, 1fr)` : x),
    theme
  );

  if (minItemWidth) {
    gridTemplateColumns = responsiveValueMap(
      minItemWidth,
      x =>
        `repeat(auto-fill, minmax(${
          typeof x === "number" ? `${x}px` : x
        }, 1fr))`,
      theme
    );
  }

  return {
    display: "grid",
    gridColumnGap: gap,
    gridRowGap: rowGap,
    gridTemplateColumns
  };
}

function styledGrid(props) {
  return styledBox(theme => {
    return getGridCSS(props, theme);
  });
}

const GridBox = styledBox({
  display: "grid",
  gridColumnGap: p => p.gridColumnGap,
  gridRowGap: p => p.gridRowGap,
  gridTemplateColumns: p => p.gridTemplateColumns
});

const Grid = function(props) {
  const theme = useTheme();
  const gridProps = getGridCSS(props, theme);

  return <GridBox {...props} {...gridProps} />;
};

Grid.styled = styledGrid;

export default Grid;

//
// export default props => {
//   let {
//     sx = {},
//     cols = 12,
//     gap = "gridGap",
//     rowGap,
//     minItemWidth,
//     ...restProps
//   } = props;
//
//   if (typeof rowGap === "undefined" || rowGap === null) {
//     rowGap = gap;
//   }
//
//   let gridTemplateColumns = responsiveValueMap(cols, x =>
//     typeof x === "number" ? `repeat(${x}, 1fr)` : x
//   );
//
//   if (minItemWidth) {
//     gridTemplateColumns = responsiveValueMap(
//       minItemWidth,
//       x =>
//         `repeat(auto-fill, minmax(${
//           typeof x === "number" ? `${x}px` : x
//         }, 1fr))`
//     );
//   }
//
//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridColumnGap: gap,
//         gridRowGap: rowGap,
//         gridTemplateColumns,
//         ...sx
//       }}
//       {...restProps}
//     />
//   );
// };
