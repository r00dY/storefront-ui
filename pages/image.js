import React from "react";
import Page from "../docs-utils/Page";
import { md, Example, CodeBlock } from "../docs-utils/docs";

const content = md`
# Image

\`Image\` handles showing images.

It does many tasks under the hood so that you don't have to worry about them:
- images are lazy loaded out-of-the-box
- even if image is not loaded, \`Image\` component takes space of this image in layout. It prevents layout blinking / moving when photos get downloaded finally.
- you have \`cover\`, \`contain\` and \`natural\` modes for images and despite that, they're always displayed as \`img\` or \`picture\` so that \`alt\` tag is preserved. This helps SEO.
- IE compatible with good fallbacks

## Examples

### Data

Examples import example images from a helper \`images.js\` file:

${<CodeBlock code={require("!!raw-loader!../data/images.js")} />}

### Standard use

${(
  <Example
    code={require("!!raw-loader!../src/packages/Image/examples/01-standard-use.js")}
    component={
      require("../src/packages/Image/examples/01-standard-use.js").default
    }
  />
)}

### Custom loading behaviour

${(
  <Example
    code={require("!!raw-loader!../src/packages/Image/examples/02-custom-load-time.js")}
    component={
      require("../src/packages/Image/examples/02-custom-load-time.js").default
    }
  />
)}

### \`ImageZoomable\`

${(
  <Example
    code={require("!!raw-loader!../src/packages/Image/examples/03-image-zoomable.js")}
    component={
      require("../src/packages/Image/examples/03-image-zoomable.js").default
    }
  />
)}

### Videos

It's very easy to add videos instead of images. Actually you must use \`Image\` component too. It's not video player. It's just a "moving content", like in Harry Potter. API is exactly the same, just use \`video\` prop instead of image.

${(
  <Example
    code={require("!!raw-loader!../src/packages/Image/examples/04-video.js")}
    component={require("../src/packages/Image/examples/04-video.js").default}
  />
)}

### Context, global default props

You can set default \`Image\` props in \`StorefrontUIContext\` globally.

${(
  <Example
    code={require("!!raw-loader!../src/packages/Image/examples/05-context.js")}
    component={require("../src/packages/Image/examples/05-context.js").default}
  />
)}
`;

export default () => <Page>{content}</Page>;
