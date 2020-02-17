/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

import Check from "../../../svg/check.svg";

function ColorRowWithPrice(props) {
  const { color, productVariant, ...restProps } = props;

  return (
    <Selectable {...restProps}>
      {({ disabled, highlighted, selected }) => (
        <Box
          sx={{
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 2,
            paddingBottom: 2,
            display: "flex",
            flexDirection: "row",
            bg: highlighted ? "mono100" : "transparent",
            ":hover": {
              bg: "mono100"
            },
            color: "black",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              lineHeight: 1,
              bg: color,
              opacity: disabled ? 0.5 : 1,
              marginRight: 2,
              flex: "0 0 auto"
            }}
          />
          <Box
            sx={{
              font: "label",
              flexGrow: 1,
              pt: "2px"
            }}
          >
            {restProps.label} ·{" "}
            <span sx={{ color: "mono500" }}>
              {productVariant.discountPrice || productVariant.price}$
            </span>{" "}
            {productVariant.discountPrice && (
              <>
                <span sx={{ color: "red", textDecoration: "line-through" }}>
                  {productVariant.price}$
                </span>{" "}
                <span
                  sx={{
                    padding: "4px 6px",
                    color: "white",
                    bg: "red",
                    borderRadius: "3px"
                  }}
                >
                  Sale
                </span>
              </>
            )}
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              lineHeight: 1,
              opacity: disabled ? 0.5 : 1,
              marginRight: 2,
              flex: "0 0 auto"
            }}
          >
            {selected && <Check />}
          </Box>
        </Box>
      )}
    </Selectable>
  );
}

export default ColorRowWithPrice;
