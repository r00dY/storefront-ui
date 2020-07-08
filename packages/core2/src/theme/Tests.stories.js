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
export const renders = () => <RenderTest />;

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const CustomBox = styled.div(props => ({
  padding: "10px",
  color: props.on ? "red" : "black"
}));

export const emotion = () => {
  const [x, setX] = useState(false);

  // const sth = css`
  //     padding: 10px;
  //     background-color: yellow;
  //     color: ${x ? "red" : "black"}
  // `;

  const sth = css([
    {
      padding: "10px",
      backgroundColor: "yellow"
    },
    {
      color: x ? "red" : "black"
    }
  ]);

  const items = [];
  for (let i = 0; i < 1000; i++) {
    items.push(
      <Box
        sx={{
          p: [10, 20, 30, 40, 50]
        }}
      >
        Dupa
      </Box>
    );

    // items.push(<CustomBox>Dupa</CustomBox>)

    // items.push(<div css={{
    //     padding: "10px"
    // }}>Dupa</div>)

    // items.push(<div style={{
    //     padding: "10px"
    // }}>Dupa</div>)
  }

  return (
    <Box
      sx={{
        p: [10, 20, 30, 40, 50]
      }}
    >
      <div css={sth}>test</div>
      <button onClick={() => setX(!x)}>change</button>

      {items}
    </Box>
  );
};

export default {
  title: "Tests"
};
