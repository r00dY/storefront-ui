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
        name: "Triumph Mustard",
        color: "#9F8F37"
      },
      {
        name: "Soft mineral",
        color: "#8EB0B1"
      },
      {
        name: "Sand",
        color: "#EFEEE9"
      },
      {
        name: "Graphite",
        color: "#55544F"
      },
      {
        name: "Lava red",
        color: "#9F8F37"
      },
      {
        name: "Coral red",
        color: "#8EB0B1"
      },
      {
        name: "Grey",
        color: "#EFEEE9"
      },
      {
        name: "Blue",
        color: "#55544F"
      },
      {
        name: "Yellow",
        color: "#9F8F37"
      },
      {
        name: "Red",
        color: "#8EB0B1"
      },
      {
        name: "Black",
        color: "#EFEEE9"
      },
      {
        name: "White",
        color: "#55544F"
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
