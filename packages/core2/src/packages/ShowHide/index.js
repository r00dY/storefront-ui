import React, { useEffect, useRef, useState } from "react";
import Box from "../Box";

const ShowHide = props => {
  const { isOpen, animated = true, ...restProps } = props;

  const containerRef = useRef(null);
  let [height, setHeight] = useState(isOpen === true ? null : 0);

  useEffect(
    () => {
      if (!animated) {
        return;
      }

      if (isOpen && height === 0) {
        setHeight(containerRef.current.clientHeight);

        setTimeout(() => {
          setHeight(null);
        }, 300);
      } else if (!props.isOpen && (height === null || height > 0)) {
        setHeight(containerRef.current.clientHeight);

        setTimeout(() => {
          setHeight(0);
        }, 50);
      }
    },
    [isOpen]
  );

  if (!animated) {
    height = isOpen ? null : 0;
  }

  return (
    <Box {...restProps}>
      <Box
        sx={{
          position: "relative",
          transition: "height 0.35s cubic-bezier(0.19, 1, 0.22, 1)",
          overflow: "hidden",
          height: height === null ? "auto" : `${height}px`,
          width: "100%"
        }}
      >
        <Box
          sx={{
            position: height === null ? "relative" : "absolute",
            width: "100%"
          }}
          ref={containerRef}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default ShowHide;
