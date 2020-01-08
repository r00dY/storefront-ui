/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";

function StoryWrapper({ stories }) {
  if (!Array.isArray(stories)) {
    stories = [stories];
  }
  return (
    <>
      {stories.map(story => (
        <div>
          <p sx={{}}>{story.name}</p>
          <div>{story.component}</div>
        </div>
      ))}
    </>
  );
}

export default StoryWrapper;
