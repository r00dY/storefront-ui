import React, { useState } from "react";
import { FiltersColumn } from "../../../../demo/components/Filters";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import filters from "../../../../data/filters";

export default () => {
  const [value, setValue] = useState({});

  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <FiltersColumn
        data={filters}
        value={value}
        onChange={(id, newVal) => {
          setValue({ ...value, [id]: newVal });
        }}
      />
    </div>
  );
};
