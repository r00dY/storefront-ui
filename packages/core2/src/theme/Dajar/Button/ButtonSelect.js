import { ButtonText$ } from "@commerce-ui/core/Button";
import Spinner from "../../Spinner";
import { jsx, splitSx } from "@commerce-ui/core";
import IconArrowDown from "../../svg/keyboard_arrow_down.svg";

const ButtonSelect = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <ButtonText$
      {...props}
      sx={{
        minHeight: "50px",
        minWidth: "200px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "mono300",
        ":hover": {
          borderColor: "black"
        },
        transition: "all .1s",

        ...css,

        // minWidth: "500px",
        $foreground: ({ disabled }) => ({
          pl: 3,
          pr: 2,
          pt: 2,
          pb: 2,
          font: "body",
          color: disabled ? "mono500" : "black",
          justifyContent: "space-between",
          lineHeight: 1
        }),
        $background: ({ isHovered, disabled }) => ({
          bg: disabled ? "mono100" : "white",
          opacity: isHovered ? 0.75 : 1,
          transition: "opacity .1s"
        }),
        $loader: {
          __children: <Spinner />
        },
        $startEnhancerContainer: {
          mr: 2
        },
        $endEnhancerContainer: {
          display: "flex",
          flexAlign: "center",
          alignItems: "center",
          color: "black"
        }
      }}
      endEnhancer={<IconArrowDown />}
    />
  );
};

export default ButtonSelect;
