import React, { useState } from "react";
import { AccordionHeader } from "../../../../demo/components/AccordionHeader";
import { Accordion$ } from "@commerce-ui/core/Accordion";
import { Accordion } from "../../../../demo/components/Accordion";
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
