import React from "react";
import { useCounter } from "@commerce-ui/core/Counter";
import Box from "@commerce-ui/core/Box";
import SelectNativeMinimal from "../SelectNative/SelectNativeMinimal";
import ButtonIcon from "../Button/ButtonIcon";

import IconAdd from "../../svg/add.svg";
import IconRemove from "../../svg/remove.svg";

import InputRaw$ from "@commerce-ui/core/InputRaw";

function Counter(props) {
  return (
    <Box
      sx={{
        display: "inline-block",
        ...props.sx
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "mono300",
          height: "100%"
        }}
      >
        <ButtonIcon {...props.buttonDecrementProps}>
          <IconRemove />
        </ButtonIcon>
        {props.exceedsSelectRange && (
          <InputRaw$
            {...props.inputProps}
            sx={{
              width: "50px",
              textAlign: "center",
              color: "black",
              font: "body",
              lineHeight: 1
            }}
          />
        )}
        {!props.exceedsSelectRange && (
          <SelectNativeMinimal
            {...props.selectProps}
            sx={{
              width: "50px",
              $hideArrow: true
            }}
          />
        )}
        <ButtonIcon {...props.buttonIncrementProps}>
          <IconAdd />
        </ButtonIcon>
      </Box>
    </Box>
  );
}

export default Counter;
