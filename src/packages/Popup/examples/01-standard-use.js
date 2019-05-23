import React, { useState } from "react";

import { Button } from "storefront-ui/Button";
import Popup from "storefront-ui/Popup";
import StorefrontUIContext from "storefront-ui/StorefrontUIContext";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
  return (
    <div>
      <p>Standard</p>
      <Popup trigger={<Button appearance={"test"}>Open dropdown</Button>}>
        <div
          css={css`
            padding: 10px;
          `}
        >
          Hello world!
        </div>
      </Popup>

      <p>
        <code>size=large</code>
      </p>
      <Popup
        trigger={<Button appearance={"test"}>Open dropdown</Button>}
        size={"large"}
      >
        <div
          css={css`
            padding: 10px;
          `}
        >
          Hello world!
        </div>
      </Popup>

      <p>
        <code>size=small</code>
      </p>
      <Popup
        trigger={<Button appearance={"test"}>Open dropdown</Button>}
        size={"small"}
      >
        <div
          css={css`
            padding: 10px;
          `}
        >
          Hello world!
        </div>
      </Popup>

      <p>
        Custom look (no shadow, border, background yellow), closing by button
        inside popup
      </p>
      <Popup
        trigger={<Button appearance={"test"}>Open dropdown</Button>}
        size={"small"}
        styles={`
                border: 1px solid black;
                background-color: yellow;
            `}
      >
        {closePopup => (
          <div
            css={css`
              padding: 10px;
            `}
          >
            <button onClick={closePopup}>Close me</button>
          </div>
        )}
      </Popup>

      <p>Custom appearance registered (as default)</p>

      <StorefrontUIContext.Provider
        value={{
          Popup: {
            default: () => ({
              styles: `
                        border: 1px solid black;
                        background-color: red;
                    `,
              size: {
                width: 500,
                maxHeight: 500
              }
            })
          }
        }}
      >
        <Popup trigger={<Button appearance={"test"}>Open dropdown</Button>}>
          Hello world.
        </Popup>
      </StorefrontUIContext.Provider>

      <p>It's possible to register custom sizes</p>

      <StorefrontUIContext.Provider
        value={{
          PopupSize: {
            tiny: {
              width: 100,
              maxHeight: 300
            }
          }
        }}
      >
        <Popup
          size="tiny"
          trigger={<Button appearance={"test"}>Open dropdown</Button>}
        >
          Tiny.
        </Popup>
      </StorefrontUIContext.Provider>
    </div>
  );
};
