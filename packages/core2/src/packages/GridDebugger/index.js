import React, { useEffect, useState } from "react";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";

function GridDebugger(props) {
  const [cols, setCols] = useState(null);

  const onKeyPress = event => {
    if (event.keyCode === 71 && event.ctrlKey) {
      if (cols) {
        setCols(null);
      } else {
        const cols = parseInt(window.prompt("How many columns?", "12"));
        setCols(cols);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onKeyPress, false);
    };
  });

  if (!cols) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: "10000",
        overflow: "hidden",
        pointerEvents: "none"
      }}
    >
      <Container>
        <Grid cols={cols}>
          {[...Array(cols)].map((e, i) => (
            <Box
              sx={{
                position: "relative",
                height: "100vh",
                bg: "coral",
                opacity: 0.3
              }}
              key={i}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default GridDebugger;
