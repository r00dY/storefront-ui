import React, { useState, useRef } from "react";
import Dialog from "@commerce-ui/core/Dialog";
import Box from "@commerce-ui/core/Box";

import Button from "../Button/Button";

import Paragraph from "../Paragraph";

const Bar = ({ isTop, children }) => (
  <Box
    sx={{
      height: 50,
      width: "100%",
      bg: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: isTop ? t => `1px solid ${t.colors.mono200}` : "none",
      borderTop: !isTop ? t => `1px solid ${t.colors.mono200}` : "none"
    }}
  >
    {children}
  </Box>
);

export const standardDialogWithButton = () => {
  const containerRef = useRef(null);

  return (
    <Box sx={{ maxWidth: 600, p: "s9" }}>
      <Box as={"p"} sx={{ mb: "s9" }}>
        Standard centered dialog
      </Box>

      <Dialog
        width={["90vw", null, null, "50vw"]}
        anchoredTo={"window"}
        button={<Button>Open</Button>}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
      >
        {/*<Box sx={{p: "s8"}}>*/}
        <Paragraph />
        <br />
        <Button>Test button 1</Button>
        <br />
        <br />
        <Button>Test button 2</Button>
        {/*</Box>*/}
      </Dialog>

      <Paragraph sx={{ my: 36, color: "mono300" }} />

      <Box as={"p"} sx={{ my: "s9" }}>
        Anchored to right
      </Box>

      <Dialog
        width={["90vw", null, null, "50vw"]}
        anchoredTo={"window"}
        placement={"right"}
        button={<Button>Open</Button>}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
      >
        {/*<Box sx={{p: "s8"}}>*/}
        <Paragraph />
        <br />
        <Button>Test button 1</Button>
        <br />
        <br />
        <Button>Test button 2</Button>
        {/*</Box>*/}
      </Dialog>

      <Paragraph sx={{ my: 36, color: "mono300" }} />
      <Paragraph sx={{ my: 36, color: "mono300" }} />

      <Box as={"p"} sx={{ my: "s9" }}>
        Below we show responsive dialog. On desktop it's anchored to the button
        (bottom left), on mobile it's anchored to the window (slide from
        bottom).
      </Box>

      <Dialog
        placement={["bottom", null, null, "bottomLeft"]}
        anchoredTo={["window", null, null, "button"]}
        height={["90vh", null, null, "auto"]}
        maxHeight={["auto", null, null, 400]}
        width={["100vw", null, null, 400]}
        button={<Button>Open</Button>}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
        container={{ p: "s8" }}
      >
        <Paragraph />
        <br />
        <Button>Test button 1</Button>
        <br />
        <br />
        <Button>Test button 2</Button>
      </Dialog>

      <Paragraph sx={{ my: 36, color: "mono300" }} />

      <p>Header and footer + close callback</p>

      <Dialog
        width={350}
        height={450}
        button={<Button>Open</Button>}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
        container={{ p: "s8" }}
        header={<Bar isTop={true}>Hello</Bar>}
        footer={<Bar isTop={false}>This goes to the bottom</Bar>}
      >
        {({ close }) => (
          <>
            <Paragraph />
            <br />
            <Button onClick={close}>Close modal</Button>
          </>
        )}
      </Dialog>

      <p>Header and footer (anchored to window)</p>

      <Dialog
        width={350}
        height={450}
        anchoredTo={"window"}
        button={<Button>Open</Button>}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
        container={{ p: "s8" }}
        header={<Bar isTop={true}>Hello</Bar>}
        footer={<Bar isTop={false}>This goes to the bottom</Bar>}
      >
        <Paragraph />
        <br />
        <Button>Test button 1</Button>
        <br />
        <br />
        <Button>Test button 2</Button>
      </Dialog>

      <p>Below we show how to create dialog with the width of the button</p>

      <Box fitW>
        <Dialog
          width={({ anchorRect }) => anchorRect.width}
          height={450}
          anchoredTo={"button"}
          button={<Button>Open</Button>}
          root={{
            boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
            bg: "mono100"
          }}
          container={{ p: "s8" }}
          header={<Bar isTop={true}>Hello</Bar>}
          footer={<Bar isTop={false}>This goes to the bottom</Bar>}
        >
          <Paragraph />
          <br />
          <Button>Test button 1</Button>
          <br />
          <br />
          <Button>Test button 2</Button>
        </Dialog>
      </Box>

      <p>Dialog anchored to other component</p>

      <Box sx={{ border: "1px dotted black", p: "s9" }} _ref={containerRef}>
        <Box fitW>
          <Dialog
            width={({ anchorRect }) => anchorRect.width}
            height={450}
            anchoredTo={containerRef}
            button={<Button>Open</Button>}
            root={{
              boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
              bg: "mono100"
            }}
            container={{ p: "s8" }}
            header={<Bar isTop={true}>Hello</Bar>}
            footer={<Bar isTop={false}>This goes to the bottom</Bar>}
          >
            <Paragraph />
            <br />
            <Button>Test button 1</Button>
            <br />
            <br />
            <Button>Test button 2</Button>
          </Dialog>
        </Box>
      </Box>

      <Paragraph sx={{ my: 36, color: "mono300" }} />
      <Paragraph sx={{ my: 36, color: "mono300" }} />
    </Box>
  );
};

export const dialogWithoutButtonManagedFromParentComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box sx={{ maxWidth: 600, p: "s9" }}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open dialog button 1
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open dialog button 2
      </Button>

      <Dialog
        width={["90vw", null, null, "50vw"]}
        anchoredTo={"window"}
        root={{
          boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
          bg: "mono100"
        }}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ p: "s8" }}>
          <Paragraph />
          <br />
          <Button>Test button 1</Button>
          <br />
          <br />
          <Button>Test button 2</Button>
        </Box>
      </Dialog>

      <Paragraph sx={{ my: 36, color: "mono300" }} />
    </Box>
  );
};

export default {
  title: "approved.Dialog"
};
