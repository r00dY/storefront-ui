import React, { useState } from "react";
import { SelectNative$ } from "storefront-ui/SelectNative";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div>
      <SelectNative$
        options={[
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
        ]}
        placeholder={"Pick city"}
      />
    </div>
  );
};
