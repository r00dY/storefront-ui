import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Modal } from "../../../../demo/components/Modal";
import StorefrontUIContext from "storefront-ui/StorefrontUIContext";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpened(true);
        }}
      >
        open modal
      </button>

      <Modal
        isOpen={opened}
        onRequestClose={() => setOpened(false)}
        config={{
          mode: "center",
          width: {
            xs: "90%",
            lg: "50%"
          },
          height: {
            xs: "90%",
            lg: "50%"
          }
        }}
        header={() => <div>Cześć</div>}
        footer={() => <div>Nara</div>}
      >
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <button onClick={() => setOpened(false)}>Close overlay</button>
      </Modal>
    </div>
  );
};
