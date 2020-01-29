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
        $root: ({ focused, disabled, invalid }) => ({}),
        $input: ({ empty, disabled }) => ({
          cursor: "pointer",
          font: "body",
          color: disabled ? "mono500" : "black",
          lineHeight: 1,
          pr: customSx.$hideArrow ? 0 : "36px",
          textAlignLast: customSx.$alignLeft ? "left" : "center"
        }),
        $arrow: ({ disabled }) => ({
          color: disabled ? "mono500" : "black",
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          __children: customSx.$hideArrow ? <span /> : <IconArrowDown />
        }),
        $labelInside: false
      }}
    />
  );
};

export default SelectNative;
