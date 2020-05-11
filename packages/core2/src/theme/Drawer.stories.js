import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";
import MenuLayout from "@commerce-ui/core/MenuLayout";
import Button from "./Button/Button";

import Button$ from "@commerce-ui/core/Button";

import Container from "@commerce-ui/core/Container";
import Grid from "@commerce-ui/core/Grid";

const Drawer = ({ children, open }) => {
  const ref = useRef(null);
  const startPos = useRef(null);
  const previousPos = useRef(null);
  const container = useRef(null);

  const cancelled = useRef(false);

  useEffect(() => {
    const touchEventHandler = e => {
      switch (e.type) {
        case "touchmove":
          // console.log('cancelable', e.cancelable);

          if (!e.cancelable) {
            console.log("##########", e);
          }

          const delta = {
            x: e.touches[0].clientX - previousPos.current.x,
            y: e.touches[0].clientY - previousPos.current.y
          };

          previousPos.current = {
            y: e.touches[0].clientY,
            x: e.touches[0].clientX
          };
          console.log(`${delta.x} ${delta.y} ${e.cancelable}`);

          //
          // if (e.cancelable === false || cancelled.current) {
          //     cancelled.current = true;
          //     return;
          // }
          //
          // if (Math.abs(delta) < 50) {
          //     break;
          // }
          //
          // e.preventDefault();
          // e.stopPropagation();
          //
          // container.current.style.transform = `translateY(${delta}px)`;

          break;
        case "touchstart":
          // console.log('start', e);
          startPos.current = {
            y: e.touches[0].clientY,
            x: e.touches[0].clientX
          };
          previousPos.current = startPos.current;
          cancelled.current = false;
          break;

        default:
          startPos.current = null;
          cancelled.current = false;
      }
    };

    ref.current.addEventListener("touchstart", touchEventHandler);
    ref.current.addEventListener("touchmove", touchEventHandler);
    ref.current.addEventListener("touchend", touchEventHandler);
    ref.current.addEventListener("touchcancel", touchEventHandler);
  });

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden"
      }}
      ref={ref}
    >
      <Box
        sx={{
          transform: open ? "none" : "translateY(-100%)"
          // transition: "all .3s ease-out"
        }}
        ref={container}
      >
        {children}
      </Box>
    </Box>
  );
};

export const basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ p: 40 }}>
      <button onClick={() => setOpen(!open)}>toggle</button>
      <br />
      <br />
      <Drawer open={open}>
        <Box
          sx={{
            p: 40,
            bg: "coral",
            width: 400,
            maxHeight: 300,
            overflowY: "hidden"
          }}
        >
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
          Dupa
          <br />
        </Box>
      </Drawer>
    </Box>
  );
};

export default {
  title: "Drawer Test"
};
