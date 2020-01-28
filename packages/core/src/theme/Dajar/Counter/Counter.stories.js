/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button2";

import { useCounter } from "@commerce-ui/core/Counter";

import Counter from "./index";

export const standard = () => {
  const counter = useCounter();
  const counterWithStep = useCounter({ step: 6 });

  return (
    <div>
      <h1>Counter step 1</h1>

      <Counter {...counter} />
    </div>
  );
};

export default {
  title: "Dajar.Counter"
};
