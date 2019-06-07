import React, { useState } from "react";
import { FilterRow } from "../../../../components/Filters";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";
import useFiltersData from "storefront-ui/Filters/useFiltersData";

export default () => {
  const [data, onChange] = useFiltersData(filterData);

  return <FilterRow data={data} onChange={onChange} />;
};
