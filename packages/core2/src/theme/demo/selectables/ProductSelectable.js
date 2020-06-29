import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";
import Image from "@commerce-ui/core/Image2";
import Price from "../Price";

function Pill({ product, ...props }) {
  return (
    <Selectable {...props}>
      {({ disabled, highlighted, selected, label, invalid }) => (
        <Box
          sx={{
            position: "relative",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: disabled
              ? "neutral"
              : invalid && selected
              ? "negative"
              : highlighted || selected
              ? "main"
              : "neutral",
            font: "body2",
            color: disabled ? "neutral700" : "main",
            bg: disabled ? "neutral100" : "white",
            p: "s6",
            textAlign: "center"
          }}
        >
          {product && (
            <>
              <Box
                sx={{
                  opacity: disabled ? 0.5 : 1
                }}
              >
                <Image src={product.images[0]} />
              </Box>
              <br />
              <br />
              <Box
                sx={{
                  textAlign: "center",
                  font: "body",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical"
                }}
              >
                {product.title}
              </Box>
              <br />
              <Price product={product} />
            </>
          )}
        </Box>
      )}
    </Selectable>
  );
}

export default Pill;
