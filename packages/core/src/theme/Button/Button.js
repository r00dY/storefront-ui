import ButtonText$ from "@commerce-ui/core/ButtonText";
import { createComponent } from "@commerce-ui/core";

const styles = {
  standard: {
    $css: {
      minHeight: "50px"
    },

    $body: {
      pl: 3,
      pr: 3,
      pt: 2,
      pb: 2,
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

export default createComponent(ButtonText$, ({ $size = "standard" }) => ({
  ...styles[$size].$css,
  $body: ({ disabled }) => ({
    ...styles[$size].$body,
    color: disabled ? "mono500" : "black",
    textAlign: "center"
  }),
  $background: ({ isHovered, disabled }) => ({
    bg: disabled ? "mono300" : "mono200",
    opacity: isHovered ? 0.75 : 1,
    transition: "opacity .1s",
    borderRadius: 6
  }),
  $gap: 2,
  $leftIcon: {
    width: styles[$size].$iconSize,
    height: styles[$size].$iconSize
  },
  $rightIcon: {
    width: styles[$size].$iconSize,
    height: styles[$size].$iconSize
  }
}));
