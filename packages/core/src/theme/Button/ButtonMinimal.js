import { Button$ } from "@commerce-ui/core/Button2";
import Spinner from "../Spinner";

const Button = props => (
  <Button$
    {...props}
    sx={{
      ...props.sx,

      $foreground: ({ isHovered, disabled }) => ({
        color: disabled ? "mono500" : "black",
        font: "body2",
        textAlign: "center",
        opacity: isHovered ? 0.75 : 1
      }),

      $loader: {
        __children: <Spinner />
      }
    }}
  />
);

export default Button;
