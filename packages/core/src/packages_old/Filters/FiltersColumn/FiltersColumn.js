import PropTypes from "prop-types";
import React from "react";

import { Accordion$ } from "../../Accordion";
import { BodyStyled, SeparatorStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../../packages/base/helpers/overrides";

const FiltersColumn$ = props => {
  const onChange = (id, value) => {
    if (props.onChange) {
      props.onChange(id, value);
    }
  };

  const {
    data,
    value,
    overrides: {
      Header: Header,

      Separator: SeparatorOverride,
      Body: BodyOverride,

      filterComponents: filterComponents
    },
    expand
  } = props;

  return (
    <div>
      {data.map((filter, index) => {
        const Component = filterComponents[filter.type];

        const [Body, bodyProps] = getOverrides(BodyOverride, BodyStyled);
        const [Separator, separatorProps] = getOverrides(
          SeparatorOverride,
          SeparatorStyled
        );

        return (
          <React.Fragment key={filter.id}>
            <div
              css={css`
                ${index < data.length - 1
                  ? rs(props.gutter).css("margin-bottom")
                  : ""}
                ${index > 0 ? rs(props.gutter).css("margin-top") : ""}
              `}
            >
              <Accordion$
                overrides={{
                  Header: Header
                }}
                title={filter.name}
                openAtInit={expand || filter.forceExpand === true}
              >
                <Body {...bodyProps}>
                  {Component({
                    filter,
                    value: value[filter.id],
                    onChange: newValue => onChange(filter.id, newValue)
                  })}
                </Body>
              </Accordion$>
            </div>
            {index < data.length - 1 && <Separator {...separatorProps} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

FiltersColumn$.defaultProps = {
  gutter: 16,
  overrides: {},
  expand: true,
  value: {}
};

FiltersColumn$.propTypes = {
  gutter: PropTypes.any.isRequired,
  overrides: PropTypes.object,
  expand: PropTypes.bool
};

export default FiltersColumn$;
