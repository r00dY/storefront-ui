import PropTypes from "prop-types";
import React from "react";
import { rslin } from "responsive-helpers";
import {
  RootStyled,
  RowStyled,
  LabelStyled,
  ValueStyled,
  NoteStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { getOverrides } from "../../base/helpers/overrides";

const Ledger$ = props => {
  const {
    rows,
    overrides: {
      Root: RootOverride,
      Row: RowOverride,
      Label: LabelOverride,
      Value: ValueOverride,
      Note: NoteOverride
    }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Row, rowProps] = getOverrides(RowOverride, RowStyled);
  const [Label, labelProps] = getOverrides(LabelOverride, LabelStyled);
  const [Value, valueProps] = getOverrides(ValueOverride, ValueStyled);
  const [Note, noteProps] = getOverrides(NoteOverride, NoteStyled);

  return (
    <Root {...rootProps}>
      {rows.map((row, index) => (
        <Row
          {...rowProps}
          key={index}
          value={row.value}
          label={row.label}
          isTotal={row.isTotal}
        >
          <div>
            <Label {...labelProps} isTotal={row.isTotal}>
              {row.label}
            </Label>

            {row.note && (
              <Note {...noteProps} isTotal={row.isTotal}>
                {row.note}
              </Note>
            )}
          </div>
          <Value {...valueProps} isTotal={row.isTotal}>
            {row.value}
          </Value>
        </Row>
      ))}
    </Root>
  );
};
Ledger$.defaultProps = {
  overrides: {}
};

Ledger$.propTypes = {
  rows: PropTypes.array,
  overrides: PropTypes.object
};

export default Ledger$;
