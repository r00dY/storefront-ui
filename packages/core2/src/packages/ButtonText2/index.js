import React from "react";
import Button from "../Button";
import Box from "../Box";

import { buildComponent } from "../index";

export default props => {
  let {
    leftIcon,
    rightIcon,
    gap,
    iconSize,
    layout,
    body,
    labelContainer,
    loader,
    background,
    children,
    sx,
    ...restProps
  } = props;

  const backgroundElem = buildComponent(
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    />,
    background
  );

  const bodyElem = buildComponent(
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    />,
    body
  );

  const labelElem = buildComponent(
    <Box
      sx={{
        whiteSpace: "nowrap"
      }}
    />,
    labelContainer
  );

  const items = [];

  if (leftIcon) {
    items.push(
      <Box
        sx={{
          mr: gap
        }}
      >
        {React.cloneElement(leftIcon, { size: iconSize })}
      </Box>
    );
  }

  items.push(React.cloneElement(labelElem, {}, children));

  if (rightIcon) {
    items.push(
      <Box
        sx={{
          ml: gap
        }}
      >
        {React.cloneElement(rightIcon, { size: iconSize })}
      </Box>
    );
  }

  return (
    <Button
      {...restProps}
      sx={{
        position: "relative",
        ...sx
      }}
    >
      {backgroundElem}
      {React.cloneElement(bodyElem, undefined, items)}
    </Button>
  );
};
