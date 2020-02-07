import ButtonBase$ from "@commerce-ui/core/ButtonBase";

const Button2 = props => (
  <ButtonBase$
    {...props}
    sx={{
      position: "relative",
      font: "body2",
      color: "black",
      overflow: "hidden",
      borderRadius: "6px",
      p: 2,
      ":before": {
        content: "''",
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "lightgrey",
        transition: "opacity .3s linear"
      },
      ":hover:before": {
        opacity: 0.5
      },

      ...props.sx
    }}
  />
);

export default Button2;
