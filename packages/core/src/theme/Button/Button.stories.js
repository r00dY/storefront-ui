/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import Button from ".";

const Square20 = () => (
  <div css={{ width: "20px", height: "20px", bg: "currentColor" }} />
);

export const standard = () => (
  <div>
    <p>Natural size</p>
    <div>
      <Button>Standard button</Button>
    </div>

    <p>Natural size, very long text</p>
    <div css={{ width: "300px" }}>
      <Button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Button>
    </div>

    <p>fitWidth and fitHeight (parent controls button size)</p>
    <div css={{ position: "relative", width: "200px", height: "100px" }}>
      <Button fitWidth fitHeight>
        Standard button
      </Button>
    </div>

    <p>fitWidth and fitHeight (text not fitting the size)</p>
    <div css={{ position: "relative", width: "200px", height: "100px" }}>
      <Button fitWidth fitHeight>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Button>
    </div>

    <p>Start enhancer</p>
    <div>
      <Button startEnhancer={<Square20 />}>Button with enhancer</Button>
    </div>

    <p>End enhancer</p>
    <div>
      <Button endEnhancer={<Square20 />}>Button with enhancer</Button>
    </div>

    <p>Both enhancers</p>
    <div>
      <Button startEnhancer={<Square20 />} endEnhancer={<Square20 />}>
        Button with enhancers
      </Button>
    </div>

    <p>Disabled</p>
    <div>
      <Button startEnhancer={<Square20 />} endEnhancer={<Square20 />} disabled>
        Button disabled
      </Button>
    </div>

    <p>isLoading</p>
    <div>
      <Button isLoading>Button with loader</Button>
    </div>

    <p>isLoading disabled</p>
    <div>
      <Button isLoading disabled>
        Button with loader
      </Button>
    </div>
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
