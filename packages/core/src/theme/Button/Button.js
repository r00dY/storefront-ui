import { ButtonText$ } from "@commerce-ui/core/Button2";
import Spinner from "../Spinner";
import { splitSx } from "@commerce-ui/core";

const styles = {
  standard: {
    $css: {
      minHeight: "50px"
    },

    $foreground: {
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
    $foreground: {
      pl: 4,
      pr: 4,
      pt: 2,
      pb: 2,
      font: "body"
    }
  }
};

const Button = props => {
  const [css, customSx] = splitSx(props.sx);

  const $size = customSx.$size || "standard";

  return (
    <ButtonText$
      {...props}
      sx={{
        ...styles[$size].$css,
        ...css,

        // minWidth: "500px",
        $foreground: ({ disabled }) => ({
          ...styles[$size].$foreground,
          color: disabled ? "mono500" : "black",
          textAlign: "center"
        }),
        $background: ({ isHovered, disabled }) => ({
          bg: disabled ? "mono300" : "mono200",
          opacity: isHovered ? 0.75 : 1,
          transition: "opacity .1s",
          borderRadius: 6
        }),
        $loader: {
          __children: <Spinner />
        },
        $startEnhancerContainer: {
          mr: 2
        },
        $endEnhancerContainer: {
          ml: 2
        }
      }}
    />
  );
};

export default Button;
