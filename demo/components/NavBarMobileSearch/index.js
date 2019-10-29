import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "@commerce-ui/core/Container";
import { ButtonRaw } from "../ButtonRaw";

import IconArrowBack from "../../svg/arrow_back_ios.svg";
import { useTheme } from "@commerce-ui/core/Theme";

import { useDebouncedCallback } from "use-debounce";

import Router from "next/router";

import { StatefulInput$ } from "@commerce-ui/core/Input";

const NavBarMobileSearch = ({ onChange, placeholder }) => {
  const theme = useTheme();

  const [debouncedOnChange] = useDebouncedCallback(onChange, 300);

  return (
    <div
      css={css`
        background: white;
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
              display: block;
              svg {
                line-height: 1;
                display: block;
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
            overrides={{
              InputContainer: {
                style: `
                  border: none;
                `
              }
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavBarMobileSearch;
