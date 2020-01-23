const ringOptions = [
  {
    name: "Style",
    values: [
      {
        name: "Heritage"
      },
      {
        name: "Balance"
      }
    ]
  },
  {
    name: "Color",
    values: [
      {
        name: "Silver",
        color: "lightgrey"
      },
      {
        name: "Black",
        color: "grey"
      },
      {
        name: "Stealth",
        color: "red"
      },
      {
        name: "Diamond",
        color: "yellow"
      }
    ]
  },
  {
    name: "Size",
    values: [
      {
        name: "US 8"
      },
      {
        name: "US 9"
      },
      {
        name: "US 10"
      },
      {
        name: "US 11"
      },
      {
        name: "US 12"
      }
    ]
  }
];

const variants = [];

ringOptions[0].values.forEach((style, i1) => {
  ringOptions[1].values.forEach((color, i2) => {
    // if (color.name === "Stealth" && style.name === "Balance") {
    //   return;
    // }
    //
    // if (color.name === "Diamond" && style.name === "Heritage") {
    //   return;
    // }

    ringOptions[2].values.forEach((size, i3) => {
      variants.push({
        price: 100 + 50 * i1 + 10 * i2 + i3 * 1,
        selectedOptions: {
          Style: style.name,
          Color: color.name,
          Size: size.name
        }
      });
    });
  });
});

const product = {
  handle: "ring",
  options: ringOptions,
  variants: variants
};

export default product;
