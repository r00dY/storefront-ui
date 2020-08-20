import React from "react";
import Button from "@commerce-ui/core/Button";
import IconArrowDown from "./icons/IconArrowDown";
import Box from "@commerce-ui/core/Box";

function ButtonSelect({ isPlaceholder = false, children, ...props }) {
  return (
    <Button
      {...props}
      sx={({ disabled, invalid, selected }) => ({
        height: "48px",
        border: "1px solid",
        borderColor: invalid ? "negative" : selected ? "main" : "neutral",
        bg: disabled ? "neutral100" : "transparent",
        borderRadius: "4px",
        pl: "s6",
        pr: "s5",
        font: "body2",
        color: isPlaceholder ? "neutral" : "main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      })}
    >
      {children}
      <Box sx={{ pl: "s5" }}>
        <IconArrowDown />
      </Box>
    </Button>
  );
}

export default ButtonSelect;
