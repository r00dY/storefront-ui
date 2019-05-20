import React, { useState } from "react";
import { StatefulTextarea as Textarea } from "storefront-ui/Textarea";
import { useTheme, ThemeProvider } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  let [value, setValue] = useState("");
  let [value2, setValue2] = useState(
    "This is beautifulest design system ever!"
  );

  return (
    <div>
      <p>Standard</p>
      <Textarea onChange={e => setValue(e.target.value)} placeholder={"Notes"}>
        {value}
      </Textarea>
      <br />
      <Textarea
        initialState={{ value: value2 }}
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
      />
      <p>Error</p>
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        initialState={{ value: value2 }}
        error={true}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
        error={true}
      />
      <p>Disabled</p>
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        initialState={{ value: value2 }}
        disabled={true}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
        disabled={true}
      />
      <ThemeProvider
        theme={{
          Textarea: {
            default: {
              overrides: {
                Input: {
                  style: `
                                border-color: green;
                                border-width: 2px;
                            `
                }
              }
            },

            thick: ({ disabled = true }) => ({
              overrides: {
                Input: {
                  style: `
                                border-color: black;
                                border-width: 5px;
                            `
                }
              },
              disabled: disabled
            })
          }
        }}
      >
        <p>Themed default</p>
        <Textarea placeholder={"Search"} />

        <p>Themed custom (disabled by default)</p>
        <Textarea placeholder={"Search"} appearance={"thick"} />
      </ThemeProvider>
    </div>
  );
};
