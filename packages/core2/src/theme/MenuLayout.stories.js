import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";
import MenuLayout from "@commerce-ui/core/MenuLayout";
import Button from "./Button/Button";

import Button$ from "@commerce-ui/core/Button";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const VeryLongContent = props => (
  <Box sx={{ p: [16, null, 32], maxWidth: 700, bg: "#f1f1f1" }}>
    {props.children}
    {[...Array(10)].map((e, i) => (
      <Box as={"p"} sx={{ mt: 20 }} key={i}>
        {LOREM}
      </Box>
    ))}
  </Box>
);

const MenuBar = ({ children, color }) => (
  <Box
    sx={{
      position: "relative",
      bg: color,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.5
    }}
  >
    {children}
  </Box>
);

const getContent = (text = "Dupa", padding = 40) => ({
  content: ({ isBeforeAnimation, isVisible, isFirst }) => (
    <Box
      sx={{
        p: padding,
        color: "black",
        transition: `opacity ..35s`, // ${isVisible ? '.1s' : ''}`,// ${isBeforeAnimation && !isVisible && !isFirst ? ".35s" : ""}`, // delay only if "from layer to layer" and when show
        opacity: isVisible ? 1 : 0
      }}
    >
      {text}
    </Box>
  ),

  background: ({ isBeforeAnimation, isVisible }) => ({
    opacity: isVisible ? 1 : 0 // first opacity the
  })
});

export const basic = () => {
  const [menu1Open, setMenu1Open] = useState(true);
  const [menu2Open, setMenu2Open] = useState(true);
  const [menu3Open, setMenu3Open] = useState(true);
  const [menu4Open, setMenu4Open] = useState(true);

  const [layer1Open, setLayer1Open] = useState(false);
  const textRef = useRef(null);

  const contentWithButtons = (
    <VeryLongContent>
      <button onClick={() => setMenu1Open(!menu1Open)}>Menu 1 toggle</button>
      &nbsp;
      <button onClick={() => setMenu2Open(!menu2Open)}>Menu 2 toggle</button>
      &nbsp;
      <button onClick={() => setMenu3Open(!menu3Open)}>Menu 3 toggle</button>
      &nbsp;
      <button onClick={() => setMenu4Open(!menu4Open)}>Menu 4 toggle</button>
      &nbsp;
      <button
        onClick={() => {
          setMenu2Open(!menu2Open);
          setMenu3Open(!menu3Open);
        }}
      >
        Toggle 2 & 3
      </button>
      &nbsp;
      <button onClick={() => setLayer1Open(!layer1Open)}>Toggle layer 1</button>
    </VeryLongContent>
  );

  const [rect, setRect] = useState(null);

  const [initialized, setInitialized] = useState(false);

  const onMount = rect => {
    if (initialized) {
      return;
    }

    const backgroundContainer = document.querySelector(
      ".__menulayersbackground__"
    );
    const background = document.querySelector(
      ".__menulayersbackgroundinside__"
    );
    const containerRect = document
      .querySelector(".__menulayers__")
      .getBoundingClientRect();

    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;

    // backgroundContainer.style.left = `${x}px`;
    // backgroundContainer.style.top = `${y}px`;
    // backgroundContainer.style.width = `${rect.width}px`;
    // backgroundContainer.style.height = `${rect.height}px`;

    backgroundContainer.style.transform = `translateY(${y}px) translateX(${x}px) scaleX(${
      rect.width
    }) scaleY(${rect.height})`;

    if (!initialized) {
      background.style.opacity = 0;
      background.style.transform = "scaleY(0)";
      background.style.transformOrigin = "0 0";

      window.getComputedStyle(background).opacity; // recalculate styles

      background.style.opacity = 1;
      background.style.transform = "none";
      background.style.transition = "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

      backgroundContainer.style.transition =
        "all .35s cubic-bezier(0.19, 1, 0.22, 1)";
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // const [state, setState] = useState({
  //     index: null,
  //     status
  // })

  const initContent = [0, 1, 2, 3].map(i => ({
    content: getContent("Dupa " + i, 40 + i * 30).content,
    mounted: false,
    active: false,
    isBeforeAnimation: false,
    isVisible: false,
    isFirst: false
  }));

  const [index, setIndex_] = useState(null);
  const [status, setStatus] = useState(0);
  const [content, setContent] = useState(initContent);

  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  const [isEmpty, setEmpty] = useState(true);
  const timer = useRef(null);

  const setIndex = i => {
    const backgroundRect = backgroundRef.current.getBoundingClientRect();

    if (i !== null) {
      clearTimeout(timer.current);
    }

    if (isEmpty) {
      // if coming from empty, we set init state for animation
      backgroundRef.current.style.width = "100%";
      backgroundRef.current.style.height = 0;
      backgroundRef.current.style.opacity = 0;
      backgroundRef.current.style.transition = "none";

      containerRef.current.style.left = `${50 * i}px`;
      containerRef.current.style.transition = "none";

      setEmpty(false);
    } else {
      backgroundRef.current.style.width = backgroundRect.width + "px";
      backgroundRef.current.style.height = backgroundRect.height + "px";
      backgroundRef.current.style.transition = "none";
    }

    setStatus(1);

    const newContent = [...content].map((item, j) => {
      return j === i
        ? {
            ...item,
            active: true,
            activeOrLastActive: true,
            isVisible: false
          }
        : {
            ...item,
            active: false,
            activeOrLastActive: i === null ? j === index : false,
            isVisible: true
          };
    });

    setContent(newContent);
    setIndex_(i);
  };

  useLayoutEffect(
    () => {
      if (status === 1) {
        console.log(window.getComputedStyle(backgroundRef.current).height);

        if (index !== null) {
          backgroundRef.current.style.width = "100%";
          backgroundRef.current.style.height = "100%";
          backgroundRef.current.style.opacity = 1;
          backgroundRef.current.style.transition =
            "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

          containerRef.current.style.left = `${50 * index}px`;
          containerRef.current.style.transition =
            "all .35s cubic-bezier(0.19, 1, 0.22, 1)";
        } else {
          backgroundRef.current.style.width = "100%";
          backgroundRef.current.style.height = 0;
          backgroundRef.current.style.opacity = 0;
          backgroundRef.current.style.transition =
            "all .35s cubic-bezier(0.19, 1, 0.22, 1)";

          timer.current = setTimeout(() => {
            setEmpty(true);
          }, 350);
        }

        setContent(
          content.map(item =>
            item.active
              ? { ...item, isVisible: true }
              : { ...item, isVisible: false }
          )
        );
        setStatus(0);
      }
    },
    [status]
  );

  const { buttons, layers, hide } = MenuLayout.useLayers([
    {
      button: (
        <Button$>{({ selected }) => `Item 1 ${selected ? "[X]" : ""}`}</Button$>
      ),
      content: ({ isVisible }) => (
        <Box
          sx={{
            color: "white",
            p: 100,
            opacity: isVisible ? 1 : 0,
            transition: isVisible ? "all .3s .15s" : "all .1s"
          }}
        >
          Test
        </Box>
      )
    },
    {
      button: (
        <Button$>{({ selected }) => `Item 2 ${selected ? "[X]" : ""}`}</Button$>
      ),
      content: ({ isVisible }) => (
        <Box
          sx={{
            color: "white",
            p: 150,
            opacity: isVisible ? 1 : 0,
            transition: isVisible ? "all .3s .15s" : "all .1s"
          }}
        >
          Test 2
        </Box>
      ),
      offsetY: 20
    },
    {
      button: (
        <Button$>{({ selected }) => `Item 3 ${selected ? "[X]" : ""}`}</Button$>
      ),
      content: ({ isVisible }) => (
        <Box
          sx={{
            color: "white",
            p: 200,
            width: "100vw",
            opacity: isVisible ? 1 : 0,
            transition: isVisible ? "all .3s .15s" : "all .1s"
          }}
        >
          Test 3
        </Box>
      ),
      anchoredTo: "window",
      width: "100%"
    },
    {
      button: (
        <Button$>{({ selected }) => `Item 4 ${selected ? "[X]" : ""}`}</Button$>
      ),
      content: ({ isVisible }) => (
        <Box
          sx={{
            color: "white",
            p: 300,
            width: "100vw",
            opacity: isVisible ? 1 : 0,
            transition: isVisible ? "all .3s .15s" : "all .1s"
          }}
        >
          Test 4
        </Box>
      ),
      anchoredTo: "window",
      width: "100%"
    }
  ]);

  return (
    <MenuLayout
      offset={0}
      contentAbove={
        <Box sx={{ bg: "black", color: "white", p: 40, width: "100%" }}>
          {LOREM} {LOREM} {LOREM}
          {buttons} &nbsp;{" "}
          <Button
            onClick={() => {
              hide();
            }}
          >
            Hide
          </Button>
          {layers}
        </Box>
      }
    >
      {mounted &&
        ReactDOM.createPortal(
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0
              // transform: typeof index === "number" ? "translateX(" + index * 50 + "px)" : "none",
              // transition: "all .35s cubic-bezier(0.19, 1, 0.22, 1)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0
              }}
              _ref={containerRef}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transformOrigin: "0 0",
                  zIndex: -1
                }}
                _ref={backgroundRef}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "all .35s cubic-bezier(0.19, 1, 0.22, 1)",
                    bg: "coral"
                    // transformOrigin: "0 0",
                    // transform: isAnyContentActive ? "none" : "scaleY(0)"
                    // opacity: isAnyContentActive ? 1 : 0
                  }}
                />
              </Box>

              <Box>
                {content.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: item.activeOrLastActive
                        ? "relative"
                        : "absolute",
                      pointerEvents: item.active ? "default" : "none",
                      top: 0,
                      left: 0,
                      zIndex: item.active ? 1 : 0,
                      width: "max-content"
                    }}
                  >
                    {item.content(item)}
                  </Box>
                ))}
              </Box>
            </Box>

            {/*<Box>*/}
            {/*{content}*/}
            {/*</Box>*/}

            {/*<Box sx={{position: "absolute", top: 0, left: 0}}>*/}
            {/*{newContent}*/}
            {/*</Box>*/}
          </Box>,
          document.querySelector(".__menulayers__")
        )}

      <MenuLayout.MenuBar open={menu1Open} takesSpace={true}>
        <MenuBar color={"lightblue"}>
          {/*<Box as={"p"} ref={textRef}>*/}
          {/*Menu bar content lorem ipsum dolro sit amet*/}
          {/*</Box>*/}
          <MenuLayout.Layer
            posX={"left"}
            offsetY={10}
            offsetX={0}
            button={<Button>Open menu</Button>}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  p: 40,
                  bg: "white"
                }}
              >
                Dupa
              </Box>
            </Box>
          </MenuLayout.Layer>
          &nbsp;&nbsp;
          <MenuLayout.Layer
            posX={"left"}
            offsetY={10}
            offsetX={0}
            button={<Button>Open menu</Button>}
          >
            <Box
              sx={{
                // opacity: before ? 0 : 1,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  p: 100,
                  bg: "white"
                }}
              >
                Dupa 2
              </Box>
            </Box>
          </MenuLayout.Layer>
          &nbsp;&nbsp;
          <MenuLayout.Layer
            posX={"left"}
            offsetY={0}
            offsetX={0}
            button={<Button>Open menu window</Button>}
            anchoredTo={"window"}
            width={"100%"}
          >
            <Box
              sx={{
                // opacity: before ? 0 : 1,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  p: 100,
                  bg: "white"
                }}
              >
                Dupa 2
              </Box>
            </Box>
          </MenuLayout.Layer>
          &nbsp;&nbsp;
          <MenuLayout.Layer
            posX={"left"}
            offsetY={10}
            offsetX={0}
            openOnHover={false}
            button={<Button>Open menu click</Button>}
          >
            <Box
              sx={{
                p: 40,
                bg: "white"
              }}
            >
              Dupa
            </Box>
          </MenuLayout.Layer>
        </MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu2Open} takesSpace={false}>
        <MenuBar color={"coral"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBar>

      <MenuLayout.MenuBar open={menu3Open} takesSpace={false}>
        <MenuBar color={"antiquewhite"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBar>

      {contentWithButtons}

      <br />

      <button
        onClick={() => {
          setIndex(0);
        }}
      >
        open 1
      </button>
      <button
        onClick={() => {
          setIndex(1);
        }}
      >
        open 2
      </button>
      <button
        onClick={() => {
          setIndex(2);
        }}
      >
        open 3
      </button>
      <button
        onClick={() => {
          setIndex(3);
        }}
      >
        open 4
      </button>
      <button
        onClick={() => {
          setIndex(null);
        }}
      >
        hide
      </button>

      <MenuLayout.MenuBarSticky open={menu4Open}>
        <MenuBar color={"royalblue"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </MenuLayout.MenuBarSticky>

      {contentWithButtons}

      <Box sx={{ position: "relative", transform: "translateY(-100%)" }}>
        <MenuBar color={"red"}>
          Menu bar content lorem ipsum dolro sit amet
        </MenuBar>
      </Box>
      <br />
      <br />

      {contentWithButtons}
    </MenuLayout>
  );
};

export default {
  title: "MenuLayout"
};
