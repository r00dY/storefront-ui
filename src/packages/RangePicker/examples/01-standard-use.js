import React, { useState } from "react";

import { RangePicker } from "../../../../demo/theme/RangePicker";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [value, setValue] = useState({});

  return (
    <div>
      <RangePicker
        value={value}
        onChange={setValue}
        neverEmpty={true}
        min={30}
        max={90}
        unit={"cm"}
      />
    </div>
  );
};
