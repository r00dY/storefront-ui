import { RangeSet } from "responsive-helpers";
import Layout from "../Layout";
import Color from "../Color";

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
  black: new Color("black")
};

let Fonts = {};
let F = Fonts;

let Spacings = defaultSpacings;
let S = Spacings;

let Ranges = RangeSet.main;
let R = Ranges;

let Colors = defaultColors;
let C = Colors;

let L = new Layout({
  colNumber: 24,
  container: "90vw",
  gutter: 15
});

function applyConfig(config) {
  if (config.fonts) {
    Fonts = config.fonts;
    F = Fonts;
  }

  if (config.colors) {
    Colors = config.colors;
    C = Colors;
  }

  if (config.spacings) {
    Spacings = config.spacings;
    S = Spacings;
  }

  if (config.ranges) {
    RangeSet.main = new RangeSet(config.ranges);
    Ranges = RangeSet.main;
    R = Ranges;
  }

  if (config.layout) {
    Layout.main = new Layout(config.layout);
    L = Layout.main;
  }
}

export { applyConfig, Fonts, F, Spacings, S, Ranges, R, Colors, C, L };
