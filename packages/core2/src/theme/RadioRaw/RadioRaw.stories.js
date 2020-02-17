/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import RadioRaw$ from "@commerce-ui/core/RadioRaw";

export const unstyled = () => <RadioRaw$ type={"text"} />;
export const withCSS = () => (
  <RadioRaw$
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy",
      textAlign: "center"
    }}
  />
);

export const disabled = () => (
  <RadioRaw$
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy"
    }}
    disabled
  />
);

export default {
  title: "RadioRaw"
};
