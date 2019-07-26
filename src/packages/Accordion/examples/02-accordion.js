import React, { useState } from "react";
import { AccordionHeader } from "../../../../demo/theme/AccordionHeader";
import { Accordion$ } from "storefront-ui/Accordion";
import { Accordion } from "../../../../demo/theme/Accordion";
// import { ButtonRaw } from "../../../../components/ButtonRaw";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
  return (
    <div>
      <p>Basic use case</p>

      <Accordion title={"Header"}>
        <LoremIpsum />
      </Accordion>

      <p>
        Basic use case, <code>scrollTopAtOpen=true</code>
      </p>

      <Accordion title={"Header"} scrollTopAtOpen={true}>
        <LoremIpsum />
      </Accordion>
    </div>
  );
};
