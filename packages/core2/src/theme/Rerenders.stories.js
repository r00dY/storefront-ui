import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";

const Test1 = ({ children }) => {
  console.log("Test1 render: ", children);

  return <div>Test1: {children}</div>;
};

const Content = ({ prop }) => {
  console.log("render content");

  return <div>* {prop}</div>;
};

const RenderTest = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      {/*<Test1>Marcin <Content prop={<Box># {counter}</Box>} /></Test1>*/}
      <Test1>
        Krzysiu <Content />
      </Test1>
      <Test1>
        Szymon <Content />
      </Test1>
      <Test1>
        Andrzej <Content />
      </Test1>

      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>

      {/*<Test1>Counter {counter} <Content /></Test1>*/}
    </div>
  );
};
export const basic = () => <RenderTest />;

export default {
  title: "Rerenders test"
};
