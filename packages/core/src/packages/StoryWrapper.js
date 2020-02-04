/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";

function StoryWrapper({ stories }) {
  if (!Array.isArray(stories)) {
    stories = [stories];
  }
  return (
    <>
      {stories.map((story, i) => (
        <div
          key={i}
          sx={{
            marginBottom: "24px"
          }}
        >
          <p
            sx={{
              fontSize: "12px",
              padding: "4px",
              bg: "coral",
              display: "inline-block",
              fontFamily: "sans-serif"
            }}
          >
            {story.name}
          </p>
          <div>{story.component}</div>
        </div>
      ))}
    </>
  );
}

export default StoryWrapper;
