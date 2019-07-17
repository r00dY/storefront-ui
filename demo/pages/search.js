import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Input, StatefulInput } from "../theme/Input";
import Container from "storefront-ui/Container";
import { useRouter } from "next/router";

// import data from "../data";
// import { ProductRow } from "../theme/ProductRow";

import NavBarMobileSearch from "../theme/NavBarMobileSearch";
import { SearchListItem } from "../theme/SearchListItem";
import { Button } from "../theme/Button";
import { useTheme } from "storefront-ui/Theme";

const currentItems = [
  {
    name: "converse"
  },
  {
    name: "converse one star"
  },
  {
    name: "converse shoes"
  },
  {
    name: "coach"
  },
  {
    name: "corneliani"
  },
  {
    name: "coccinelle"
  },
  {
    name: "cole haan"
  },
  {
    name: "cotton on"
  },
  {
    name: "colmar"
  },
  {
    name: "converse 70"
  }
];
const previousItems = [
  {
    name: "tv"
  },
  {
    name: "sneakers"
  },
  {
    name: "sony"
  },
  {
    name: "stereo"
  },
  {
    name: "apple"
  },
  {
    name: "banana"
  },
  {
    name: "watch"
  },
  {
    name: "nike"
  },
  {
    name: "shirt"
  },
  {
    name: "converse"
  }
];

const Search = props => {
  const [phrase, setPhrase] = useState(null);

  const theme = useTheme();

  const previousSearches = ({ items }) => (
    <div>
      <Container>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            color: ${theme.colors.mono500.css};
          `}
        >
          <div
            css={css`
              ${theme.fonts.body1.css}
            `}
          >
            Last searches
          </div>
          <Button kind={"minimal"}>Clear</Button>
        </div>
      </Container>
      {items.map((item, index) => (
        <SearchListItem item={item} key={index} icon={"history"} />
      ))}
    </div>
  );

  const currentSearch = ({ phrase, items }) => (
    <div>
      <Container
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          ${theme.fonts.body1.css}
        `}
      >
        Current phrase: {phrase}
      </Container>
      {items.map((item, index) => (
        <SearchListItem item={item} key={index} icon={"go"} />
      ))}
    </div>
  );

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
        {phrase === null
          ? previousSearches({ items: previousItems })
          : currentSearch({ phrase, items: currentItems })}
      </div>
    </div>
  );
};

export default Search;
