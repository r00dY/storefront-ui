import React from "react";

function getComponent(selectable, props) {
  return typeof selectable === "function"
    ? selectable(props)
    : React.cloneElement(selectable, props);
}

function selectableStories(selectable, options = {}) {
  const { disabled, loading } = options;

  let stories = [];

  stories.push({
    name: "Standard",
    component: getComponent(selectable, {})
  });

  stories.push({
    name: "Highlighted",
    component: getComponent(selectable, { highlighted: true }) //React.cloneElement(selectable, { highlighted: true })
  });

  stories.push({
    name: "Selected",
    component: getComponent(selectable, { selected: true }) //React.cloneElement(selectable, { selected: true })
  });

  stories.push({
    name: "Highlighted & Selected",
    component: getComponent(selectable, {
      selected: true,
      highlighted: true
    })
  });

  stories.push({
    name: "Disabled standard",
    component: getComponent(selectable, { disabled: true })
  });

  stories.push({
    name: "Disabled selected",
    component: getComponent(selectable, {
      disabled: true,
      selected: true
    })
  });

  return stories;
}

export { selectableStories };
