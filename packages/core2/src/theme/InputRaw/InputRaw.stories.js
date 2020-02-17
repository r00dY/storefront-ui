/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import InputRaw$ from "@commerce-ui/core/InputRaw";

export const unstyled = () => <InputRaw$ type={"text"} />;
export const withCSS = () => (
  <InputRaw$
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy",
      textAlign: "center"
    }}
  />
);

export const disabled = () => (
  <InputRaw$
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy"
    }}
    disabled
  />
);

export default {
  title: "InputRaw"
};
