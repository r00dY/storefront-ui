/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Layer from "@commerce-ui/core/Layer";

import Button from "./Button/Button";

import Box from "@commerce-ui/core/Box";

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

const LayerWithButton = ({
  children,
  anchoredOnDesktop = false,
  ...restProps
}) => {
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

      <Layer
        isOpen={isOpen}
        onClickOutside={() => setOpen(false)}
        anchoredTo={anchoredOnDesktop ? ["window", null, buttonRef] : "window"}
        // anchorRef={buttonRef}

        {...restProps}
      >
        {({ anchored }) => (
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              width: "100%",
              minHeight: "inherit",
              maxHeight: "inherit",
              overflow: "auto",
              bg: "red",
              p: 2
            }}
          >
            {children}
          </Box>
        )}
      </Layer>
    </div>
  );
};

export const unstyled = () => (
  <div>
    <Paragraph />

    <LayerWithButton>
      <div>Lorem ipsum</div>
    </LayerWithButton>

    <Paragraph />

    <LayerWithButton
      width={["90vw", null, "50vw", null, "33vw"]}
      minHeight={["80vh", null, "50vh", null, "33vh"]}
    >
      <div>Lorem ipsum</div>
    </LayerWithButton>

    <Paragraph />

    <LayerWithButton
      width={["90vw", null, "50vw", null, "33vw"]}
      placement={"right"}
    >
      <div>Lorem ipsum</div>
    </LayerWithButton>

    <Paragraph />

    <LayerWithButton
      width={["90vw", null, "50vw", null, "33vw"]}
      height={["80vh", null, "50vh", null, "33vh"]}
      placement={["left", "bottom", "right", "top", "center"]}
    >
      <div>Lorem ipsum</div>
    </LayerWithButton>

    <Paragraph />

    <LayerWithButton
      anchoredOnDesktop={true}
      width={["90vw", null, "300px"]}
      minHeight={[null, null, "300px"]}
      maxHeight={["50vh", null, "400px"]}
    >
      <div>
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
        Lorem ipsum
        <br />
      </div>
    </LayerWithButton>

    <Paragraph />
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
  title: "Layer"
};
