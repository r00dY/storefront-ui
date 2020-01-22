/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import ButtonMinimal from "../Button/ButtonMinimal";
import Button from "../Button/Button";
import { Button$ } from "@commerce-ui/core/Button2";
import InputRaw$ from "@commerce-ui/core/InputRaw";
import Input from "../Input";

import { useOptionPicker } from "@commerce-ui/core/OptionPicker";

import Box from "@commerce-ui/core/Box";

import SelectNative$ from "@commerce-ui/core/SelectNative2";

import SelectNative from "../SelectNative";

// export const unstyled = () => (
//     <div>
//         <Counter />
//     </div>
// );
const ringOptions = [
  {
    name: "Color",
    values: [
      {
        name: "Silver",
        color: {
          type: "solid",
          value: "#aaaaaa"
        }
      },
      {
        name: "Black",
        color: {
          type: "gradient",
          value: ["rgba(255,255,255,1)", "rgba(200,200,200,1)"]
        }
      },
      {
        name: "Stealth",
        color: {
          type: "solid",
          value: "red"
        }
      },
      {
        name: "Diamond",
        color: {
          type: "solid",
          value: "yellow"
        }
      }
    ]
  },
  {
    name: "Style",
    values: [
      {
        name: "Heritage",
        color: {
          type: "solid",
          value: "purple"
        }
      },
      {
        name: "Balance",
        color: {
          type: "solid",
          value: "blue"
        }
      }
    ]
  },
  {
    name: "Size",
    values: [
      {
        name: "US 8"
      },
      {
        name: "US 9"
      },
      {
        name: "US 10"
      },
      {
        name: "US 11"
      },
      {
        name: "US 12"
      }
    ]
  }
];

const product = {
  name: "Ring",
  handle: "ring",
  options: ringOptions
};

export const hook = () => {
  const { options } = useOptionPicker({ product });

  return (
    <div>
      {options.map(option => (
        <div>
          <label {...option.labelProps} sx={{ display: "block" }}>
            {option.name}
          </label>
          <SelectNative {...option.selectProps} />
        </div>
      ))}
    </div>
  );
};

export default {
  title: "OptionPicker"
};
