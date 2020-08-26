import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";

import useWindowSize from "@commerce-ui/core/useWindowSize";

const Test1 = ({ children }) => {
  console.log("Test1 render: ", children);

  const size = useWindowSize();

  console.log(size);

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

// import {css, jsx} from "@emotion/core";
// import styled from "@emotion/styled";
import styled from "styled-components";
import theme from "../theme";

import { styledProvider } from "@commerce-ui/core/Box";

const styledBox = styledProvider(theme);

// const CustomBox = styled.div(props => ({
//     padding: "10px",
//     color: props.on ? "red" : "black"
// }), theme);

const MyBox = styledBox(
  {
    p: [10, 20, 30, 40, 50],
    color: "red"
  },
  undefined,
  theme
);

const MyBoxWrapper = styledBox(
  {
    color: "red",
    bg: "antiquewhite",
    width: 500,
    height: 500,
    marginBottom: 32
  },
  { fitW: true, fitH: true },
  theme
);

// const Wrapper = styledBox({
//     width: 200,
//     height: 200
// }, theme);
//
const MyBoxDynamic = styledBox(
  {
    p: [10, 20, 30, 40, 50],
    color: props => (props.x ? "red" : "blue")
  },
  undefined,
  theme
);

const TestBox = styled.div({
  padding: 10,
  color: "blue"
});

export const emotion = () => {
  const [x, setX] = useState(false);

  // const sth = css`
  //     padding: 10px;
  //     background-color: yellow;
  //     color: ${x ? "red" : "black"}
  // `;

  // const sth = css([
  //     {
  //         padding: "10px",
  //         backgroundColor: "yellow"
  //     },
  //     {
  //         color: x ? "red" : "black"
  //     }
  // ]);

  const items = [];
  for (let i = 0; i < 1000; i++) {
    // items.push(
    //   <Box
    //     sx={{
    //       p: [10, 20, 30, 40, 50]
    //     }}
    //   >
    //     Dupa
    //   </Box>
    // );

    items.push(<MyBox>Dupa</MyBox>); // ultra fast!
    items.push(
      <MyBox data-dupa={"test"} x={x}>
        Dupa
      </MyBox>
    ); // quite fast (especially on prod)
    items.push(
      <MyBoxDynamic data-dupa={"test"} x={x}>
        Dupa
      </MyBoxDynamic>
    ); // a lot of one-time optimisations, not bad

    // items.push(<TestBox x={x}>test</TestBox>)

    // items.push(<CustomBox>Dupa</CustomBox>)

    // items.push(<div css={{
    //     padding: "10px"
    // }}>Dupa</div>)

    // items.push(<div style={{
    //     padding: "10px"
    // }}>Dupa</div>)
  }

  return (
    <div style={{ padding: 50 }}>
      {/*<MyBoxWrapper fitW fitH>*/}
      {/*<div style={{border: "1px solid black"}}>Dupa</div>*/}
      {/*</MyBoxWrapper>*/}

      {/*<div css={sth}>test</div>*/}
      <button onClick={() => setX(!x)}>change</button>

      {items}
    </div>
  );
};

const Comp = styled.div`
  padding: 20px;
  background: red;
  color: white;
`;

export const testSC = () => {
  return (
    <div>
      <Comp>cze</Comp>
    </div>
  );
};

export default {
  title: "Tests"
};
