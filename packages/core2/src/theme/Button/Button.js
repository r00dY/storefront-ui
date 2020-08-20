import ButtonText$ from "@commerce-ui/core/ButtonText";
import { createComponent } from "@commerce-ui/core";
import Spinner from "@commerce-ui/core/Spinner";
import React from "react";

const styles = {
  standard: {
    $css: {
      minHeight: "50px"
    },

    $body: {
      pl: "16px",
      pr: "16px",
      pt: "10px",
      pb: "10px",
      font: "body2"
    },

    $iconSize: 24
  },
  large: {
    $css: {
      minHeight: "60px"
    },
    $body: {
      pl: 4,
      pr: 4,
      pt: 2,
      pb: 2,
      font: "body"
    },
    $iconSize: 32
  }
};

export default createComponent(
  ButtonText$,
  ({ $size = "standard" }) => ({ disabled, isHovered, selected }) => ({
    ...styles[$size].$css,
    $body: {
      ...styles[$size].$body,
      color: disabled ? "mono500" : "black",
      textAlign: "center",
      textDecoration: selected ? "underline" : "none"
    },
    $background: {
      bg: disabled ? "mono300" : "mono200",
      opacity: isHovered ? 0.75 : 1,
      transition: "opacity .1s",
      borderRadius: 6
    },
    $gap: 2,
    $leftIcon: {
      width: styles[$size].$iconSize,
      height: styles[$size].$iconSize
    },
    $rightIcon: {
      width: styles[$size].$iconSize,
      height: styles[$size].$iconSize
    },

    $loader: {
      __children: <Spinner />
    }
  })
);
