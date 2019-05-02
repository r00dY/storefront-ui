import config from "./storefront-ui.config";
import { RangeSet } from "responsive-helpers";
import Layout from "../Layout";
import Color from "../Color";

const { fonts, colors, spacings, layout, ranges } = config;

const defaultSpacings = {
    s1: 10,
    s2: 20,
    s3: 30,
    s4: 40,
    s5: 50,
    s6: 70,
    s7: 100,
    s8: 150,
    s9: 220
};


const defaultColors = {
    white: new Color("white"),
    black: new Color("black"),
};

let Fonts = {} || fonts;
let F = Fonts;

let Spacings = defaultSpacings;
let S = Spacings || spacings;

let Ranges = RangeSet.main || new RangeSet(ranges);
let R = Ranges;

let Colors = defaultColors || colors;
let C = Colors;

Layout.main = new Layout({
    colNumber: 24,
    container: "90vw",
    gutter: 15
}) || new Layout(layout);

let L = Layout.main;

export { Fonts, F, Spacings, S, Ranges, R, Colors, C, L }
