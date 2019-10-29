/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { useTheme } from "@commerce-ui/core/Theme";

import { rslin } from "responsive-helpers";

import { Radio$, RadioGroup$ } from "@commerce-ui/core/Radio";

import Star from "../Star";

const RadioStar = props => {
  const {
    checked,
    value,
    onChange,
    highlighted,
    onMouseOver,
    onMouseOut,
    filled
  } = props;
  return (
    <Radio$
      {...props}
      checked={checked}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      overrides={{
        RadioMarkOuter: () => {
          return false;
        }
      }}
    >
      <Star
        fillCoverage={filled ? 1 : 0}
        highlighted={highlighted}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    </Radio$>
  );
};

export const RadioStars = props => {
  const theme = useTheme();
  const { inline } = props;

  const [value, setValue] = useState("1");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div
      css={css`
        position: relative;
        display: ${inline ? "inline-flex" : "flex"};
      `}
    >
      <div onMouseOut={() => setHoveredIndex(-1)}>
        <RadioGroup$
          name="radio group"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          overrides={{
            RadioGroupRoot: { style: `display: flex; flex-direction: row;` }
          }}
        >
          {["1", "2", "3", "4", "5"].map((item, index) => (
            <RadioStar
              value={item}
              checked={value === index}
              filled={value > index}
              highlighted={hoveredIndex >= index}
              onMouseOver={() => {
                console.log("aaa");
                setHoveredIndex(index);
              }}
            />
          ))}
        </RadioGroup$>
      </div>
    </div>
  );
};
