/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import ButtonRaw from ".";

export const standard = () => <ButtonRaw>Raw button</ButtonRaw>;
export const withCSS = () => (
  <ButtonRaw
    css={{
      p: 4,
      bg: "lightgrey",
      color: "navy"
    }}
  >
    Raw button
  </ButtonRaw>
);

export default {
  title: "ButtonRaw"
};
