import React, { useState } from "react";
import { FiltersBar } from "storefront-ui/Filters";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";

export default () => {
  return (
    <div>
      <FiltersBar data={filterData} />
    </div>
  );
};
