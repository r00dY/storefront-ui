import React, { useState } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Search, { SearchInline, useSearch } from "@commerce-ui/core/Search";
import Layer from "@commerce-ui/core/Layer";

import Input from "./Input";

export const basic = () => {
  const [content, setContent] = useState(null);

  const controller = useSearch({
    defaultValue: "test",
    onChange: newVal => {
      if (typeof newVal === "string" && newVal.startsWith("a")) {
        setContent("starts with a!");
      } else if (newVal === "") {
        setContent("--- placeholder ---");
      } else {
        setContent(null);
      }
    },
    onSubmit: val => console.log("on submit!", val)
  });

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <button
        onClick={() => {
          controller.clear();
        }}
      >
        Clear
      </button>

      <Search
        input={
          <Input
            placeholder={"Collection, product, etc..."}
            leftEnhancer={"(enhancer)"}
          />
        }
        layer={
          <Layer
            root={{ boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)", bg: "white" }}
            width={({ anchorRect }) => anchorRect.width}
            height={400}
          />
        }
        controller={controller}
        // defaultValue={"test"}
        // onChange={newVal => {
        //   if (typeof newVal === "string" && newVal.startsWith("a")) {
        //     setContent("starts with a!");
        //   } else if (newVal === "") {
        //     setContent("--- placeholder ---");
        //   } else {
        //     setContent(null);
        //   }
        // }}
        // onSubmit={val => console.log("on submit!", val)}
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
        input={<Input placeholder={"Collection, product, etc..."} />}
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

export const inlineStatic = () => {
  const [content, setContent] = useState("dupa");

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <SearchInline
        input={<Input placeholder={"Collection, product, etc..."} />}
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
      </SearchInline>
    </Box>
  );
};

export const inlineStaticAbsolute = () => {
  const [searchPhrase, setSearchPhrase] = useState("dupa");

  let content;

  if (typeof searchPhrase === "string" && searchPhrase.startsWith("a")) {
    content = "starts with a!";
  } else if (searchPhrase === "") {
    content = "--- placeholder ---";
  } else {
    content = null;
  }

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <Box
        sx={{
          position: "relative",
          maxHeight: 600,
          border: "1px dotted black"
        }}
      >
        <SearchInline
          input={<Input placeholder={"Collection, product, etc..."} />}
          inputContainer={{
            p: 10
          }}
          defaultValue={"test"}
          onChange={newVal => {
            setSearchPhrase(newVal);
          }}
          mode={"absolute"}
          onSubmit={val => console.log("on submit!", val)}
        >
          {content &&
            [...Array(Math.max(1, searchPhrase.length))].map((e, i) => (
              <Box>
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
            ))}
        </SearchInline>
      </Box>
    </Box>
  );
};

export const inlineStaticFixed = () => {
  const [searchPhrase, setSearchPhrase] = useState("dupa");

  let content;

  if (typeof searchPhrase === "string" && searchPhrase.startsWith("a")) {
    content = "starts with a!";
  } else if (searchPhrase === "") {
    content = "--- placeholder ---";
  } else {
    content = null;
  }

  return (
    <SearchInline
      input={<Input placeholder={"Collection, product, etc..."} autoFocus />}
      defaultValue={"test"}
      onChange={newVal => {
        setSearchPhrase(newVal);
      }}
      mode={"fixed"}
      onSubmit={val => console.log("on submit!", val)}
    >
      {content &&
        [...Array(searchPhrase.length)].map((e, i) => (
          <Box>
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
        ))}
    </SearchInline>
  );
};

export default {
  title: "Search"
};
