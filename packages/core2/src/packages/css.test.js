import { css } from "./css";
import { lin } from "./index";

const theme = {
  space: {
    s1: 10,
    s2: 20,
    s3: 30,
    s4: 40,
    s5: 50,
    s6: 60,
    s7: 70,
    s8: 80,
    s9: 90,
    s10: 100,
    t1: 1,
    t2: 2,
    t3: 3,
    t4: 4,
    t5: 5,
    containerMargin: [5, 15, 25, 35, 45],
    gridGap: [9, 19, 29, 39, 49],
    linS1: lin(100, 200)
  },
  colors: {
    primary: "red",
    secondary: "blue"
  },
  breakpoints: ["100px", "200px", "300px", "400px"],
  typography: {
    body: {
      fontFamily: "sans-serif",
      fontSize: 12,
      textDecoration: "underline"
    }
  }
};

const media = [
  "@media screen and (min-width: 100px)",
  "@media screen and (min-width: 200px)",
  "@media screen and (min-width: 300px)",
  "@media screen and (min-width: 400px)"
];

// Tests if object keys iterate with keeping media queries order correct.
function testOrder(styles) {
  let lastIndex = null;

  for (let key in styles) {
    if (key.startsWith("@")) {
      const index = media.indexOf(key);

      if (index === -1) {
        continue;
      }

      if (lastIndex !== null && index < lastIndex) {
        return false;
      }

      lastIndex = index;
    }
  }

  return true;
}

test("basic styles", () => {
  const styles = css({
    m: 10,
    p: 20,
    color: "red"
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.padding).toBe(20);
  expect(styles.color).toBe("red");
});

test("scalar styles from theme", () => {
  const styles = css({
    m: "s1",
    p: "s2",
    color: "primary"
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.padding).toBe(20);
  expect(styles.color).toBe("red");
});

test("responsive styles", () => {
  const styles = css({
    m: [10, 20, 30, 40, 50],
    p: [1, 2, 3, 4, 5],
    color: ["red", null, "blue"]
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.padding).toBe(1);
  expect(styles.color).toBe("red");

  expect(styles[media[0]].margin).toBe(20);
  expect(styles[media[0]].padding).toBe(2);
  expect(styles[media[0]].color).toBe(undefined);

  expect(styles[media[1]].margin).toBe(30);
  expect(styles[media[1]].padding).toBe(3);
  expect(styles[media[1]].color).toBe("blue");

  expect(styles[media[2]].margin).toBe(40);
  expect(styles[media[2]].padding).toBe(4);
  expect(styles[media[2]].color).toBe(undefined);

  expect(styles[media[3]].margin).toBe(50);
  expect(styles[media[3]].padding).toBe(5);
  expect(styles[media[3]].color).toBe(undefined);

  expect(testOrder(styles)).toBe(true);
});

test("responsive styles with scalar values from theme", () => {
  const styles = css({
    m: ["s1", "s2", "s3", "s4", "s5"],
    p: ["t1", 2, "t3", 4, "t5"],
    color: ["primary", null, "secondary"]
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.padding).toBe(1);
  expect(styles.color).toBe("red");

  expect(styles[media[0]].margin).toBe(20);
  expect(styles[media[0]].padding).toBe(2);
  expect(styles[media[0]].color).toBe(undefined);

  expect(styles[media[1]].margin).toBe(30);
  expect(styles[media[1]].padding).toBe(3);
  expect(styles[media[1]].color).toBe("blue");

  expect(styles[media[2]].margin).toBe(40);
  expect(styles[media[2]].padding).toBe(4);
  expect(styles[media[2]].color).toBe(undefined);

  expect(styles[media[3]].margin).toBe(50);
  expect(styles[media[3]].padding).toBe(5);
  expect(styles[media[3]].color).toBe(undefined);
});

test("responsive styles from theme", () => {
  const styles = css({
    m: "containerMargin"
  })(theme);

  expect(styles.margin).toBe(5);
  expect(styles[media[0]].margin).toBe(15);
  expect(styles[media[1]].margin).toBe(25);
  expect(styles[media[2]].margin).toBe(35);
  expect(styles[media[3]].margin).toBe(45);
});

test("responsive styles with responsive values from theme", () => {
  const styles = css({
    m: ["containerMargin", null, null, 0]
  })(theme);

  expect(styles.margin).toBe(5);
  expect(styles[media[0]].margin).toBe(15);
  expect(styles[media[1]].margin).toBe(25);
  expect(styles[media[2]].margin).toBe(0);

  expect(testOrder(styles)).toBe(true);
});

test("responsive styles with responsive values from theme - ver 2", () => {
  const styles = css({
    m: ["containerMargin", null, null, "s4", "s5"],
    p: ["t1", 2, "t3", 4, "t5"]
  })(theme);

  expect(styles.margin).toBe(5);
  expect(styles.padding).toBe(1);

  expect(styles[media[0]].margin).toBe(15);
  expect(styles[media[0]].padding).toBe(2);

  expect(styles[media[1]].margin).toBe(25);
  expect(styles[media[1]].padding).toBe(3);

  expect(styles[media[2]].margin).toBe(40);
  expect(styles[media[2]].padding).toBe(4);

  expect(styles[media[3]].margin).toBe(50);
  expect(styles[media[3]].padding).toBe(5);

  expect(testOrder(styles)).toBe(true);
});

test("responsive styles with responsive values from theme - ver 3", () => {
  const styles = css({
    p: ["t1", 2, "t3", 4, "t5"],
    m: ["containerMargin", null, null, "s4", "s5"]
  })(theme);

  expect(styles.margin).toBe(5);
  expect(styles.padding).toBe(1);

  expect(styles[media[0]].margin).toBe(15);
  expect(styles[media[0]].padding).toBe(2);

  expect(styles[media[1]].margin).toBe(25);
  expect(styles[media[1]].padding).toBe(3);

  expect(styles[media[2]].margin).toBe(40);
  expect(styles[media[2]].padding).toBe(4);

  expect(styles[media[3]].margin).toBe(50);
  expect(styles[media[3]].padding).toBe(5);

  expect(testOrder(styles)).toBe(true);
});

test("responsive styles with responsive values from theme - ver 4", () => {
  const styles = css({
    gridTemplateColumns: ["unset", null, "repeat(2, 1fr)"],
    p: ["containerMargin", "20px", 0]
  })(theme);

  expect(styles.gridTemplateColumns).toBe("unset");
  expect(styles.padding).toBe(5);

  expect(styles[media[0]].gridTemplateColumns).toBe(undefined);
  expect(styles[media[0]].padding).toBe("20px");

  expect(styles[media[1]].gridTemplateColumns).toBe("repeat(2, 1fr)");
  expect(styles[media[1]].padding).toBe(0);

  expect(styles[media[2]]).toBe(undefined);
  expect(styles[media[2]]).toBe(undefined);

  expect(styles[media[3]]).toBe(undefined);
  expect(styles[media[3]]).toBe(undefined);

  expect(testOrder(styles)).toBe(true);
});

test("linear sizing", () => {
  const styles = css({
    m: lin(10, 30)
  })(theme);

  console.log("linear sizing");
  console.log(styles);
});

test("linear sizing - in responsive array", () => {
  const styles = css({
    m: [0, null, lin(10, 30)]
  })(theme);
  console.log("linear sizing - in responsive array");
  console.log(styles);
});

test("linear sizing - values from theme", () => {
  const styles = css({
    m: lin("s5", "s10")
  })(theme);

  console.log("linear sizing - values from theme");
  console.log(styles);
});

test("linear sizing - in responsive array taken from theme", () => {
  const styles = css({
    m: [0, null, "linS1"]
  })(theme);
  console.log("linear sizing - in responsive array taken from theme");
  console.log(styles);
});

test("linear sizing - in responsive array taken from theme - ver2", () => {
  const styles = css({
    m: ["linS1", null, 99]
  })(theme);

  console.log("linear sizing - in responsive array taken from theme - ver2");
  console.log(styles);
});

test("responsive styles with responsive values from theme - ver 5 (array shorter than number of breakpoints ending with array value from theme)", () => {
  const styles = css({
    m: [0, null, "containerMargin"]
  })(theme);

  expect(styles.margin).toBe(0);
  expect(styles[media[0]]).toBe(undefined);
  expect(styles[media[1]].margin).toBe(25);
  expect(styles[media[2]].margin).toBe(35);
  expect(styles[media[3]].margin).toBe(45);

  expect(testOrder(styles)).toBe(true);
});

test("font work", () => {
  const styles = css({
    m: 10,
    font: "body"
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.fontFamily).toBe("sans-serif");
  expect(styles.fontSize).toBe(12);
  expect(styles.textDecoration).toBe("underline");
});

test("inline objects work", () => {
  const styles = css({
    m: 10,
    font: "body",
    ":hover": {
      m: "s2",
      fontFamily: "serif",
      p: "containerMargin"
    }
  })(theme);

  expect(styles.margin).toBe(10);
  expect(styles.fontFamily).toBe("sans-serif");
  expect(styles[":hover"].margin).toBe(20);
  expect(styles[":hover"].fontFamily).toBe("serif");
  expect(styles[":hover"][media[0]].padding).toBe(15);
});

/**
 * Known bug with array styles not working with explicit media queries
 */
// Known bug!!! Very rare
// test("responsive styles + existing media queries", () => {
//     const styles = css({
//         [media[3]]: {
//             p: 4
//         },
//         [media[2]]: {
//             p: 3
//         },
//         [media[1]]: {
//             p: 2
//         },
//         [media[0]]: {
//             p: 1
//         },
//         m: [10, 20, 30, 40, 50],
//     })(theme);
//
//     expect(styles.margin).toBe(10);
//
//     expect(styles[media[0]].margin).toBe(20);
//
//     expect(styles[media[1]].margin).toBe(30);
//
//     expect(styles[media[2]].margin).toBe(40);
//
//     expect(styles[media[3]].margin).toBe(50);
//
//     expect(testOrder(styles)).toBe(true);
//
//     console.log(styles);
// });
