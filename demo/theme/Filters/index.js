import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";
import { RangePicker } from "../RangePicker";
import { ButtonRaw } from "../ButtonRaw";
import { useTheme } from "storefront-ui/Theme";

import React from "react";

import ICON_CIRCLE from "./circle.svg";
import ICON_TICK from "./tick.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ColorFilterComponent = ({ filter, onChange, isMobile }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: grid;
        // grid-template-columns: repeat(5, 40px);
        grid-template-columns: repeat(
          auto-fill,
          minmax(${isMobile ? "48px" : "40px"}, 1fr)
        );
        justify-content: space-between;
        grid-row-gap: 12px;
        width: 100%;
        padding-top: 20px;
        padding-left: 4px;
        padding-right: 4px;
      `}
    >
      {filter.items.map(option => {
        let isChecked = filter.value.includes(option);

        return (
          <ButtonRaw
            key={option.id}
            css={css`
              position: relative;
              line-height: 0;
              padding: 4px;
              margin: 4px;
              transition: 100ms;
            `}
            onClick={() =>
              onChange(
                isChecked
                  ? filter.value.filter(x => x !== option)
                  : [...filter.value, option]
              )
            }
          >
            <ICON_CIRCLE
              css={css`
                fill: ${option.data.hex};
                stroke: ${option.data.hasBorder
                  ? theme.colors.mono500.css
                  : "none"};
              `}
            />
            {isChecked && (
              <div
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  svg {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    fill: white;
                  }
                `}
              >
                <ICON_TICK />
              </div>
            )}
          </ButtonRaw>
        );
      })}
    </div>
  );
};

const overrides = props => ({
  Header: AccordionHeader,
  filterComponents: {
    select: ({ filter, onChange }) => {
      if (filter.id === "color") {
        return (
          <ColorFilterComponent
            filter={filter}
            onChange={onChange}
            isMobile={props.isMobile}
          />
        );
      }

      return (
        <ItemListAccordion
          items={filter.items}
          value={filter.value}
          onChange={onChange}
          multiple={filter.multiple}
        />
      );
    },
    range: ({ filter, onChange }) => (
      <RangePicker
        value={filter.value}
        onChange={onChange}
        min={filter.min}
        max={filter.max}
        unit={filter.unit}
        neverEmpty={true}
      />
    )
  }
});

const FiltersColumn = props => (
  <FiltersColumn$ overrides={overrides(props)} {...props} />
);

export { FiltersColumn };
