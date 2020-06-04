import React, { useState } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Search from "@commerce-ui/core/Search";
import Layer from "@commerce-ui/core/Layer";

import Input from "./Input";

export const basic = () => {
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
      >
        {({ close }) =>
          content && (
            <Box>
              {content} <button onClick={close}>close</button>
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

export default {
  title: "Search"
};
