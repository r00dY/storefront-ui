import React, { useState } from "react";
import { AccordionHeader } from "storefront-ui/AccordionHeader";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        css={css`
          border: 1px solid black;
        `}
      >
        <AccordionHeader open={open} onClick={() => setOpen(!open)}>
          Cześć
        </AccordionHeader>
      </div>
      <p>{open ? "opened" : "closed"}</p>

      <p>Overrides</p>
      <AccordionHeader
        open={open}
        onClick={() => setOpen(!open)}
        overrides={{
          Title: {
            style: `
            font-size: 20px;
          `
          },
          Toggle: {
            style: `
            font-size: 20px;
          `
          },
          Root: {
            style: `
            background-color: yellow;
          `
          }
        }}
      >
        Cześć
      </AccordionHeader>
      <p>{open ? "opened" : "closed"}</p>

      <p>Overrides - root children change order</p>
      <AccordionHeader
        open={open}
        onClick={() => setOpen(!open)}
        overrides={{
          Root: {
            children: ({ title, toggle }) => (
              <>
                {toggle}
                {title}
              </>
            )
          }
        }}
      >
        Cześć
      </AccordionHeader>
      <p>{open ? "opened" : "closed"}</p>
    </div>
  );
};
