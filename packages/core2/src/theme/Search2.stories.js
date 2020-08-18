import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Search, { SearchInline } from "@commerce-ui/core/Search2";
import Layer from "@commerce-ui/core/Layer";

import Input from "./Input";

import Button from "@commerce-ui/core/Button";

export const basic = () => {
  const [content, setContent] = useState(null);

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <Search
        form={({ inputProps, submitButtonProps }) => (
          <Input
            placeholder={"Collection, product, etc..."}
            leftEnhancer={"(enhancer)"}
            {...inputProps}
          />
        )}
        layer={
          <Layer
            root={{ boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)", bg: "white" }}
            width={({ anchorRect }) => anchorRect.width}
            height={400}
          />
        }
        defaultValue={"test"}
        onChange={newVal => {
          if (typeof newVal === "string" && newVal.startsWith("a")) {
            setContent("starts with a!");
          } else if (newVal === "") {
            setContent("--- placeholder ---");
          } else {
            setContent(null);
          }
        }}
        onSubmit={val => console.log("on submit!", val)}
      >
        {content && (
          <Box>
            {content}{" "}
            <button
              onClick={() => {
                console.log("click");
              }}
            >
              Some button
            </button>
            <a
              href={"#"}
              onClick={e => {
                e.preventDefault();
              }}
            >
              Dupa
            </a>
          </Box>
        )}
      </Search>
    </Box>
  );
};

export const callback = () => {
  const [content, setContent] = useState(null);

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <Search
        form={({ inputProps, submitButtonProps }) => (
          <Input
            placeholder={"Collection, product, etc..."}
            leftEnhancer={"(enhancer)"}
            {...inputProps}
          />
        )}
        layer={
          <Layer
            root={{ boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)", bg: "white" }}
            width={({ anchorRect }) => anchorRect.width}
            height={400}
          />
        }
        defaultValue={"test"}
        onChange={newVal => {
          if (typeof newVal === "string" && newVal.startsWith("a")) {
            setContent("starts with a!");
          } else if (newVal === "") {
            setContent("--- placeholder ---");
          } else {
            setContent(null);
          }
        }}
        onSubmit={val => console.log("on submit!", val)}
      >
        {({ close }) =>
          content && (
            <Box>
              {content}
              <button onClick={close}>close</button>
              <a
                href={"#"}
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Dupa
              </a>
            </Box>
          )
        }
      </Search>
    </Box>
  );
};

const Results = ({ value }) => {
  const [isLoading, setLoading] = useState(false);
  const timeout = useRef(null);
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(
    () => {
      clearTimeout(timeout.current);

      if (!value) {
        setDisplayedValue(null);
        setLoading(false);
        return;
      }
      setLoading(true);

      timeout.current = setTimeout(() => {
        setLoading(false);
        setDisplayedValue(value);
      }, 500);
    },
    [value]
  );

  if (isLoading) {
    return "Loading...";
  }

  if (!displayedValue) {
    return "No results";
  }

  return (
    <Box>
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
      <br />
      {displayedValue}
    </Box>
  );
};

export const inline = () => {
  const [value, setValue] = useState("test");

  return (
    <Box
      sx={{
        maxWidth: 800,
        border: "1px dotted black",
        height: 400,
        overflowY: "scroll",
        position: "relative"
      }}
    >
      <Box sx={{ position: "sticky", top: 0 }}>
        <Search
          defaultValue={value}
          onChange={val => setValue(val)}
          onSubmit={val => console.log("on submit!", val)}
          form={({ inputProps, submitButtonProps }) => (
            <Input
              placeholder={"Collection, product, etc..."}
              rightEnhancer={<Button {...submitButtonProps}>SEARCH</Button>}
              {...inputProps}
            />
          )}
        />
      </Box>
      <Results value={value} />
    </Box>
  );
};

export default {
  title: "Search2 (new)"
};
