import React, { useState } from "react";
import { FiltersColumn } from "../../../../components/Filters";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";

export default () => {
  return (
    <div
      css={css`
        width: 400px;
      `}
    >
      <FiltersColumn data={filterData} />
    </div>
  );
};
