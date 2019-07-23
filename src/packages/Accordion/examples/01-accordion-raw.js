import React, { useState } from "react";
import { AccordionRaw } from "storefront-ui/Accordion";

import { css } from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <AccordionRaw
        css={`
          width: 300px;
        `}
        open={open}
      >
        <LoremIpsum />
      </AccordionRaw>
      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>

      <p>Not animated </p>

      <AccordionRaw
        css={`
          width: 300px;
        `}
        animated={false}
        open={open2}
      >
        <LoremIpsum />
      </AccordionRaw>
      <button onClick={() => setOpen2(!open2)}>
        {open2 ? "Hide" : "Show"}
      </button>

      <p>
        <code>openAtInit=true</code>{" "}
      </p>

      <AccordionRaw
        css={`
          width: 300px;
        `}
        open={open3}
      >
        <LoremIpsum />
      </AccordionRaw>
      <button onClick={() => setOpen3(!open3)}>
        {open3 ? "Hide" : "Show"}
      </button>
    </div>
  );
};
