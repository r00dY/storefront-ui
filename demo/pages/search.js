import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Input, StatefulInput } from "../theme/Input";
import Container from "storefront-ui/Container";

// import data from "../data";
// import { ProductRow } from "../theme/ProductRow";

import NavBarMobileSearch from "../theme/NavBarMobileSearch";

const Search = () => {
  const [phrase, setPhrase] = useState(null);

  return (
    <div>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        `}
      >
        <NavBarMobileSearch placeholder={"Search"} onChange={setPhrase} />
      </div>

      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <Container
          css={css`
            padding-top: 16px;
          `}
        >
          {phrase === null
            ? "No previous searches"
            : `Current phrase: ${phrase}`}
        </Container>
      </div>
    </div>
  );
};

export default Search;
