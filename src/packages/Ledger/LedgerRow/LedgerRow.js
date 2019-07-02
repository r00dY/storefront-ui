import PropTypes from "prop-types";
import React from "react";
import { rslin } from "responsive-helpers";
import { RootStyled, ValueStyled, LabelStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { getOverrides } from "../../base/helpers/overrides";

const LedgerRow$ = props => {
  const {
    label,
    value,
    isTotal,
    overrides: {
      Root: RootOverride,
      Value: ValueOverride,
      Label: LabelOverride
    }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Label, labelProps] = getOverrides(LabelOverride, LabelStyled);
  const [Value, valueProps] = getOverrides(ValueOverride, ValueStyled);

  const labelElem = (
    <Label {...labelProps} isTotal={isTotal}>
      {label}
    </Label>
  );
  const valueElem = (
    <Value {...valueProps} isTotal={isTotal}>
      {value}
    </Value>
  );

  return (
    <Root
      value={valueElem}
      label={labelElem}
      isTotal={isTotal}
      {...rootProps}
    />
  );
};
LedgerRow$.defaultProps = {
  overrides: {}
};

LedgerRow$.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  overrides: PropTypes.object
};

export default LedgerRow$;
