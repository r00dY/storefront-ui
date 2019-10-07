import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Radio$ } from "@commerce-ui/core/Radio";

const RadioBorder = props => (
  <Radio$
    {...props}
    overrides={{
      Root: {
        style: ({ $theme, $isFocused }) => `
                    border: 1px solid ${$theme.colors.mono300.css};
                    border-bottom: 0;
                    ${$theme.fonts.body1.css}
                    &:last-child {
                        border-bottom: 1px solid ${$theme.colors.mono300.css};
                                }
                                width: 100%;
                                padding: 16px;
                                margin: 0;
                                background-color: ${
                                  $isFocused
                                    ? $theme.colors.mono50.css
                                    : "transparent"
                                };
                    box-sizing: border-box;
      `,
        children: ({ input, radioMarker, label }) => (
          <>
            {input}
            {radioMarker}
            <div
              css={css`
                display: flex;
                flex-direciton: row;
                justify-content: space-between;
                flex-grow: 1;
              `}
            >
              {label}
              <div>
                <strong>{props.rightLabel}</strong>
              </div>
            </div>
          </>
        )
      },
      Label: {}
    }}
  />
);

export default RadioBorder;
