/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ColorRowWithPrice from ".";
import product from "../../../../theme/data";

export const standard = () => (
  <div sx={{ maxWidth: "500px" }}>
    <h2>Promo</h2>
    <StoryWrapper
      stories={selectableStories(
        <ColorRowWithPrice
          color={"red"}
          label={"Lava red"}
          productVariant={product.variants[0]}
        />
      )}
    />

    <h2>No promo</h2>
    <StoryWrapper
      stories={selectableStories(
        <ColorRowWithPrice
          color={"blue"}
          label={"Lava red"}
          productVariant={product.variants[10]}
        />
      )}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.ColorRowWithPrice"
};
