import { storiesOf } from "@storybook/react";
import Container from "../Container/Container";
import { RangeSet } from "responsive-helpers";
import MediaQuery from "./MediaQuery";
import React from "react";

function Story() {
    return (
        <Container>
            <p>
                <strong>
                    Please resize window to see effects of MediaQuery
                </strong>
            </p>
            <MediaQuery query={"screen and (min-width: 1000px)"}>
                <p>&gt;1000px paragraph</p>
            </MediaQuery>

            <MediaQuery query={"screen and (max-width: 999px)"}>
                <p>&lt;1000px paragraph</p>
            </MediaQuery>

            <MediaQuery query={RangeSet.main.from("md").mediaQuery}>
                <p>from MD up</p>
            </MediaQuery>

            <MediaQuery query={RangeSet.main.to("sm").mediaQuery}>
                <p>from SM down</p>
            </MediaQuery>
        </Container>
    );
}

storiesOf("MediaQuery", module).add("default", () => <Story />);
