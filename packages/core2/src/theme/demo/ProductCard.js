import Box from "@commerce-ui/core/Box";
import React from "react";

function ProductCard(props) {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          bg: "neutral400",
          pb: "130%"
        }}
      />
      <Box sx={{ mt: "s5", font: "body" }}>Product name $50</Box>
      <Box sx={{ mt: "s2", font: "body", color: "neutral800" }}>
        Short product description
      </Box>
    </Box>
  );
}

export default ProductCard;
