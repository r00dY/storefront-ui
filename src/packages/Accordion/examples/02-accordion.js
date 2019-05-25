import React, { useState } from "react";
import { AccordionHeader } from "../../../../components/AccordionHeader";
import { Accordion$ } from "storefront-ui/Accordion";
import { Accordion } from "../../../../components/Accordion";
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

      {/*<p>*/}
      {/*Overrides (reusing standard <code>AccordionHeader</code>)*/}
      {/*</p>*/}
      {/*<Accordion$*/}
      {/*title={"Header"}*/}
      {/*overrides={{*/}
      {/*Header: props => (*/}
      {/*<AccordionHeader*/}
      {/*{...props}*/}
      {/*overrides={{*/}
      {/*Title: {*/}
      {/*style: ({ $theme }) => `*/}
      {/*${$theme.fonts.body1.css}*/}
      {/*`*/}
      {/*},*/}
      {/*Toggle: {*/}
      {/*style: ({ $theme }) => `*/}
      {/*${$theme.fonts.body1.css}*/}
      {/*`*/}
      {/*},*/}
      {/*Root: {*/}
      {/*style: `*/}
      {/*background-color: yellow;*/}
      {/*`*/}
      {/*}*/}
      {/*}}*/}
      {/*/>*/}
      {/*)*/}
      {/*}}*/}
      {/*>*/}
      {/*<LoremIpsum />*/}
      {/*</Accordion$>*/}

      {/*<p>Overrides (total custom)</p>*/}
      {/*<Accordion$*/}
      {/*title={"Header"}*/}
      {/*overrides={{*/}
      {/*Header: ({ children, open, onClick }) => (*/}
      {/*<ButtonRaw*/}
      {/*onClick={onClick}*/}
      {/*css={css`*/}
      {/*border: 3px solid black;*/}
      {/*padding: 10px;*/}
      {/*width: 100%;*/}
      {/*background-color: ${open ? "red" : "yellow"};*/}
      {/*display: flex;*/}
      {/*justify-content: center;*/}
      {/*`}*/}
      {/*>*/}
      {/*{children}*/}
      {/*</ButtonRaw*/}
      {/**/}
      {/*>*/}
      {/*)*/}
      {/*}}*/}
      {/*>*/}
      {/*<LoremIpsum />*/}
      {/*</Accordion$>*/}
    </div>
  );
};
