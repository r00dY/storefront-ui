import React, { useState } from "react";
import { FiltersBar } from "storefront-ui/Filters";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";
import Button from "../../Button";

const trigger = ({ filter }) => {
  let labelSuffix;
  let hasSelectedOptions; // should this come from API?

  if (filter.type === "range") {
  } else if (filter.type === "select") {
    let selectedOptions = filter.options.filter(option => option.selected);

    if (selectedOptions.length > 0) {
      hasSelectedOptions = true;

      let selectedOptionsNames = [];
      selectedOptions.map((option, index) => {
        selectedOptionsNames.push(option.name);
      });
      labelSuffix = ": " + selectedOptionsNames.join(", ");
    }
  }

  return (
    <Button>
      {({ popupOpened }) => (
        <div
          css={css`
            display: flex;
            background: lightseagreen;
            padding: 16px;
            height: 36px;
            align-items: center;
            ${hasSelectedOptions ? "font-weight: bold;" : ""}
          `}
        >
          {filter.name}
          {labelSuffix && (
            <div
              css={css`
                max-width: 100px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
            >
              {labelSuffix}
            </div>
          )}
          <div
            css={css`
              margin-left: 10px;
              width: 10px;
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

const body = ({ data, filter, component }) => (
  <div
    css={css`
      padding-top: 10px;
      padding-bottom: 10px;
    `}
  >
    {component}
  </div>
);

const footer = () => (
  <div
    css={css`
      display: flex;
      border-top: 1px solid lightgrey;
    `}
  >
    <Button
      css={css`
        &:hover {
          background: #f5f5f5;
        }
        padding: 10px;
        width: 100%;
        text-align: center;
      `}
    >
      Apply
    </Button>
  </div>
);

const item = ({ data, filter, option, onChange }) => (
  <Button
    appearance={"raw"}
    key={option.id}
    css={css`
      display: flex;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      height: 30px;
      width: 100%;
      color: ${option.selected ? "black" : "#999"};
      &:hover {
        background: #f5f5f5;
      }
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
    <div
      css={css`
        width: 16px;
        height: 16px;
        background: lightgrey;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {option.selected && "X"}
    </div>
    <div
      css={css`
        margin-top: 3px;
      `}
    >
      {option.name}
    </div>
  </Button>
);

const container = (children, gutter) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      & > div {
        margin-bottom: ${gutter}px;
      }
      & > div:not(:last-of-type) {
        margin-right: ${gutter}px;
      }
    `}
  >
    {children}
  </div>
);
export default () => {
  return (
    <div>
      <FiltersBar
        data={filterData}
        header={null}
        footer={footer}
        trigger={trigger}
        container={container}
        body={body}
        components={{
          select: {
            item: item
          }
        }}
      />
    </div>
  );
};
