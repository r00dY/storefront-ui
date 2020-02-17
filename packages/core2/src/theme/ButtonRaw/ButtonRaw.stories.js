/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import ButtonRaw from ".";

export const unstyled = () => <ButtonRaw>Unstyled raw button</ButtonRaw>;
export const withCSS = () => (
  <ButtonRaw
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy"
    }}
  >
    Raw button
  </ButtonRaw>
);

export const disabled = () => (
  <ButtonRaw
    sx={{
      p: 4,
      bg: "lightgrey",
      color: "navy"
    }}
    disabled
  >
    Raw button
  </ButtonRaw>
);

export const actions = () => (
  <ButtonRaw
    onClick={e => {
      alert("clicked!");
    }}
  >
    Click me!
  </ButtonRaw>
);

export default {
  title: "ButtonRaw"
};
