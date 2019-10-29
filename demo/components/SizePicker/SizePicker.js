import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rslin } from "responsive-helpers";
import { R, F, C, S } from "../../theme.js";

import { useTheme } from "@commerce-ui/core/Theme";

function SizePicker(props) {
  const theme = useTheme();

  const _OPTION_HEIGHT = 42;

  const Option = styled.div`
    text-align: center;
    ${theme.fonts.body2.css}
    input {
      appearance: none;
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
    }
    label {
      position: relative;
      flex-grow: 1;
      color: ${theme.colors.mono800.css};
      border: 1px solid ${theme.colors.mono300.css};
      border-radius: 3px;
      margin-bottom: 0;
      height: ${_OPTION_HEIGHT}px;
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 100ms;
    }
    input:checked + label {
      border-color: ${theme.colors.mono800.css};
      color: white;
      background: ${theme.colors.mono800.css};
    }
    input:disabled + label {
      cursor: default;
      color: ${theme.colors.mono400.css};
      background: ${theme.colors.mono100.css};
      border-color: ${theme.colors.mono100.css};
      pointer-events: none;
    }
  `;

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          ${theme.fonts.body2.css}
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            ${rslin(S.s1, S.s2).css("margin-bottom")}
          `}
        >
          Pick your size
        </div>
        <div>
          <a
            href={""}
            css={css`
              text-decoration: underline;
            `}
          >
            Size guide
          </a>
        </div>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 6px;
          padding: 0;
        `}
      >
        {props.sizes.map((option, index) => {
          return (
            <Option key={index}>
              <input
                disabled={!option.available}
                type="radio"
                id={option.value}
                name={props.name}
                value={option.value}
              />
              <label htmlFor={option.value} title={option.tooltip}>
                {option.label}
              </label>
            </Option>
          );
        })}
      </div>
    </div>
  );
}
SizePicker.propTypes = {
  sizes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default SizePicker;
