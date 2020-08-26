import React from "react";
import Box from "@commerce-ui/core/Box";

const ThemedBox = Box.styled({
  font: "heading",
  p: "s10",
  bg: "main",
  color: "active"
});

export const story = () => (
  <div>
    <ThemedBox>Lorem ipsum</ThemedBox>
  </div>
);

export default {
  title: "approved.Theme"
};
