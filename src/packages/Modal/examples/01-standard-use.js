import React, { useState, useEffect, useRef } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Modal } from "../../../../demo/components/Modal";
import Color from "storefront-ui/Color";
import Ease from "storefront-ui/Ease";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

import { Button } from "../../../../demo/components/Button";
import { StatefulPopover } from "../../../../demo/components/Popover";

export default () => {
  const configs = [
    // center
    {
      mode: "center",
      width: {
        xs: "90%",
        lg: "50%"
      },
      height: {
        xs: "90%",
        lg: "50%"
      }
    },
    // from right
    {
      mode: "right",
      width: {
        xs: "90vw",
        md: "50vw",
        lg: "33vw"
      }
    },
    // from left
    {
      mode: "left",
      width: "80%",
      animationTime: 0.8,
      animationEase: Ease.expoInOut
    },
    // from bottom, custom background color
    {
      mode: "bottom",
      height: "30%",
      backgroundColor: new Color("rgba(255, 0, 0, 0.2)")
    },
    // responsive
    {
      xs: {
        mode: "top",
        height: "90%"
      },
      md: {
        mode: "right",
        width: "50%"
      }
    },
    // height auto
    {
      mode: "center",
      height: "auto"
    }
  ];

  const [opened, setOpened] = useState(false);
  const [config, setConfig] = useState(null);

  const [inlineOpened, setInlineOpened] = useState(false);

  return (
    <div>
      <p>Click to open overlay in different configurations</p>

      <button
        onClick={() => {
          setConfig(configs[0]);
          setOpened(true);
        }}
      >
        mode: center, responsive size
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setConfig(configs[1]);
          setOpened(true);
        }}
      >
        mode: right, responsive size
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setConfig(configs[2]);
          setOpened(true);
        }}
      >
        mode: left, custom animation
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setConfig(configs[3]);
          setOpened(true);
        }}
      >
        mode: bottom, red background
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setConfig(configs[4]);
          setOpened(true);
        }}
      >
        mode: top on mobile, mode: right on desktop
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setConfig(configs[5]);
          setOpened(true);
        }}
      >
        mode: center, height: auto
      </button>
      <br />
      <br />
      <p>
        In <code>height: auto</code> mode it's good to remember to set{" "}
        <code>max-height</code> on modal content.
      </p>

      <Modal
        config={config}
        isOpen={opened}
        onRequestClose={() => setOpened(false)}
        header={"Modal example"}
      >
        <LoremIpsum />
        <br />

        <Button onClick={() => setOpened(false)}>Close overlay</Button>
        <br />
        <br />
        <Button onClick={() => setInlineOpened(true)}>Open inline modal</Button>
        <br />
        <br />

        <StatefulPopover
          content={
            <div
              css={css`
                width: 200px;
                height: 300px;
                background-color: red;
              `}
            />
          }
        >
          <Button onClick={() => setInlineOpened(true)}>Open popover</Button>
        </StatefulPopover>
      </Modal>

      <Modal
        config={{
          mode: "center",
          width: "50%",
          height: "50%"
        }}
        header={null}
        isOpen={inlineOpened}
        onRequestClose={() => setInlineOpened(false)}
      >
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />

        <StatefulPopover
          content={
            <div
              css={css`
                width: 200px;
                height: 300px;
                background-color: red;
              `}
            />
          }
        >
          <Button onClick={() => setInlineOpened(true)}>Open popover</Button>
        </StatefulPopover>
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
      </Modal>
    </div>
  );
};
