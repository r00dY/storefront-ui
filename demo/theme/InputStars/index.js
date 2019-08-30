/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { useTheme } from "storefront-ui/Theme";

import { rslin } from "responsive-helpers";

import { ButtonRaw } from "../ButtonRaw";

import Star from "../Star";

const InputStar = props => {
  const {
    highlighted,
    onMouseOver,
    onMouseOut,
    filled,
    value,
    onClick
  } = props;
  return (
    <ButtonRaw
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      <Star fillCoverage={filled ? 1 : 0} highlighted={highlighted} />
    </ButtonRaw>
  );
};

export const InputStars = props => {
  const theme = useTheme();
  const { inline } = props;

  const [value, setValue] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div
      css={css`
        position: relative;
        display: ${inline ? "inline-flex" : "flex"};
      `}
    >
      <div onMouseOut={() => setHoveredIndex(-1)}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <InputStar
            value={item}
            highlighted={
              hoveredIndex >= index || (hoveredIndex === -1 && value > index)
            }
            onMouseOver={() => {
              setHoveredIndex(index);
            }}
            onClick={() => {
              setValue(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};
