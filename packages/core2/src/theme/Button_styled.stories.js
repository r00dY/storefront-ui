import React, { useEffect, useState, useRef } from "react";

import Box from "@commerce-ui/core/Box";
import Button from "@commerce-ui/core/Button";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const ButtonCustom = React.forwardRef((props, ref) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOn(!on);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Button
      {...props}
      sx={({ hovered, selected, loading }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 6,
        bg: hovered ? "yellow" : "antiquewhite",
        border: selected ? "1px solid black" : "none",
        color: "black"
      })}
      ref={ref}
    >
      {({ loading }) => (
        <>
          {props.children} {on && loading && "(loading...)"}
        </>
      )}
    </Button>
  );
});

const ButtonVeryCustom$ = Button.styled({
  sx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 6,
    bg: (p, s) => (s.hovered ? "yellow" : "antiquewhite"),
    border: (p, s) => (s.selected ? "1px solid black" : "none"),
    color: "black"
  },
  children: (p, s) => (
    <>
      {p.children} {p.on && s.loading && "(loading...)"}
    </>
  )
});

const ButtonVeryCustom = React.forwardRef((props, ref) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOn(!on);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <ButtonVeryCustom$ {...props} on={on} ref={ref} />;
});

const ButtonStandard = Button.styled({
  sx: {
    color: "red",
    font: "body2"
  }
});

const ButtonWithBorder = Button.styled({
  sx: {
    borderWidth: "1px",
    borderColor: "red",
    borderStyle: "solid"
  }
});

export const basic = () => {
  const exampleRef = useRef(null);
  const testRef = useRef(null);

  useEffect(() => {
    console.log("### BUTTON EXAMPLE REF ###", exampleRef);
  }, []);

  return (
    <Box sx={{ maxWidth: "800px" }}>
      <StoryWrapper
        stories={[
          {
            name: "Standard",
            component: (
              <ButtonStandard
                onClick={() => alert("clicked!")}
                onMouseEnter={() => console.log("on mouse over")}
                onMouseLeave={() => console.log("on mouse leave")}
                ref={exampleRef}
              >
                Lorem ipsum dolor sit amet
              </ButtonStandard>
            )
          },
          {
            name: "Standard as href",
            component: (
              <ButtonStandard href={"#"} onClick={() => alert("clicked!")}>
                Lorem ipsum dolor sit amet
              </ButtonStandard>
            )
          },
          {
            name: "Component (+ callback ref)",
            component: (
              <ButtonVeryCustom
                onClick={() => alert("clicked!")}
                ref={element => {
                  console.log("callback ref", element);
                }}
              >
                Lorem ipsum dolor sit amet
              </ButtonVeryCustom>
            )
          },
          {
            name: "Selected",
            component: (
              <ButtonVeryCustom onClick={() => alert("clicked!")} selected>
                Lorem ipsum dolor sit amet
              </ButtonVeryCustom>
            )
          },
          {
            name: "Loading",
            component: (
              <ButtonVeryCustom onClick={() => alert("clicked!")} isLoading>
                Lorem ipsum dolor sit amet
              </ButtonVeryCustom>
            )
          },
          {
            name: "fitW + fitH",
            component: (
              <Box sx={{ width: 300, height: 300 }} fitW fitH>
                <ButtonCustom onClick={() => alert("clicked!")}>
                  Lorem ipsum dolor sit amet
                </ButtonCustom>
              </Box>
            )
          },
          // {
          //     name: "Compound component inside (with callbacks)",
          //     component: (
          //         <Button onClick={() => alert("clicked!")}>
          //             {({hovered}) => (
          //                 <Box
          //                     sx={{
          //                         bg: hovered ? "red" : "coral",
          //                         color: "white",
          //                         p: 16
          //                     }}
          //                 >
          //                     Content
          //                 </Box>
          //             )}
          //         </Button>
          //     )
          // },
          {
            name: "Button with border (reset shouldn't override it)",
            component: (
              <ButtonWithBorder onClick={() => alert("clicked!")}>
                Lorem ipsum dolor sit amet
              </ButtonWithBorder>
            )
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "approved.Button_styled"
};
