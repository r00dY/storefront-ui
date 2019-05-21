import React, { useState } from "react";
import { Checkbox } from "storefront-ui/Checkbox";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ThemeProvider } from "storefront-ui/Theme";

export default () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <p>Standard</p>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        click me
      </Checkbox>

      <ThemeProvider
        theme={{
          Checkbox: {
            default: {
              overrides: {
                Checkmark: {
                  style: ({ $theme }) => `
                                   background-color: ${
                                     $theme.colors.mono800.css
                                   };
                                `
                }
              }
            }
          }
        }}
      >
        <p>Themed default</p>

        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          themed default (background)
        </Checkbox>
      </ThemeProvider>
    </div>
  );
};
