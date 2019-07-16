import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Input, StatefulInput } from "../theme/Input";
import Container from "storefront-ui/Container";

import NavBarMobileSearch from "../theme/NavBarMobileSearch";

const Search = () => {
  return (
    <div>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
        `}
      >
        <NavBarMobileSearch />
      </div>

      <div
        css={css`
          margin-top: 50px;
        `}
      >
        <Container>content</Container>
      </div>
    </div>
  );
};

export default Search;
