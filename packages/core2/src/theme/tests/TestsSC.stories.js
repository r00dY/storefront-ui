import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import { useTheme } from "@commerce-ui/core/Theme";

import styled from "styled-components";

const Comp = styled.div`
  padding: 20px;
  background: red;
  color: white;
`;

const Comp2 = styled.div({
  padding: "20px",
  background: "green",
  color: "white"
});

function generate(color) {
  const CompNew = styled.div({
    padding: "20px",
    background: color,
    color: "white"
  });
  return CompNew;
}

const Comp3 = generate("coral");

const Comp4 = generate("antiquewhite");

const DComp = styled.div`
  padding: 20px;
  background: red;
  color: ${p => p.color};
`;

const DComp2 = styled.div([
  {
    padding: "20px",
    color: "white"
  },
  p => ({
    background: p.color
  })
]);

export const testSC = () => {
  const [a, setA] = useState(0);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>rerender</button>
      <Comp>cze</Comp>
      <Comp2>cze2</Comp2>
      <Comp3>cze3</Comp3>
      <Comp4>cze4</Comp4>
      <DComp color={a % 2 === 0 ? "blue" : "white"}>cze5</DComp>
      <DComp color={a % 2 === 0 ? "magenta" : "cyan"}>cze6</DComp>
    </div>
  );
};

export default {
  title: "TestsSC"
};
