import React from "react";
import StoryWrapper from "../StoryWrapper";

const options = [
  {
    id: "new-york",
    label: "New York"
  },
  {
    id: "washington",
    label: "Washington"
  },
  {
    id: "london",
    label: "London"
  },
  {
    id: "warsaw",
    label: "Warsaw"
  }
];

const optionsWithDisabled = [
  {
    id: "new-york",
    label: "New York",
    disabled: true
  },
  {
    id: "washington",
    label: "Washington"
  },
  {
    id: "london",
    label: "London",
    disabled: true
  },
  {
    id: "warsaw",
    label: "Warsaw"
  }
];

function storiesOfSelectNative(select, options = {}) {
  const { disabled = true, loading = true } = options;

  let stories = [];

  stories.push({
    name: "Standard",

    component: React.cloneElement(select, {
      options: optionsWithDisabled
    })
  });

  stories.push({
    name: "Disabled",

    component: React.cloneElement(select, {
      options: optionsWithDisabled,
      disabled: true
    })
  });

  return stories;
}

function story(...args) {
  return () => <StoryWrapper stories={storiesOfSelectNative(...args)} />;
}

export default story;
export { storiesOfSelectNative };
