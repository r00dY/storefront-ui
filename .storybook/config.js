import { configure } from "@storybook/react";
import { RangeSet, rs, rssv } from "responsive-helpers";
import Layout from "../src/core-main/Layout";
import Container from "../src/core-main/Container/Container";

const req = require.context("../src/core-main/Overlay", true, /story\.js$/);

function loadStories() {
    RangeSet.main = new RangeSet({
        xs: 0,
        sm: 420,
        md: 992,
        lg: 1400,
        xl: 1920
    });

    Layout.main = new Layout({
        container: rs({
            xs: rssv("100vw").subtract(40),
            sm: rssv("100vw").subtract(80),
            md: "90vw",
            lg: "80vw",
            xl: 1400
        }),
        colNumber: 24,
        gutter: rs({
            xs: 10,
            sm: 20,
            md: 25,
            lg: 25,
            xl: 25
        })
    });

    Container.defaultProps = {
        width: Layout.main.container
    };

    req.keys().forEach(req);

    // require('../src/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
