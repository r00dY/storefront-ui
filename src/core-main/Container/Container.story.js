import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "./Container";
import { rs, rssv } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Content = () => (
    <div
        css={css`
            border: 1px solid red;
        `}
    >
        {[...Array(20)].map((e, i) => {
            return (
                <span key={i}>
                    {i}
                    <br />
                </span>
            );
        })}
    </div>
);

storiesOf("Container", module).add("default", () => (
    <div style={{ margin: "24px 0" }}>
        <Container>
            <Content />
        </Container>
    </div>
));

storiesOf("Container", module).add("non-default width", () => (
    <div style={{ margin: "24px 0" }}>
        <Container
            width={{
                xs: "100%",
                lg: 800
            }}
        >
            <Content />
        </Container>
    </div>
));
