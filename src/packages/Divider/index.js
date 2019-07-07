import PropTypes from "prop-types";
import React from "react";

import { RootStyled, LineStyled, LabelStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";

const Divider$ = props => {
  const onChange = (id, value) => {
    if (props.onChange) {
      props.onChange(id, value);
    }
  };

  const {
    label,
    overrides: { Label: LabelOverride, Line: LineOverride, Root: RootOverride }
  } = props;
  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Label, labelProps] = getOverrides(LabelOverride, LabelStyled);
  const [Line, lineProps] = getOverrides(LineOverride, LineStyled);

  return (
    <Root>
      {label && (
        <>
          <Line />
          <Label label={label}>{label}</Label>
          <Line />
        </>
      )}
      {!label && <Line />}
    </Root>
  );
};

Divider$.defaultProps = {
  overrides: {}
};

Divider$.propTypes = {
  label: PropTypes.string,
  overrides: PropTypes.object
};

export { Divider$ };
