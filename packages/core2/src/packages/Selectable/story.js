import React from "react";
import StoryWrapper from "../StoryWrapper";

function storiesOfSelectable(selectable, options = {}) {
  const { disabled, loading } = options;

  let stories = [];

  stories.push({
    name: "Standard",
    component: React.cloneElement(selectable, {})
  });

  stories.push({
    name: "Highlighted",
    component: React.cloneElement(selectable, { highlighted: true })
  });

  stories.push({
    name: "Selected",
    component: React.cloneElement(selectable, { selected: true })
  });

  stories.push({
    name: "Highlighted & Selected",
    component: React.cloneElement(selectable, {
      selected: true,
      highlighted: true
    })
  });

  stories.push({
    name: "Disabled standard",
    component: React.cloneElement(selectable, { disabled: true })
  });

  stories.push({
    name: "Disabled selected",
    component: React.cloneElement(selectable, {
      disabled: true,
      selected: true
    })
  });

  return stories;
}

function story(...args) {
  return () => <StoryWrapper stories={storiesOfSelectable(...args)} />;
}

export default story;
export { storiesOfSelectable };
