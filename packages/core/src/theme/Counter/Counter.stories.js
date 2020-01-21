/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Counter from "./index";
import ButtonMinimal from "../Button/ButtonMinimal";
import Button from "../Button/Button";
import { Button$ } from "@commerce-ui/core/Button2";
import InputRaw$ from "@commerce-ui/core/InputRaw";
import Input from "../Input";

import { useCounter } from "@commerce-ui/core/Counter";

import SelectNative$ from "@commerce-ui/core/SelectNative2";

export const unstyled = () => (
  <div>
    <Counter />
  </div>
);

export const hook = () => {
  const counter = useCounter({ step: 6 });

  return (
    <div>
      <Button {...counter.buttonDecrementProps}>-</Button>
      <Input placeholder={"Amount"} {...counter.inputProps} />
      <Button {...counter.buttonIncrementProps}>+</Button>
      <SelectNative$ {...counter.selectProps} />

      <br />

      <Button onClick={() => counter.setValue(0)}>reset</Button>
    </div>
  );
};

export default {
  title: "Counter"
};
