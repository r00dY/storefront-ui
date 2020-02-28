import React from "react";

import Box from "@commerce-ui/core/Box";

import Icon from "../svg/close.svg";

import Select from "@commerce-ui/core/Select";

import ItemRow from "../Selectables/ItemRow";

import Layer from "@commerce-ui/core/Layer";

import formStyles from "../form-styles";

export default props => (
  <Select
    sx={{
      $layer: (
        <Layer
          anchoredTo={["window", null, "trigger"]}
          sx={{ width: ({ anchorRect }) => ["100vw", null, anchorRect.width] }}
        />
      ),
      // $button: <Button />,
      $selectable: <ItemRow />,
      $wrapper: <Box sx={{ bg: "white" }} />,
      $separator: <Box sx={{ height: 1, bg: "mono200" }} />,
      ...formStyles
    }}
    {...props}
  />
);

// function Select(props) {
//   let { config, width, title = "Title", ...restProps } = props;
//
//   config = config || {
//     xs: {
//       mode: "slide-from-bottom",
//       height: "auto",
//       maxHeight: "80vh"
//     },
//     md: {
//       anchored: true
//     }
//   }; // default config
//
//   return (
//     <Select$
//       config={config}
//       {...restProps}
//       wrapper={({ content, anchored }) => (
//         <Box
//           sx={{
//             position: "relative",
//             width: anchored ? width || "420px" : "auto",
//             maxHeight: anchored ? "500px" : "100%",
//             boxShadow: anchored ? "0 4px 16px hsla(0, 0%, 0%, 0.16);" : "none",
//             bg: "white",
//             display: "flex",
//             flexDirection: "column"
//           }}
//         >
//           {!anchored && (
//             <Box
//               sx={{
//                 paddingLeft: "16px",
//                 paddingRight: "16px",
//                 flex: "0 0 60px",
//                 height: "60px",
//                 position: "relative"
//               }}
//             >
//               <Box
//                 sx={{
//                   height: "100%",
//                   alignItems: "center",
//                   borderBottomWidth: "1px",
//                   borderBottomStyle: "solid",
//                   borderBottomColor: "black",
//                   font: "label",
//                   color: "black",
//                   display: "flex",
//                   justifyContent: "space-between"
//                 }}
//               >
//                 {title}
//                 <Icon />
//               </Box>
//             </Box>
//           )}
//
//           <Box
//             sx={{
//               overflow: "auto",
//               flexGrow: 1,
//               paddingTop: "8px",
//               paddingBottom: "8px"
//             }}
//           >
//             {content}
//           </Box>
//         </Box>
//       )}
//     />
//   );
// }
