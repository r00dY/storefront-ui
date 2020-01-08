import { ButtonSimple$ } from "@commerce-ui/core/Button2";
import Spinner from "../Spinner";

const Button = props => (
  <ButtonSimple$
    {...props}
    sx={{
      minHeight: "50px",

      ...props.sx,

      // minWidth: "500px",
      $foreground: ({ disabled }) => ({
        pl: 3,
        pr: 3,
        pt: 2,
        pb: 2,
        color: disabled ? "mono500" : "black",
        font: "body2",
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
      }
    }}
  />
);

export default Button;
