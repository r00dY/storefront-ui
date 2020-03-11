/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import SelectNative from "./SelectNative";
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
        <SelectNative placeholder={"City"} options={stringOptions} />

        <p>Disabled</p>
        <SelectNative
          disabled={true}
          placeholder={"City"}
          options={stringOptions}
        />

        <p>Error</p>
        <SelectNative
          invalid={true}
          placeholder={"City"}
          options={stringOptions}
        />

        <p>No placeholder</p>
        <SelectNative label={"City"} type={"text"} options={stringOptions} />

        <p>Size</p>
        <SelectNative
          sx={{
            width: "320px",
            height: "150px"
          }}
          placeholder={"City"}
          options={stringOptions}
        />
      </form>
    </>
  );
};

export default {
  title: "Dajar.SelectNative"
};
