import { Button$ } from "@commerce-ui/core/Button2";

const Button = props => (
  <Button$
    {...props}
    sx={{
      height: "44px",
      width: "44px",
      ...props.sx,

      $foreground: ({ isHovered, disabled }) => ({
        color: disabled ? "mono500" : "black",
        font: "body2",
        textAlign: "center",
        opacity: isHovered ? 0.75 : 1
      })
    }}
  />
);

export default Button;
