/** @jsx jsx */
import SelectNative$ from "@commerce-ui/core/SelectNative2";
import { jsx, splitSx } from "@commerce-ui/core";

import IconArrowDown from "../../svg/keyboard_arrow_down.svg";

const SelectNative = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <SelectNative$
      {...props}
      sx={{
        ...css,
        $root: ({ focused, disabled, invalid }) => ({
          height: "50px",
          border: "1px solid",
          borderColor: invalid ? "red" : "mono300",
          bg: disabled ? "lightgrey" : "transparent",
          minWidth: "200px",
          cursor: "pointer",
          ":hover": {
            borderColor: invalid ? "red" : "black"
          }
        }),
        $input: ({ empty }) => ({
          pl: "10px",
          font: "body",
          color: "black",
          lineHeight: 1,
          transition: "padding .2s ease-out",
          pr: "36px"
        }),
        $leftEnhancersContainer: {
          $gutter: "8px",
          pl: "16px",
          font: "body"
        },
        $rightEnhancersContainer: {
          $gutter: "8px",
          pr: "16px",
          font: "body"
        },
        $arrow: {
          pr: "10px",
          color: "black",
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          __children: <IconArrowDown />
        },
        $labelInside: false
      }}
    />
  );
};

export default SelectNative;
