import PropTypes from "prop-types";
import React from "react";

import { Accordion$ } from "../../Accordion";
// import { BodyStyled, SeparatorStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

const ProgressStepsItem$ = ({ theme, label, href, current, completed }) => (
  <div
    css={css`
      white-space: nowrap;
      ${theme.fonts.body2.css}
      &:not(:last-of-type) {
        margin-right: ${theme.spacings.s40}px;
        &:after {
          margin-left: ${theme.spacings.s40}px;
          content: "→";
          color: ${theme.colors.mono400.css};
          ${completed && `color: ${theme.colors.mono900.css};`}
        }
      }
      a {
        ${completed && `color: ${theme.colors.mono900.css};`}
        ${current && `color: ${theme.colors.primary500.css};`}
      }
      span {
        color: ${theme.colors.mono400.css};
      }
    `}
  >
    {href && <a href={href}>{label}</a>}
    {!href && <span>{label}</span>}
  </div>
);

ProgressStepsItem$.defaultProps = {
  overrides: {}
};

ProgressStepsItem$.propTypes = {
  children: PropTypes.any.isRequired,
  overrides: PropTypes.object
};

export default ProgressStepsItem$;
