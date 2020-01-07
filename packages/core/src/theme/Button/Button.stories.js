/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import Box from "@commerce-ui/core/Box";

import Button from ".";

const Square20 = () => (
  <div css={{ width: "20px", height: "20px", bg: "currentColor" }} />
);

const TwoButtons = ({ children, wrapper = x => x }) => {
  const button = React.cloneElement(children, {
    onClick: () => {
      console.log("button clicked!");
    }
  });
  const link = React.cloneElement(children, {
    href: "https://wikipedia.org",
    target: "_blank"
  });

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div
        css={{
          width: "50%",
          mr: 2
        }}
      >
        {wrapper(button)}
      </div>

      <div>{wrapper(link)}</div>
    </Box>
  );
};

export const standard = () => (
  <div>
    <p>Natural size</p>
    <div>
      <TwoButtons>
        <Button>Standard button</Button>
      </TwoButtons>
    </div>

    <Button
      css={{
        width: "100%",
        maxWidth: "auto",

        size: "large",
        "@media (min-width: 1024px)": {
          size: "very-large"
        }
      }}
    >
      Yo
    </Button>

    <p>Natural size, very long text</p>
    <TwoButtons
      wrapper={button => <div css={{ width: "300px" }}>{button}</div>}
    >
      <Button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Button>
    </TwoButtons>

    <p>fitWidth and fitHeight (parent controls button size)</p>

    <TwoButtons
      wrapper={button => (
        <div css={{ position: "relative", width: "200px", height: "100px" }}>
          {button}
        </div>
      )}
    >
      <Button css={{ width: "100%", height: "100%" }}>Standard button</Button>
    </TwoButtons>

    <p>fitWidth and fitHeight (text not fitting the size)</p>
    <TwoButtons
      wrapper={button => (
        <div css={{ position: "relative", width: "200px", height: "100px" }}>
          {button}
        </div>
      )}
    >
      <Button css={{ width: "100%", height: "100%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Button>
    </TwoButtons>

    <p>Start enhancer</p>
    <TwoButtons>
      <Button startEnhancer={<Square20 />}>Button with enhancer</Button>
    </TwoButtons>

    <p>End enhancer</p>
    <TwoButtons>
      <Button endEnhancer={<Square20 />}>Button with enhancer</Button>
    </TwoButtons>

    <p>Both enhancers</p>
    <TwoButtons>
      <Button startEnhancer={<Square20 />} endEnhancer={<Square20 />}>
        Button with enhancers
      </Button>
    </TwoButtons>

    <p>Both enhancers long label</p>
    <TwoButtons
      wrapper={button => (
        <div css={{ position: "relative", width: "250px" }}>{button}</div>
      )}
    >
      <Button startEnhancer={<Square20 />} endEnhancer={<Square20 />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Button>
    </TwoButtons>

    <p>Disabled</p>
    <TwoButtons>
      <Button startEnhancer={<Square20 />} endEnhancer={<Square20 />} disabled>
        Button disabled
      </Button>
    </TwoButtons>

    <p>isLoading</p>
    <TwoButtons>
      <Button isLoading>Button with loader</Button>
    </TwoButtons>

    <p>isLoading disabled</p>
    <TwoButtons>
      <Button isLoading disabled>
        Button with loader
      </Button>
    </TwoButtons>
  </div>
);

// export const withCSS = () => (
//     <ButtonRaw
//         css={{
//             p: 4,
//             bg: "lightgrey",
//             color: "navy"
//         }}
//     >
//         Raw button
//     </ButtonRaw>
// );

export default {
  title: "Button"
};
