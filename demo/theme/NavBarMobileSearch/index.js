import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "storefront-ui/Container";
import { ButtonRaw } from "../ButtonRaw";

import IconArrowBack from "../../svg/arrow_back.svg";
import IconHeart from "../../svg/heart.svg";
import IconSearch from "../../svg/search.svg";
import { useTheme } from "storefront-ui/Theme";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";

import { useDebouncedCallback } from "use-debounce";

import Router from "next/router";

import { StatefulInput } from "../../theme/Input";
import { StatefulInput$ } from "storefront-ui/Input";

const NavBarMobileSearch = ({ onChange, placeholder }) => {
  const theme = useTheme();

  const [debouncedOnChange] = useDebouncedCallback(onChange, 300);

  return (
    <div
      css={css`
        background: #fafafa;
        border-bottom: 1px solid lightgrey;
      `}
    >
      <Container>
        <div
          css={css`
            position: relative;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <ButtonRaw
            css={css`
              flex-grow: 0;
              flex-shrink: 0;
              svg {
                line-height: 1;
              }
            `}
            onClick={() => {
              Router.back();
            }}
          >
            <IconArrowBack />
          </ButtonRaw>

          <StatefulInput$
            clearable
            placeholder={placeholder}
            autoFocus
            onChange={e => {
              if (e.target.value.trim() === "") {
                debouncedOnChange(null);
                return;
              }
              debouncedOnChange(e.target.value.trim());
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavBarMobileSearch;
