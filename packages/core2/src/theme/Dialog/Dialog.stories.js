/** @jsx jsx */
import React, { useState, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Dialog from "@commerce-ui/core/Dialog";
import Box from "@commerce-ui/core/Box";

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
        {/*{({anchored}) => (*/}
        <div
          sx={{
            border: "1px solid black",
            height: "100%",
            bg: "red",
            p: 2
          }}
        >
          {children}
        </div>
        {/*)}*/}
      </Dialog>
    </div>
  );
};

const SomeContent = ({ children }) => (
  <div
    sx={{
      border: "1px solid black",
      height: "100%",
      bg: "red",
      p: 2
    }}
  >
    {children}
  </div>
);

const Bar = props => (
  <Box
    sx={{
      height: 50,
      width: "100%",
      bg: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {props.children}
  </Box>
);

export const unstyled = () => (
  <div>
    <Paragraph />

    <Dialog
      placement={["right", null, null, "bottomLeft"]}
      minWidth={["90vw", null, null, "300px"]}
      button={<Button>Open</Button>}
    >
      <SomeContent>
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
      </SomeContent>
    </Dialog>

    <Paragraph />
    <Paragraph />

    <Dialog
      sx={{
        width: ["90vw", null, "50vw", null, "33vw"],
        placement: "right"
      }}
      anchoredTo={"window"}
      button={<Button>Open</Button>}
    >
      <SomeContent>
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
      </SomeContent>
    </Dialog>

    <Paragraph />
    <Paragraph />

    <p>Header and footer</p>

    <Dialog
      width={200}
      height={200}
      button={<Button>Open</Button>}
      root={{
        border: "3px solid blue"
      }}
    >
      <Dialog.Header>
        <Bar>SIEMA</Bar>
      </Dialog.Header>

      <Box sx={{ border: "1px solid black", bg: "red" }}>
        <button>One</button>
        <br />
        <br />
        <button>Two</button>
        <br />
        <br />
        <button>Three</button>
        <br />
        <br />
        <button>Four</button>
        <br />
        <br />
        <button>Five</button>
        <br />
        <br />
        <button>Six</button>
        <br />
        <br />
        <button>seven</button>
        <br />
        <br />
        <button>Eight</button>
        <br />
        <br />
      </Box>

      <Dialog.Footer>
        <Bar>NARA</Bar>
      </Dialog.Footer>
    </Dialog>

    <p>Header and footer (anchored to window)</p>

    <Dialog
      width={400}
      height={200}
      button={<Button>Open</Button>}
      root={{
        border: "3px solid blue"
      }}
      anchoredTo={"window"}
    >
      <Dialog.Header>
        <Bar>SIEMA</Bar>
      </Dialog.Header>

      <Box sx={{ border: "1px solid black", bg: "red" }}>
        <button>One</button>
        <br />
        <br />
        <button>Two</button>
        <br />
        <br />
        <button>Three</button>
        <br />
        <br />
        <button>Four</button>
        <br />
        <br />
        <button>Five</button>
        <br />
        <br />
        <button>Six</button>
        <br />
        <br />
        <button>seven</button>
        <br />
        <br />
        <button>Eight</button>
        <br />
        <br />
      </Box>
      <Dialog.Footer>
        <Bar>NARA</Bar>
      </Dialog.Footer>
    </Dialog>

    <Paragraph />
    <Paragraph />
    <Paragraph />
  </div>
);

export default {
  title: "Dialog"
};
