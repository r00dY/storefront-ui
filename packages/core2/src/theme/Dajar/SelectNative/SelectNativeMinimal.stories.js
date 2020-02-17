/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import SelectNativeMinimal from "./SelectNativeMinimal";
import React, { useRef } from "react";

const stringOptions = [
  "New York",
  "Washington",
  "London",
  "Warsaw",
  "City with a very long name"
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

export const unstyled = () => {
  const inputRef = useRef(null);

  return (
    <>
      <form action={"/action"} method={"post"}>
        <h2>General</h2>

        <p>Standard</p>
        <SelectNativeMinimal placeholder={"City"} options={stringOptions} />

        <p>Disabled</p>
        <SelectNativeMinimal
          disabled={true}
          placeholder={"City"}
          options={stringOptions}
        />

        <p>No placeholder</p>
        <SelectNativeMinimal
          label={"City"}
          type={"text"}
          options={stringOptions}
        />

        <p>Size</p>
        <SelectNativeMinimal
          sx={{
            width: "320px",
            height: "150px"
          }}
          placeholder={"City"}
          options={stringOptions}
        />

        <h2>Hide arrow</h2>

        <p>Standard</p>
        <SelectNativeMinimal
          placeholder={"City"}
          options={stringOptions}
          sx={{ $hideArrow: true }}
        />

        <p>Disabled</p>
        <SelectNativeMinimal
          disabled={true}
          placeholder={"City"}
          options={stringOptions}
          sx={{ $hideArrow: true }}
        />

        <p>No placeholder</p>
        <SelectNativeMinimal
          label={"City"}
          type={"text"}
          options={stringOptions}
          sx={{ $hideArrow: true }}
        />

        <p>Size</p>
        <SelectNativeMinimal
          sx={{
            width: "320px",
            height: "150px",
            $hideArrow: true
          }}
          placeholder={"City"}
          options={stringOptions}
        />
      </form>
    </>
  );
};

export default {
  title: "Dajar.SelectNativeMinimal"
};
