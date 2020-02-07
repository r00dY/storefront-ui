import ButtonIcon$ from "@commerce-ui/core/ButtonIcon";
import { createComponent } from "@commerce-ui/core";

export default createComponent(ButtonIcon$, {
  $body: ({ disabled }) => ({
    p: 2,
    color: disabled ? "mono500" : "black"
  }),
  $background: ({ isHovered, disabled }) => ({
    bg: disabled ? "mono300" : "mono200",
    opacity: isHovered ? 0.75 : 1,
    transition: "opacity .1s",
    borderRadius: 6
  })
});
