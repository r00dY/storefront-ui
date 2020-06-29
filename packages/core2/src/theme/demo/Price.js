import Box from "@commerce-ui/core/Box";
import React from "react";

const Price = ({ product, isBig = false }) => {
  return (
    <Box sx={{ font: isBig ? "heading" : "body" }}>
      <Box sx={{ color: "neutral900" }} as={"span"}>
        {product.price}
      </Box>
      &nbsp;
      {product.price !== product.compareAtPrice && (
        <Box
          as={"span"}
          sx={{ color: "error", textDecoration: "line-through" }}
        >
          {product.compareAtPrice}
        </Box>
      )}
    </Box>
  );
};

export default Price;
