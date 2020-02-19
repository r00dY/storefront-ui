/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Layer from "@commerce-ui/core/Layer";

import Button from "./Button/Button";

import Box from "@commerce-ui/core/Box";

const Paragraph = React.forwardRef((props, ref) => (
  <p sx={{ maxWidth: "500px" }} ref={ref}>
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
));

const LayerWithButton = ({
  children,
  anchoredOnDesktop = false,
  anchoredTo,
  ...restProps
}) => {
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const anchor = anchoredTo
    ? anchoredTo
    : anchoredOnDesktop
    ? ["window", null, buttonRef]
    : "window";

  return (
    <Box>
      <Button
        buttonRef={buttonRef}
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          width: "200px"
        }}
      >
        open
      </Button>
      &nbsp;
      <Button
        onClick={() => {
          setOpen(false);
        }}
        sx={{
          width: "200px"
        }}
      >
        close
      </Button>
      <Layer
        isOpen={isOpen}
        onClickOutside={() => setOpen(false)}
        anchoredTo={anchor}
        sx={restProps}
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
    </Box>
  );
};

export const unstyled = () => {
  const paragraphRef = useRef(null);
  const paragraphRef2 = useRef(null);

  return (
    <Box>
      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>Standard</Box>
      </Box>

      <LayerWithButton>
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>Responsive attached to window</Box>
      </Box>

      <LayerWithButton
        width={["90vw", null, "50vw", null, "33vw"]}
        minHeight={["80vh", null, "50vh", null, "33vh"]}
      >
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>placement=right</Box>
      </Box>

      <LayerWithButton
        width={["90vw", null, "50vw", null, "33vw"]}
        placement={"right"}
      >
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>Responsive placement</Box>
      </Box>

      <LayerWithButton
        width={["90vw", null, "50vw", null, "33vw"]}
        height={["80vh", null, "50vh", null, "33vh"]}
        placement={["left", "bottom", "right", "top", "center"]}
      >
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>
          Anchored on desktop, long content, minHeight + maxHeight
        </Box>
      </Box>

      <LayerWithButton
        anchoredOnDesktop={true}
        width={["90vw", null, "300px"]}
        minHeight={[null, null, "300px"]}
        maxHeight={["50vh", null, "400px"]}
      >
        <Box>
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
        </Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>width as function dependent on anchorRect</Box>
      </Box>

      <LayerWithButton
        anchoredOnDesktop={true}
        width={({ anchorRect }) => ["90vw", null, anchorRect.width]}
        minHeight={[null, null, "300px"]}
        maxHeight={["50vh", null, "400px"]}
      >
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph />

      <Box as={"p"}>
        <Box as={"strong"}>
          anchored to another element, paragraph and paragraph2
        </Box>
      </Box>

      <LayerWithButton
        anchoredTo={["window", null, null, paragraphRef, paragraphRef2]}
        width={({ anchorRect }) => ["90vw", null, anchorRect.width]}
        minHeight={[null, null, "300px"]}
        maxHeight={["50vh", null, "400px"]}
      >
        <Box>Lorem ipsum</Box>
      </LayerWithButton>

      <Paragraph ref={paragraphRef} />

      <Paragraph ref={paragraphRef2} />

      <Paragraph />

      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
    </Box>
  );
};

export default {
  title: "Layer"
};
