import React from "react";
import Box from "../Box";
import { responsiveValueMap } from "../index";

function AspectRatio({ aspectRatio = null, sx, children }) {
  const paddingBottom = responsiveValueMap(aspectRatio, x =>
    x ? `${x * 100}%` : "auto"
  );

  return (
    <Box
      sx={{
        position: "relative",
        pb: paddingBottom
      }}
    />
  );
}

export default AspectRatio;
