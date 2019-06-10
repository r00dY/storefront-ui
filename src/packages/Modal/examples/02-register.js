import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Modal } from "../../../../demo/theme/Modal";
import StorefrontUIContext from "storefront-ui/StorefrontUIContext";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
  const [opened, setOpened] = useState(false);

  return (
    <StorefrontUIContext.Provider
      value={{
        Modal: {
          default: ({ children, color = "lightgoldenrodyellow" }) => ({
            children: (
              <div>
                <div
                  css={css`
                    position: absolute;
                    background-color: ${color};
                    width: 100%;
                    height: 100%;
                  `}
                />

                <div
                  css={css`
                    position: relative;
                    padding: 20px;
                    z-index: 1;
                  `}
                >
                  {children}
                </div>
              </div>
            ),
            config: {
              mode: "center",
              width: {
                xs: "90%",
                lg: "50%"
              },
              height: {
                xs: "90%",
                lg: "50%"
              }
            }
          })
        }
      }}
    >
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
          color={"coral"}
        >
          <LoremIpsum />
          <button onClick={() => setOpened(false)}>Close overlay</button>
        </Modal>
      </div>
    </StorefrontUIContext.Provider>
  );
};
