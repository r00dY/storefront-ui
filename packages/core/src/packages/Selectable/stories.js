import React from "react";

function selectableStories(selectable, options = {}) {
  const { disabled, loading } = options;

  let stories = [];

  stories.push({
    name: "Standard",
    component: React.cloneElement(selectable, {})
  });

  stories.push({
    name: "Focused",
    component: React.cloneElement(selectable, { focused: true })
  });

  stories.push({
    name: "Selected",
    component: React.cloneElement(selectable, { selected: true })
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

export { selectableStories };
