import PropTypes from "prop-types";
import React from "react";
import { StatefulPopover$ } from "../../Popover";
import { Button$ } from "../../Button";

import {
  PopoverBodyStyled,
  PopoverRootStyled,
  PopoverFooterStyled,
  PopoverHeadStyled,
  RootStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

const FiltersRow$ = props => {
  const onChange = (id, value) => {
    if (props.onChange) {
      props.onChange(id, value);
    }
  };

  const {
    data,
    overrides: {
      Root: RootOverride,
      Trigger: Trigger,
      Popover: PopoverOverride,
      PopoverRoot: PopoverRootOverride,
      PopoverHead: PopoverHeadOverride,
      PopoverBody: PopoverBodyOverride,
      PopoverFooter: PopoverFooterOverride,
      filterComponents: filterComponents
    }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  let activeFilters = data.filter(
    filter => filter.value && filter.value.length > 0
  );

  return (
    <Root {...rootProps}>
      {data.map((filter, index) => {
        const Component = filterComponents[filter.type];

        const [Popover, popoverProps] = getOverrides(PopoverOverride, Popover);

        const [PopoverBody, popoverBodyProps] = getOverrides(
          PopoverBodyOverride,
          PopoverBodyStyled
        );
        const [PopoverRoot, popoverRootProps] = getOverrides(
          PopoverRootOverride,
          PopoverRootStyled
        );
        const [PopoverHead, popoverHeadProps] = getOverrides(
          PopoverHeadOverride,
          PopoverHeadStyled
        );
        const [PopoverFooter, popoverFooterProps] = getOverrides(
          PopoverFooterOverride,
          PopoverFooterStyled
        );

        return (
          <React.Fragment key={filter.id}>
            <div
              css={css`
                ${rs(props.gutter).css("margin-right")}
              `}
            >
              <StatefulPopover$
                content={({ close }) => (
                  <PopoverRoot {...popoverRootProps}>
                    <PopoverHead
                      onChange={value => onChange(filter.id, value)}
                      filter={filter}
                      {...popoverHeadProps}
                    >
                      <Button$
                        fitContainer
                        kind={"secondary"}
                        disabled={
                          !filter.value ||
                          (filter.value && filter.value.length === 0)
                        }
                        onClick={() => onChange(filter.id, [])}
                      >
                        Clear all
                      </Button$>
                    </PopoverHead>
                    <PopoverBody {...popoverBodyProps}>
                      <Component
                        filter={filter}
                        onChange={value => onChange(filter.id, value)}
                      />
                    </PopoverBody>
                    <PopoverFooter {...popoverFooterProps}>
                      <Button$ fitContainer onClick={close}>
                        Apply
                      </Button$>
                    </PopoverFooter>
                  </PopoverRoot>
                )}
                {...popoverProps}
              >
                {/* This wrapper needs to be fixed. Without it Trigger doesn't get click to open Popover. */}
                <div>
                  <Trigger filter={filter} />
                </div>
              </StatefulPopover$>
            </div>
          </React.Fragment>
        );
      })}
      {activeFilters.length > 0 && (
        <Button$
          kind={"secondary"}
          onClick={() => activeFilters.map(filter => onChange(filter.id, []))}
        >
          Clear all filters
        </Button$>
      )}
    </Root>
  );
};

FiltersRow$.defaultProps = {
  gutter: 16,
  overrides: {}
};

FiltersRow$.propTypes = {
  gutter: PropTypes.any.isRequired,
  overrides: PropTypes.object
};

export default FiltersRow$;
