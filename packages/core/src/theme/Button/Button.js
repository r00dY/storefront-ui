import ButtonText$ from "@commerce-ui/core/ButtonText";
import { jsx, splitSx } from "@commerce-ui/core";

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
    }
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
    }
  }
};

const Button = props => {
  const $size = (props.sx && props.sx.$size) || "standard";

  return (
    <ButtonText$
      {...props}
      sx={{
        ...styles[$size].$css,

        height: "50px",

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
        $layout: "lcr",
        $leftIcon: {
          width: 32,
          height: 32
        },
        $rightIcon: {
          width: 32,
          height: 32
        },

        ...props.sx
      }}
    />
  );
};

export default Button;
