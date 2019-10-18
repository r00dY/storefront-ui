import React, { useState } from "react";

import { RadioGroup2$ } from "@commerce-ui/core/RadioGroup2";
import RadioMark$ from "@commerce-ui/core/RadioGroup2/RadioMark";

import { ThemeProvider } from "@commerce-ui/core/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState("option2");
  const [value3, setValue3] = useState("option3");

  return (
    <div>
      <p>Standard stateless</p>
      <RadioGroup2$
        legend={"Pick an option"}
        name="radio group"
        onChange={x => setValue(x)}
        value={value}
        items={[
          {
            label: "Option 1",
            value: "option1"
          },
          {
            label: "Option 2",
            value: "option2"
          },
          {
            label: "Option 3",
            value: "option3"
          }
        ]}
      />

      <p>Standard stateless, preselected option</p>
      <RadioGroup2$
        legend={"Pick an option"}
        name="radio group 2"
        onChange={x => setValue2(x)}
        value={value2}
        items={[
          {
            label: "Option 1",
            value: "option1"
          },
          {
            label: "Option 2",
            value: "option2"
          },
          {
            label: "Option 3",
            value: "option3"
          }
        ]}
      />

      <p>Standard stateless, with checkmark</p>
      <RadioGroup2$
        legend={"Pick an option"}
        name="radio group 3"
        onChange={x => setValue3(x)}
        value={value3}
        items={[
          {
            label: "Option 1",
            value: "option1"
          },
          {
            label: "Option 2",
            value: "option2"
          },
          {
            label: "Option 3",
            value: "option3"
          }
        ]}
        overrides={{
          RadioMark: RadioMark$
        }}
      />

      <RadioMark$ disabled={true} />
      <RadioMark$ checked={true} />
      <RadioMark$ checked={false} />
    </div>
  );
};
