import ButtonText$ from "@commerce-ui/core/ButtonText";
import { createComponent } from "@commerce-ui/core";
import Spinner from "../Spinner";

export default createComponent(ButtonText$, {
  $body: ({ isHovered, disabled }) => ({
    color: disabled ? "mono500" : "black",
    font: "body2",
    textAlign: "center",
    opacity: isHovered ? 0.75 : 1
  }),

  $loader: {
    __children: <Spinner />
  }
});
