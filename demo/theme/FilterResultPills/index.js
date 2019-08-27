import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "storefront-ui/Theme";
import { L, R } from "storefront-ui/Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ButtonRaw } from "../ButtonRaw";

import IconClose from "../../svg/close.svg";

const H = 30;

const breakpoint = "sm";
const lowerBreakpoint = "xs_plus";

const Item = props => {
  const { type, params } = props;
  const theme = useTheme();

  return (
    <div
      css={css`display: flex; align-items: center; background: ${
        theme.colors.mono200.css
      }; color: ${theme.colors.mono900.css};
${theme.fonts.caption.css} margin: 0 ${theme.spacings.s40}px ${
        theme.spacings.s40
      }px 0; height: ${H}px; border-radius: ${H / 2}px;`}
    >
      <div
        css={css`
          padding-left: 8px;
          white-space: nowrap;
          display: flex;
          align-items: center;
        `}
      >
        {type === "color" && (
          <>
            <div
              css={css`
                display: inline-block;
                margin-right: 0.5em;
                width: 18px;
                height: 18px;
                border: 1px solid ${theme.colors.mono300.css};
                border-radius: 50%;
                background: ${params.color};
              `}
            />
            {params.label}
          </>
        )}
        {type === "text" && (
          <div
            css={css`
              margin-left: 0.5em;
            `}
          >
            {params.label}
          </div>
        )}
      </div>
      <ButtonRaw
        css={css`
          width: ${H}px;
          height: ${H}px;
          padding-right: 4px;
          display: flex;
          justify-content: center;
          svg {
            width: 16px;
            height: 16px;
          }
        `}
      >
        <IconClose />
      </ButtonRaw>
    </div>
  );
};

const FilterResultPills = props => {
  const theme = useTheme();

  const { filters } = props;

  return (
    <div
      css={css`
        display: flex;
        ${R.to(lowerBreakpoint).css(
          `-webkit-overflow-scrolling: touch; overflow-x: auto; ${L.margin.css(
            "padding-left"
          )} ${L.margin.multiply(-1).css("margin-left")} ${L.margin
            .multiply(-1)
            .css("margin-right")}`
        )} ${R.from(breakpoint).css(`flex-wrap: wrap;`)}
      `}
    >
      {filters.map((filter, index) => {
        return (
          <Item
            type={filter.type}
            value={filter.value}
            params={filter.params}
          />
        );
      })}
      <ButtonRaw
        css={css`
          ${R.to(lowerBreakpoint).css(
            `${L.margin.css("padding-right")}`
          )} ${theme.fonts.body2.css} white-space: nowrap;
          display: flex;
          align-items: center;
          height: ${H}px;
        `}
      >
        Clear all
      </ButtonRaw>
    </div>
  );
};

FilterResultPills.propTypes = {
  filters: PropTypes.object
};

export default FilterResultPills;
