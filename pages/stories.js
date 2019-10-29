import React from "react";
import Page from "../packages/core/docs-utils/Page";
import { md, Example, CodeBlock } from "../packages/core/docs-utils/docs";

import ButtonStory from "../demo/components/Button/story";

const content = (
  <div>
    <ButtonStory />
  </div>
);

export default () => <Page>{content}</Page>;
