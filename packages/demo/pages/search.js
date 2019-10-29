import "../global-config";

import React, { useState } from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Input, StatefulInput } from "../components/Input";
import Container from "@commerce-ui/core/Container";
import { useRouter } from "next/router";

// import data from "../data";
// import { CheckoutLineItemRow } from "../theme/CheckoutLineItemRow";

import NavBarMobileSearch from "../components/NavBarMobileSearch";
import { SearchListItem } from "../components/SearchListItem";
import { Button } from "../components/Button";
import { useTheme } from "@commerce-ui/core/Theme";

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
            Trending now
          </div>
          {/*<Button kind={"minimal"}>Clear</Button>*/}
        </div>
      </Container>
      {items.map((item, index) => (
        <SearchListItem item={item} key={index} icon={"history"} />
      ))}
    </div>
  );

  const currentSearch = ({ phrase, items }) => (
    <div>
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
