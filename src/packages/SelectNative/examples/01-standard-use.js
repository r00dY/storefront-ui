import React, { useState } from "react";
import { SelectNative$ } from "storefront-ui/SelectNative";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const stringOptions = ["New York", "Washington", "London", "Warsaw"];

const options = [
  {
    value: "new-york",
    label: "New York"
  },
  {
    value: "washington",
    label: "Washington"
  },
  {
    value: "london",
    label: "London"
  },
  {
    value: "warsaw",
    label: "Warsaw"
  }
];

export default () => {
  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);

  const [select3, setSelect3] = useState(stringOptions[2]);
  const [select4, setSelect4] = useState(options[1]);

  return (
    <div>
      <p>String options</p>

      <SelectNative$
        options={stringOptions}
        onChange={setSelect1}
        value={select1}
      />

      <p>Object options</p>
      <SelectNative$ options={options} onChange={setSelect2} value={select2} />

      <p>String options (preselected value)</p>
      <SelectNative$
        options={stringOptions}
        value={select3}
        onChange={setSelect3}
      />
      <p>Object options (preselected value)</p>
      <SelectNative$ options={options} value={select4} onChange={setSelect4} />

      <p>Disabled</p>
      <SelectNative$
        options={options}
        value={select4}
        onChange={setSelect4}
        disabled
      />

      <p>Error</p>
      <SelectNative$
        options={options}
        value={select4}
        onChange={setSelect4}
        error
      />

      <p>
        By default length of select is length of longest option. We don't fight
        with the platform and here it is shown (display: inline-block parent to
        show natural width)
      </p>

      <div
        css={css`
          display: inline-block;
        `}
      >
        <SelectNative$
          options={stringOptions}
          onChange={setSelect1}
          value={select1}
        />
      </div>
    </div>
  );
};
