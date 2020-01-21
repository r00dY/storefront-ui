/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Counter from "./index";
import ButtonMinimal from "../Button/ButtonMinimal";
import { Button$ } from "@commerce-ui/core/Button2";
import InputRaw$ from "@commerce-ui/core/InputRaw";

import { useCounter } from "@commerce-ui/core/Counter";

export const unstyled = () => (
  <div>
    <Counter />
  </div>
);

export const hook = () => {
  const counter = useCounter({ step: 6 });

  return (
    <div>
      <ButtonMinimal {...counter.buttonDecrementProps}>-</ButtonMinimal>
      <InputRaw$ {...counter.inputProps} />
      <ButtonMinimal {...counter.buttonIncrementProps}>+</ButtonMinimal>
    </div>
  );
};

export default {
  title: "Counter"
};
