import React from "react";
import PropTypes from "prop-types";

import Popup from "../../Popup";
import Button from "../../Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const container = (children, gutter) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      & > div:not(:last-of-type) {
        margin-right: ${gutter}px;
      }
    `}
  >
    {children}
  </div>
);

const header = () => (
  <div
    css={css`
      border-bottom: 1px solid lightgrey;
    `}
  >
    <Button
      css={css`
        display: flex;
        padding: 4px;
      `}
    >
      Close
    </Button>
  </div>
);
const body = ({ data, filter, component }) => <>{component}</>;
const footer = () => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
      border-top: 1px solid lightgrey;
    `}
  >
    <Button
      css={css`
        padding: 4px;
      `}
    >
      Clear all
    </Button>
    <Button
      css={css`
        padding: 4px;
      `}
    >
      Apply
    </Button>
  </div>
);

const trigger = ({ filter }) => {
  let labelSuffix;
  let hasSelectedOptions; // should this come from API?

  if (filter.type === "range") {
  } else if (filter.type === "select") {
    let filtersCount = filter.options.filter(option => option.selected).length;
    if (filtersCount > 0) {
      hasSelectedOptions = true;
      labelSuffix = " (" + filtersCount + ")";
    }
  }

  return (
    <Button>
      {({ popupOpened }) => (
        <div
          css={css`
            display: flex;
            ${hasSelectedOptions ? "font-weight: bold;" : ""}
          `}
        >
          <div>
            {filter.name}
            <span
              css={css`
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 100px;
                overflow: hidden;
              `}
            >
              {labelSuffix && labelSuffix}
            </span>
          </div>
          <div
            css={css`
              width: 1em;
              text-align: center;
            `}
          >
            {popupOpened ? "-" : "+"}
          </div>
        </div>
      )}
    </Button>
  );
};

const components = {
  select: {
    component: ({ data, filter, onChange }, { item }) => (
      <>
        {filter.options.map(option => item({ data, filter, option, onChange }))}
      </>
    ),

    defaultOptions: {
      item: ({ data, filter, option, onChange }) => (
        <Button
          appearance={"raw"}
          key={option.id}
          css={css`
            display: flex;
            align-items: center;
            padding-left: 16px;
            padding-right: 16px;
            height: 24px;
            width: 100%;
            ${option.selected ? `font-weight: bold;` : ""}
          `}
          onClick={() => {
            if (option.selected) {
              option.selected = false;
            } else {
              option.selected = true;
            }
            onChange(filter, option);
          }}
        >
          {option.name} ({option.amount})
        </Button>
      )
    }
  },
  range: {
    component: ({ data, filter }) => <div>RANGE COMPONENT</div>,
    defaultOptions: {}
  }
};

const FilterBar = props => {
  const onChange = (filter, option) => {
    console.log("sth clicked!");
    console.log(filter, option);
  };

  return props.container(
    props.data.map((filter, index) => {
      let arg;
      let argCustom = false;

      if (!argCustom) {
        arg = props.components[filter.type];
      }

      let component;

      if (typeof arg === "function") {
        // if function just call it
        component = arg({ data: props.data, filter, onChange });
      } else {
        // otherwise, arg is object of config
        let options = Object.assign(
          {},
          components[filter.type].defaultOptions,
          arg
        );
        component = components[filter.type].component(
          { data: props.data, filter, onChange },
          options
        );
      }

      return (
        <div key={filter.id}>
          <Popup trigger={props.trigger({ filter })} size={"small"}>
            <div
              css={css`
                height: 300px;
                margin-bottom: 1px;
                position: relative;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                `}
              >
                {props.header && props.header()}
                <div
                  css={css`
                    flex-grow: 1;
                    overflow-y: auto;
                  `}
                >
                  {props.body({ data: props.data, filter, component })}
                </div>
                {props.footer && props.footer()}
              </div>
            </div>
          </Popup>
        </div>
      );
    }),
    props.gutter
  );
};

FilterBar.defaultProps = {
  trigger: trigger,
  header: header,
  body: body,
  footer: footer,
  container: container,
  gutter: 20,
  components: {
    select: components.select.defaultOptions,
    range: components.select.defaultOptions
  }
};
FilterBar.propTypes = {};

export default FilterBar;
