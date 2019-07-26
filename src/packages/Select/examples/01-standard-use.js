import React, { useState } from "react";
import { Select$ } from "storefront-ui/Select";

import { Popover$ } from "storefront-ui/Popover";
import { Popover } from "../../../../demo/theme/Popover";

import { Modal$ } from "storefront-ui/Modal";
import { Modal } from "../../../../demo/theme/Modal";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const stringOptions = [
  "New York",
  "Washington",
  "London",
  "Warsaw",
  "City with a very long name"
];

const manyStringOptions = [
  ...stringOptions,
  ...stringOptions,
  ...stringOptions,
  ...stringOptions,
  ...stringOptions,
  ...stringOptions,
  ...stringOptions
];

const options = [
  {
    value: "new-york",
    label: "New York"
  },
  {
    value: "washington",
    label: "Washington"
  },
  {
    value: "london",
    label: "London"
  },
  {
    value: "warsaw",
    label: "Warsaw"
  }
];

export default () => {
  const [select1, setSelect1] = useState(null);

  return (
    <div>
      <p>String options</p>

      <Select$
        options={stringOptions}
        onChange={setSelect1}
        value={select1}
        overrides={{
          Item: ({ option, selected }) => (
            <div
              css={css`
                padding: 12px;
                &:hover {
                  background: lightgrey;
                }
              `}
            >
              {option} {selected ? "(*)" : ""}
            </div>
          ),
          Separator: () => (
            <div
              css={css`
                width: 100%;
                height: 1px;
                background: lightgrey;
              `}
            />
          ),
          Inner: ({ value }) => (
            <div
              css={css`
                ${value ? "" : "color: lightgrey;"}
              `}
            >
              {value ? value : "Pick option..."}
            </div>
          ),
          Popover: ({ popoverProps }) => <Popover {...popoverProps} />,
          Modal: ({ modalProps }) => (
            <Modal {...modalProps} header={"Pick city"} />
          )
        }}
      />

      <br />

      <div
        css={css`
          display: inline-block;
        `}
      >
        <Select$
          options={stringOptions}
          onChange={setSelect1}
          value={select1}
          overrides={{
            Item: ({ option, selected }) => (
              <div
                css={css`
                  padding: 8px;
                  background: ${selected ? "red" : "blue"};
                  color: white;
                  &:hover {
                    background: yellow;
                  }
                `}
              >
                {option} {selected ? "(*)" : ""}
              </div>
            ),
            Inner: ({ value }) => (
              <div css={css``}>{value ? value : "Pick option..."}</div>
            ),
            Root: {
              style: `
                  border: none;
                  border-radius: 4px;
                  background-color: black;
                  color: white;
                  font-size: 14px;
                `
            },
            Popover: ({ popoverProps }) => (
              <Popover$
                {...popoverProps}
                overrides={{
                  Body: {
                    style: `
                                                                box-shadow: none;
                                                                    border-radius: 10px;
                                                                    overflow: hidden;
                                                                `
                  }
                }}
              />
            ),
            Modal: ({ modalProps }) => (
              <Modal {...modalProps} header={"Pick city"} />
            ),
            Icon: () => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                <path fill="none" d="M0 0h24v24H0V0z" />
              </svg>
            )
          }}
        />
      </div>
    </div>
  );
};
