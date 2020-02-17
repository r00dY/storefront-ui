/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import LinkRaw from ".";

export const unstyled = () => (
  <LinkRaw href={"http://wikipedia.org"} target={"_blank"}>
    Unstyled raw link
  </LinkRaw>
);
export const withCSS = () => (
  <div>
    <h1>With CSS</h1>
    <LinkRaw
      sx={{
        display: "block",
        p: 4,
        bg: "lightgrey",
        color: "red",
        ":hover": {
          color: "blue"
        }
      }}
      href={"http://wikipedia.org"}
      target={"_blank"}
    >
      Raw link
    </LinkRaw>
  </div>
);

export default {
  title: "LinkRaw"
};
