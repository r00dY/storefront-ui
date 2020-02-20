/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Dialog from ".";

import Button from "../Button/Button";

const Paragraph = () => (
  <p sx={{ maxWidth: "500px" }}>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
    voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
    eum fugiat quo voluptas nulla pariatur?
  </p>
);

const DialogWithButton = ({ children, ...restProps }) => {
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div>
      <Button
        buttonRef={buttonRef}
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button>

      <Button
        onClick={() => {
          setOpen(false);
        }}
      >
        close
      </Button>

      <Dialog
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        anchoredTo={["window", null, null, buttonRef]}
        {...restProps}
      >
        {({ anchored }) => (
          <div
            sx={{
              border: "1px solid black",
              height: "100%",
              minHeight: "100%",
              width: "300px",
              bg: "red",
              p: 2
            }}
          >
            {children}
          </div>
        )}
      </Dialog>
    </div>
  );
};

export const unstyled = () => (
  <div>
    <Paragraph />

    <DialogWithButton
      placement={["right", null, null, "bottomLeft"]}
      minWidth={["90vw", null, null, "300px"]}
    >
      <Button>One</Button>
      <br />
      <br />
      <Button>Two</Button>
      <br />
      <br />
      <Button>Three</Button>
      <br />
      <br />
      <Button>Four</Button>
      <br />
      <br />
    </DialogWithButton>

    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
  </div>
);

export default {
  title: "Dialog"
};
