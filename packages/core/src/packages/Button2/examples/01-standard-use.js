import React from "react";
import { ButtonRaw } from "@commerce-ui/core/Button2";
import { Box } from "@commerce-ui/core/Box";

export default () => {
  return (
    <div>
      <p>Standard button</p>
      <ButtonRaw>Raw button content</ButtonRaw>

      <p>Standard button, color overriden</p>
      <ButtonRaw
        sx={{
          color: "red"
        }}
      >
        Raw button with red color text
      </ButtonRaw>

      <p>Standard button, disabled</p>
      <ButtonRaw
        sx={{
          color: "red"
        }}
        disabled={true}
      >
        Raw button with red color text and disabled
      </ButtonRaw>

      <p>Standard button, onClick</p>
      <ButtonRaw
        sx={{
          color: "red"
        }}
        onClick={e => {
          console.log("clicked!");
        }}
      >
        Raw button with red color text
      </ButtonRaw>

      <p>Standard button, color overriden with value from a theme</p>
      <ButtonRaw
        sx={{
          color: "primary",
          background: "mono500",
          p: 10
        }}
      >
        Raw button with colors from a theme
      </ButtonRaw>
    </div>
  );
};
