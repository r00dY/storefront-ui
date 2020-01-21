/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Counter from "./index";
import ButtonMinimal from "../Button/ButtonMinimal";
import { Button$ } from "@commerce-ui/core/Button2";

export const unstyled = () => (
  <div>
    <Counter />
  </div>
);

export default {
  title: "Counter"
};
