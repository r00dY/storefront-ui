import React, { useState } from "react";
import { ItemListAccordion } from "../../../../components/ItemListAccordion";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function generateItems(n) {
  let items = [];

  for (let i = 0; i < n; i++) {
    items.push({
      id: `id${i}`,
      name: `Item ${i}`,
      selected: i % 5 === 4
    });
  }

  return items;
}

export default () => {
  return (
    <div>
      <p>Basic use case</p>

      <ItemListAccordion items={generateItems(10)} />

      <p>
        <code>amountOfAlwaysVisible={3}</code>
      </p>

      <ItemListAccordion items={generateItems(10)} amountOfAlwaysVisible={3} />

      <p>
        <code>minAmountToShowAccordion={20}</code>
      </p>

      <ItemListAccordion
        items={generateItems(10)}
        minAmountToShowAccordion={20}
      />

      <p>Empty list</p>

      <ItemListAccordion items={[]} />

      <p>Single item list</p>

      <ItemListAccordion items={generateItems(1)} />
    </div>
  );
};
