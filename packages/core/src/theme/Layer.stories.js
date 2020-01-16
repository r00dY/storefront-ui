/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Layer from "@commerce-ui/core/Layer";

import Button from "./Button/Button";

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

const LayerWithButton = ({ children, ...restProps }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button>
      <Layer isOpen={isOpen} {...restProps}>
        {children}
      </Layer>
    </div>
  );
};

export const unstyled = () => (
  <div>
    <LayerWithButton>
      <div sx={{ bg: "red", p: 2 }}>Dupa</div>
    </LayerWithButton>

    <br />
    <br />

    <LayerWithButton
      config={{
        mode: "right",
        width: rs({
          xs: "90vw",
          md: "50vw",
          lg: "33vw"
        })
      }}
    >
      <div sx={{ bg: "red", p: 2, height: "100%" }}>Dupa</div>
    </LayerWithButton>

    <br />
    <br />
    <LayerWithButton
      config={{
        xs: {
          mode: "top",
          height: "90%"
        },
        md: {
          mode: "right",
          width: "50%"
        }
      }}
    >
      <div sx={{ bg: "red", p: 2, height: "100%" }}>Dupa</div>
    </LayerWithButton>
  </div>
);

export default {
  title: "Layer"
};