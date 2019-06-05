import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

import ButtonStory from "../demo/theme/Button/story";

const content = (
  <div>
    <ButtonStory />
  </div>
);

export default () => <Page>{content}</Page>;
