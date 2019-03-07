import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Container from "../Container/Container";
import Dots from "./Dots";
import Color from "../Color";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Story() {
    const [active, setActive] = useState(0);

    return (
        <Container>
            <h1>Dots</h1>
            <h2>Standard</h2>
            <Dots active={active} onClick={setActive} amount={10} />
            <h2>Vertical</h2>
            <Dots
                active={active}
                onClick={setActive}
                amount={10}
                vertical={true}
            />
            <h2>Custom</h2>
            <Dots
                active={active}
                onClick={setActive}
                amount={10}
                spaceWidth={30}
                spaceHeight={30}
                hoverColor={new Color("red")}
                dotSize={10}
                color={new Color("blue")}
                activeColor={new Color("coral")}
            />
        </Container>
    );
}

storiesOf("Dots", module).add("default", () => <Story />);
