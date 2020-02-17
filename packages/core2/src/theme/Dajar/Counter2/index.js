import React from "react";
import { useCounter } from "@commerce-ui/core/Counter";
import Box from "@commerce-ui/core/Box";
import SelectNativeMinimal from "../SelectNative/SelectNativeMinimal";
import ButtonIcon from "../Button/ButtonIcon";

import IconAdd from "../../svg/add.svg";
import IconRemove from "../../svg/remove.svg";

import InputRaw$ from "@commerce-ui/core/InputRaw";

function Counter2(props) {
  return (
    <Box
      sx={{
        display: "block",
        ...props.sx
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center"
        }}
      >
        <Box sx={{ font: "body", lineHeight: 1, color: "black" }}>
          Quantity: &nbsp;
        </Box>

        {props.exceedsSelectRange && (
          <InputRaw$
            {...props.inputProps}
            sx={{
              width: "50px",
              textAlign: "left",
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
              $hideArrow: true,
              $alignLeft: true
            }}
          />
        )}

        <ButtonIcon {...props.buttonDecrementProps}>
          <IconRemove />
        </ButtonIcon>
        <ButtonIcon {...props.buttonIncrementProps}>
          <IconAdd />
        </ButtonIcon>
      </Box>
    </Box>
  );
}

export default Counter2;
