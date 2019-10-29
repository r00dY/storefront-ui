import React, { useState, useEffect, useRef } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { showNotification } from "@commerce-ui/core/Notifications";
import { Button } from "../../../../demo/components/Button";

const Notification = props => (
  <div
    css={css`
      width: 100%;
      padding: 16px;
      background: ${props.color || "red"};
      color: white;
    `}
  >
    ELOOOO! <Button onClick={props.onClose}>X</Button>
  </div>
);

export default () => {
  return (
    <div>
      <Button
        onClick={() => {
          showNotification(({ close }) => (
            <Notification color={"red"} onClose={close} />
          ));
        }}
      >
        Show notification
      </Button>{" "}
      <br />
      <br />
      <Button
        onClick={() => {
          showNotification(<Notification color={"green"} />, {
            placement: "topLeft",
            placementMobile: "top"
          });
        }}
      >
        Show notification top left / mobile top
      </Button>{" "}
      <br />
      <br />
      <Button
        onClick={() => {
          showNotification(<Notification color={"blue"} />, {
            placement: "bottomLeft"
          });
        }}
      >
        Show notification bottom left
      </Button>{" "}
      <br />
      <br />
      <Button
        onClick={() => {
          showNotification(<Notification color={"black"} />, {
            placement: "bottomRight"
          });
        }}
      >
        Show notification bottom right
      </Button>
    </div>
  );
};
