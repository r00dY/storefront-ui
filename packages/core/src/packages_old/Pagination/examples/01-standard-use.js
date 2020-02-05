import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { StatefulPagination } from "../../../../../../demo/components/Pagination";

export default () => {
  return (
    <div>
      <StatefulPagination
        count={20}
        initPage={5}
        onChange={page => console.log(page)}
      />
    </div>
  );
};
